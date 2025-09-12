import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import UserWalletHistoryList from "./UserWalletHistoryList";


const UserWalletHistory = () => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Wallet History" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
      UserName, Email and Phone No.
      </h3>
      <div className="space-y-6">
        {/* <ComponentCard title="Sub Admins"> */}
        <UserWalletHistoryList />
        {/* </ComponentCard> */}
      </div>
    </div>
  );
};

export default UserWalletHistory;
