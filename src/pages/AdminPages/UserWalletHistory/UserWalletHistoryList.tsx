import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

interface WalletTransaction {
  id: number; // local unique key for React
  amount: number;
  type: "Credit" | "Debit";
  transactionDate: string; // ISO string for example
  isPaid: boolean;
  orderId: string;
}

// Example Wallet History Data
const walletHistory: WalletTransaction[] = [
  {
    id: 1,
    amount: 500,
    type: "Credit",
    transactionDate: "2025-09-01",
    isPaid: true,
    orderId: "ORD1001",
  },
  {
    id: 2,
    amount: 200,
    type: "Debit",
    transactionDate: "2025-09-05",
    isPaid: true,
    orderId: "ORD1002",
  },
  {
    id: 3,
    amount: 1000,
    type: "Credit",
    transactionDate: "2025-09-08",
    isPaid: false,
    orderId: "ORD1003",
  },
];

export default function UserWalletHistoryList() {
  return (
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
            {walletHistory.map((tx) => (
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
  );
}
