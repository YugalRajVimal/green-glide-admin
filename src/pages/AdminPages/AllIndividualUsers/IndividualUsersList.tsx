import Button from "../../../components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import { UserCircleIcon } from "../../../icons";

// Define the interface for a SubAdmin based on the provided context
interface SubAdmin {
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  walletBalance: number;
  // Added status for consistency with Badge component
}

// Define the table data using the new SubAdmin interface
const tableData: SubAdmin[] = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    phoneNo: "+919876543210",
    walletBalance: 100,
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    phoneNo: "+919812345678",
    walletBalance: 100,
  },
  {
    id: 3,
    name: "Rohit Kumar",
    email: "rohit.kumar@example.com",
    phoneNo: "+919700112233",
    walletBalance: 100,
  },
  {
    id: 4,
    name: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    phoneNo: "+918888556677",
    walletBalance: 100,
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phoneNo: "+919011223344",
    walletBalance: 100,
  },
];

export default function IndividualUserList() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="text-center px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
              >
                Name
              </TableCell>
              <TableCell
                isHeader
                className="text-center px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
              >
                Email & Phone No.
              </TableCell>
              <TableCell
                isHeader
                className="text-center px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
              >
                Wallet Balance
              </TableCell>
              <TableCell
                isHeader
                className="text-center px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
              >
                Wallet history
              </TableCell>
              <TableCell
                isHeader
                className="text-center px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
              >
                Documents
              </TableCell>
              <TableCell
                isHeader
                className="text-center px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
              >
                Subscriptions
              </TableCell>
              <TableCell
                isHeader
                className="text-center px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
              >
                Transaction History
              </TableCell>

              {/* <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell> */}
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((subAdmin) => (
              <TableRow key={subAdmin.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full">
                      <UserCircleIcon width={28} height={28} />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {subAdmin.name}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <a
                    href={`mailto:${subAdmin.email}`}
                    className="hover:underline text-blue-800 dark:text-blue-400"
                  >
                    {subAdmin.email}
                  </a>
                  <br />
                  <a
                    href={`tel:${subAdmin.phoneNo}`}
                    className="hover:underline text-blue-800 dark:text-blue-400"
                  >
                    {subAdmin.phoneNo}
                  </a>
                </TableCell>

                <TableCell className="px-4 py-3  text-blue-800 dark:text-white text-center">
                  {subAdmin.walletBalance || 0}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <a href={`/user-wallet-history`} className="">
                    <Button className="inline-flex items-center justify-center rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                      View Wallet History
                    </Button>
                  </a>
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <a href={`/view-documents`} className="">
                    <Button className="inline-flex items-center justify-center rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                      View Documents
                    </Button>
                  </a>
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <a href={`/user-subscriptions`} className="">
                    <Button className="inline-flex items-center justify-center rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                      View Subscriptions
                    </Button>
                  </a>
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <a href={`/user-transactions`} className="">
                    <Button className="inline-flex items-center justify-center rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                      View Transactions
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
