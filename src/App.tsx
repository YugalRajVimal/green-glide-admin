import { BrowserRouter as Router, Routes, Route } from "react-router";

import SignIn from "./pages/AdminPages/AuthPages/SignIn";

import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/AdminPages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/AdminPages/Dashboard/Home";
import AllOrganisationUsers from "./pages/AdminPages/AllOrganisationUsers/AllOrganisationUsers";
import IndividualPackages from "./pages/AdminPages/IndividualPackages/IndividualPackages";
import OrganisationPackages from "./pages/AdminPages/OrganisationPackages/OrganisationPackages";

import UserSubscriptions from "./pages/AdminPages/UserSubscriptions/UserSubscriptions";
import UserTransactions from "./pages/AdminPages/UserTransactions/UserTransactions";
import UserWalletHistory from "./pages/AdminPages/UserWalletHistory/UserWalletHistory";
import ViewDocuments from "./pages/AdminPages/ViewDocuments/ViewDocuments";
import { useEffect, useState } from "react";
import IndividualUsers from "./pages/AdminPages/AllIndividualUsers/AllIndividualUsers";
import { IndividualUser, UserProfile } from "./pages/AdminPages/IndividualUser";
import axios from "axios";

export default function App() {
  const [selectedUser, setSelectedUser] = useState<IndividualUser | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<
    boolean | null
  >(null); // null = checking

  const getProfileDetails = async () => {
    try {
      const token = localStorage.getItem("admin-token");
      if (!token) return null;

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const userTemp: UserProfile = res?.data?.admin;
      setUser(userTemp);
      localStorage.setItem("admin-profile", JSON.stringify(userTemp));
      return userTemp;
    } catch (error) {
      console.error("Error fetching profile:", error);
      setUser(null);
      return null;
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("admin-token");
        if (!token && window.location.pathname !== "/signin") {
          window.location.href = "/signin";
        }
        if (!token) {
          setIsAdminAuthenticated(false);
          return;
        }

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/admin/auth`,
          {
            headers: { Authorization: `${token}` },
          }
        );

        if (res.status === 200) {
          setIsAdminAuthenticated(true);
          await getProfileDetails();
          window.location.href = "/";
        } else {
          setIsAdminAuthenticated(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAdminAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAdminAuthenticated === null) {
    return <div>Loading...</div>; // Spinner/loader while checking
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            <Route
              index
              path="/individual-users"
              element={<IndividualUsers setSelectedUser={setSelectedUser} />}
            />
            <Route
              index
              path="/organisation-users"
              element={
                <AllOrganisationUsers setSelectedUser={setSelectedUser} />
              }
            />

            <Route
              index
              path="/individual-packages"
              element={<IndividualPackages />}
            />
            <Route
              index
              path="/organisation-packages"
              element={<OrganisationPackages />}
            />

            <Route
              index
              path="/user-subscriptions"
              element={<UserSubscriptions selectedUser={selectedUser} />}
            />

            <Route
              index
              path="/user-transactions"
              element={<UserTransactions selectedUser={selectedUser} />}
            />

            <Route
              index
              path="/user-wallet-history"
              element={<UserWalletHistory selectedUser={selectedUser} />}
            />

            <Route
              index
              path="/view-documents"
              element={<ViewDocuments selectedUser={selectedUser} />}
            />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles user={user} />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
