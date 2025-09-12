import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import { IndividualUser } from "../IndividualUser";
import OrganisationUsersList from "./OrganisationUsersList";

interface IndividualUsersProps {
  setSelectedUser: React.Dispatch<React.SetStateAction<IndividualUser | null>>;
}

const AllOrganisationUsers = ({ setSelectedUser }: IndividualUsersProps) => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="All Organisation Users" />
      <div className="space-y-6">
        {/* <ComponentCard title="Sub Admins"> */}
        <OrganisationUsersList setSelectedUser={setSelectedUser} />
        {/* </ComponentCard> */}
      </div>
    </div>
  );
};

export default AllOrganisationUsers;
