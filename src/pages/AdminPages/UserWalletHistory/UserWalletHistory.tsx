import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import { IndividualUser } from "../IndividualUser";
import UserWalletHistoryList from "./UserWalletHistoryList";

interface IndividualUsersProps {
  selectedUser: IndividualUser | null;
}

const UserWalletHistory = ({ selectedUser }: IndividualUsersProps) => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Wallet History" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        UserName, Email and Phone No.
      </h3>
      <div className="space-y-6">
        {/* <ComponentCard title="Sub Admins"> */}
        <UserWalletHistoryList selectedUser={selectedUser} />
        {/* </ComponentCard> */}
      </div>
    </div>
  );
};

export default UserWalletHistory;
