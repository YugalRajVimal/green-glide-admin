import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

// Define the interface for user transaction details, incorporating user info for display
interface UserTransaction {
  id: number; // Unique ID for the transaction (for keying in React)
  name: string;
  email: string;
  phoneNo: string;
  amount: number;
  type: "Credit" | "Debit" | "Refund";
  creditedIn?: "Wallet" | "Original Payment Method"; // Optional, relevant for Credit/Refund
  debittedFrom?: "Wallet" | "PaymentGateway"; // Optional, relevant for Debit
  transactionDate: string; // Storing as string for example, would typically be Date object
}

// Example Data for User Transactions
const transactionData: UserTransaction[] = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    phoneNo: "+919876543210",
    amount: 500,
    type: "Credit",
    creditedIn: "Wallet",
    transactionDate: "2023-10-26",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    phoneNo: "+919812345678",
    amount: 350,
    type: "Debit",
    debittedFrom: "Wallet",
    transactionDate: "2023-10-25",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phoneNo: "+919988776655",
    amount: 1200,
    type: "Credit",
    creditedIn: "Original Payment Method",
    transactionDate: "2023-10-24",
  },
  {
    id: 4,
    name: "Sneha Singh",
    email: "sneha.singh@example.com",
    phoneNo: "+919765432109",
    amount: 750,
    type: "Debit",
    debittedFrom: "PaymentGateway",
    transactionDate: "2023-10-23",
  },
  {
    id: 5,
    name: "Vikram Patel",
    email: "vikram.patel@example.com",
    phoneNo: "+919654321098",
    amount: 200,
    type: "Refund",
    creditedIn: "Wallet",
    transactionDate: "2023-10-22",
  },
];

export default function UserTransactionsList() {
  return (
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
            {transactionData.map((transaction) => (
              <TableRow key={transaction.id}>
                
                <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                  ₹{transaction.amount}
                </TableCell>
                <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                  {transaction.type}
                </TableCell>
                <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                  {transaction.creditedIn || "-"} {/* Display if present, else '-' */}
                </TableCell>
                <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                  {transaction.debittedFrom || "-"} {/* Display if present, else '-' */}
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
  );
}
