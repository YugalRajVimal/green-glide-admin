import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

// Define the interface for subscription details
interface UserSubscription {
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  packageName: string;
  subscriptionStartsOn: string;
  amount: number;
  paymentFrom: string;
  orderId: string;
  vehicleCount: number;
  daysCount: number;
  active: boolean;
  isPaid: boolean;
}

// Example Data
const subscriptionData: UserSubscription[] = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    phoneNo: "+919876543210",
    packageName: "Monthly Plan",
    subscriptionStartsOn: "2025-09-01",
    amount: 350,
    paymentFrom: "Razorpay",
    orderId: "ORD123456",
    vehicleCount: 2,
    daysCount: 30,
    active: true,
    isPaid: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    phoneNo: "+919812345678",
    packageName: "Weekly Plan",
    subscriptionStartsOn: "2025-09-07",
    amount: 200,
    paymentFrom: "Paytm",
    orderId: "ORD654321",
    vehicleCount: 1,
    daysCount: 7,
    active: false,
    isPaid: false,
  },
];

export default function UserSubscriptionList() {
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
                Package
              </TableCell>
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
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {subscriptionData.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                  {user.packageName}
                </TableCell>
                <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                  {user.subscriptionStartsOn}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
