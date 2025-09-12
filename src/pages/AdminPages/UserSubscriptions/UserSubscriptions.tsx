import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import UserSubscriptionList from "./UserSubscriptionList";

const UserSubscriptions = () => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Subscriptions" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
      UserName, Email and Phone No.
      </h3>
      
      <div className="space-y-6">
        {/* <ComponentCard title="Sub Admins"> */}
        <UserSubscriptionList />
        {/* </ComponentCard> */}
      </div>
    </div>
  );
};

export default UserSubscriptions;
