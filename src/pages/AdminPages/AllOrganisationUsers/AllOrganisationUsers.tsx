import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import OrganisationUsersList from "./OrganisationUsersList";

const AllOrganisationUsers = () => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="All Organisation Users" />
      <div className="space-y-6">
        {/* <ComponentCard title="Sub Admins"> */}
        <OrganisationUsersList />
        {/* </ComponentCard> */}
      </div>
    </div>
  );
};

export default AllOrganisationUsers;
