import ComponentCard from "../../../components/common/ComponentCard";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

import Documents from "./Documents";

const ViewDocuments = () => {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Documents" />

      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        UserName, Email and Phone No.
      </h3>
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="">
          <Documents />
        </ComponentCard>
      </div>
    </div>
  );
};

export default ViewDocuments;
