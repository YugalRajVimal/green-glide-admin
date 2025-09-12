import ComponentCard from "../../../components/common/ComponentCard";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import { IndividualUser } from "../IndividualUser";

import Documents from "./Documents";

interface IndividualUsersProps {
  selectedUser: IndividualUser | null;
}

const ViewDocuments = ({ selectedUser }: IndividualUsersProps) => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Documents" />

      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        UserName, Email and Phone No.
      </h3>
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="">
          <Documents selectedUser={selectedUser}/>
        </ComponentCard>
      </div>
    </div>
  );
};

export default ViewDocuments;
