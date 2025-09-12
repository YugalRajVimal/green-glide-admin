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

export default function UserTransactionsList({
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
                  Amount
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Type
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Credited In
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Debited From
                </TableCell>
                <TableCell
                  isHeader
                  className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100"
                >
                  Transaction Date
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {user?.transactionHistory.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                    ₹{transaction.amount}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                    {transaction.type}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                    {transaction.creditedIn || "-"}{" "}
                    {/* Display if present, else '-' */}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                    {transaction.debittedFrom || "-"}{" "}
                    {/* Display if present, else '-' */}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                    {transaction.transactionDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {user?.transactionHistory.length === 0 && (
        <p className="text-center px-5 py-3 font-medium text-gray-500 dark:text-grey-100">
          No Transactions found for this user.
        </p>
      )}
    </>
  );
}
