import { useState, useEffect } from "react";

import Button from "../../../components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { UserCircleIcon } from "../../../icons";
import axios from "axios";
import { IndividualUser } from "../IndividualUser";
import { useNavigate } from "react-router";

// Define the user type according to your backend response

interface IndividualUsersProps {
  setSelectedUser: React.Dispatch<React.SetStateAction<IndividualUser | null>>;
}

export default function IndividualUserList({
  setSelectedUser,
}: IndividualUsersProps) {
  const Navigate = useNavigate();

  const [users, setUsers] = useState<IndividualUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState(""); // 🔹 new
  const rowsPerPage = 5;

  const fetchUsers = async (page: number, query: string = "") => {
    try {
      const token = localStorage.getItem("admin-token");

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/individual-users`,
        {
          params: { page, limit: rowsPerPage, search: query },
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setUsers(res.data.users);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage, search);
  }, [currentPage, search]);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* 🔹 Search bar */}
      <div className="p-4 border-b flex gap-2">
        <input
          type="text"
          placeholder="Search by name, email or phone..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to first page on new search
          }}
          className="flex-1 border rounded-md px-3 py-2 text-sm"
        />
        <Button onClick={() => fetchUsers(1, search)}>Search</Button>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
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
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {users?.map((subAdmin) => (
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
                <TableCell className="px-4 py-3 text-blue-800 dark:text-white text-center">
                  {subAdmin.walletBalance || 0}
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Button
                    onClick={() => {
                      setSelectedUser(subAdmin);
                      localStorage.setItem(
                        "selectedUser",
                        JSON.stringify(subAdmin)
                      );
                      Navigate("/user-wallet-history");
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded-md"
                  >
                    View Wallet History
                  </Button>
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Button
                    onClick={() => {
                      setSelectedUser(subAdmin);
                      localStorage.setItem(
                        "selectedUser",
                        JSON.stringify(subAdmin)
                      );
                      Navigate("/view-documents");
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded-md"
                  >
                    View Documents
                  </Button>

                  {/* <Button
    onClick={() => {
      setSelectedUser(subAdmin);
      navigate("/view-documents");
    }}
    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded-md"
  >
    View Documents
  </Button> */}
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Button
                    onClick={() => {
                      setSelectedUser(subAdmin);
                      localStorage.setItem(
                        "selectedUser",
                        JSON.stringify(subAdmin)
                      );
                      Navigate("/user-subscriptions");
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded-md"
                  >
                    View Subscriptions
                  </Button>
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Button
                    onClick={() => {
                      setSelectedUser(subAdmin);
                      localStorage.setItem(
                        "selectedUser",
                        JSON.stringify(subAdmin)
                      );
                      Navigate("/user-transactions");
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded-md"
                  >
                    View Transactions
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center px-5 py-3 border-t border-gray-200 dark:border-white/[0.05]">
        <Button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="bg-gray-300 text-black px-4 py-1 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Prev
        </Button>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-black px-4 py-1 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
