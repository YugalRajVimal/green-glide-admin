import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import { IndividualUser } from "../IndividualUser";
import IndividualUsersList from "./IndividualUsersList";

interface IndividualUsersProps {
  setSelectedUser: React.Dispatch<React.SetStateAction<IndividualUser | null>>;
}

const IndividualUsers = ({ setSelectedUser }: IndividualUsersProps) => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="All Individual Users" />
      <div className="space-y-6">
        {/* <ComponentCard title="Sub Admins"> */}
        <IndividualUsersList setSelectedUser={setSelectedUser} />
        {/* </ComponentCard> */}
      </div>
    </div>
  );
};

export default IndividualUsers;
