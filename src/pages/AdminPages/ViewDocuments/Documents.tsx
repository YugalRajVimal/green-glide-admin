import { useEffect, useState } from "react";
import Label from "../../../components/form/Label";
import { IndividualUser } from "../IndividualUser";

interface IndividualUsersProps {
  selectedUser: IndividualUser | null;
}

export default function Documents({ selectedUser }: IndividualUsersProps) {
  const [user, setUser] = useState<IndividualUser | null>(null);

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else if (!selectedUser) {
      if (localStorage.getItem("selectedUser")) {
        setUser(
          JSON.parse(
            localStorage.getItem("selectedUser") as string
          ) as IndividualUser
        );
      }
    }
  }, [selectedUser]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {user?.documents?.aadharFilePath ? (
          <div>
            <Label>Aadhar Card</Label>
            <img
              src={
                import.meta.env.VITE_API_URL +
                "/" +
                user?.documents?.aadharFilePath
              }
              alt="Aadhar Card"
              className="border border-gray-200 rounded-xl dark:border-gray-800"
            />
          </div>
        ) : (
          <p className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100">
            Aadhar Image Not Found
          </p>
        )}

        {user?.documents?.drivingLicenseFilePath ? (
          <div>
            <Label>Driving License</Label>
            <img
              src={
                import.meta.env.VITE_API_URL +
                "/" +
                user?.documents?.drivingLicenseFilePath
              }
              alt="Driving License"
              className="border border-gray-200 rounded-xl dark:border-gray-800"
            />
          </div>
        ) : (
          <p className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100">
            Driving License Image Not Found
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-5">
        {" "}
        {/* Added mt-5 for spacing */}
        {user?.documents?.addressProofFilePath ? (
          <div>
            <Label>Address Proof</Label>
            <img
              src={
                import.meta.env.VITE_API_URL +
                "/" +
                user?.documents?.addressProofFilePath
              }
              alt="Address Proof"
              className="border border-gray-200 rounded-xl dark:border-gray-800"
            />
          </div>
        ) : (
          <p className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100">
            Address Proof Image Not Found
          </p>
        )}
      </div>
    </>
  );
}
