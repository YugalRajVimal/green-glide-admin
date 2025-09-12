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

export default function UserWalletHistoryList({
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
                  className="text-center px-5 py-3 font-medium text-gray-500"
                >
                  Amount
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500"
                >
                  Type
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500"
                >
                  Transaction Date
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500"
                >
                  Paid Status
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500"
                >
                  Order ID
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {user?.walletHistory.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="px-4 py-3 text-center text-blue-800 dark:text-white">
                    ₹{tx.amount}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-blue-800 dark:text-white">
                    {tx.type}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-blue-800 dark:text-white">
                    {tx.transactionDate}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    {tx.isPaid ? (
                      <span className="text-green-600 font-medium">Paid</span>
                    ) : (
                      <span className="text-red-600 font-medium">Unpaid</span>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-blue-800 dark:text-white">
                    {tx.orderId}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {user?.walletHistory.length === 0 && (
        <p className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100">
          No Wallet History found for this user.
        </p>
      )}
    </>
  );
}
