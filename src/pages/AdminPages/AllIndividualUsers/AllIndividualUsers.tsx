import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import IndividualUsersList from "./IndividualUsersList";

const IndividualUsers = () => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="All Individual Users" />
      <div className="space-y-6">
        {/* <ComponentCard title="Sub Admins"> */}
        <IndividualUsersList />
        {/* </ComponentCard> */}
      </div>
    </div>
  );
};

export default IndividualUsers;
