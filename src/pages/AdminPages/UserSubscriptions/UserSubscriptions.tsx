import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import { IndividualUser } from "../IndividualUser";
import UserSubscriptionList from "./UserSubscriptionList";

interface IndividualUsersProps {
  selectedUser: IndividualUser | null;
}

const UserSubscriptions = ({ selectedUser }: IndividualUsersProps) => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Subscriptions" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        UserName, Email and Phone No.
      </h3>

      <div className="space-y-6">
        <UserSubscriptionList selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default UserSubscriptions;
