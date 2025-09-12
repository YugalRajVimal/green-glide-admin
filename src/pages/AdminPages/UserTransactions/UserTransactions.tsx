import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import UserTransactionsList from "./UserTransactionsList";

const UserTransactions = () => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Transactions" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        UserName, Email and Phone No.
      </h3>
      <div className="space-y-6">
        {/* <ComponentCard title="Sub Admins"> */}
        <UserTransactionsList />
        {/* </ComponentCard> */}
      </div>
    </div>
  );
};

export default UserTransactions;
