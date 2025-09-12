import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { IndividualUser } from "../IndividualUser";

interface IndividualUsersProps {
  selectedUser: IndividualUser | null;
}

export default function UserSubscriptionList({
  selectedUser,
}: IndividualUsersProps) {
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
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Starts On
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Amount
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Days Count
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Total Cost
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Payment From
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Order ID
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Vehicle Count
                </TableCell>

                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Active
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Paid
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Package Id
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {user?.subscriptionHistory.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                    {new Date(user.subscriptionStartsOn).toISOString().split('T')[0]}
                  </TableCell>
                  <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                    ₹{user.amount}
                  </TableCell>
                  <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                    {user.daysCount}
                  </TableCell>
                  <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                    {user.daysCount * user.amount}
                  </TableCell>

                  <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                    {user.paymentFrom}
                  </TableCell>
                  <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                    {user.orderId}
                  </TableCell>
                  <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                    {user.vehicleCount}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    {user.active ? "✅" : "❌"}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    {user.isPaid ? "✅" : "❌"}
                  </TableCell>
                  <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                    {user.packageId}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {user?.subscriptionHistory.length === 0 && (
        <p className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100">
          No subscriptions found for this user.
        </p>
      )}
    </>
  );
}
