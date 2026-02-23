import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch } from "react-redux";
import { DeleteUsername } from "../../slice/Async-thunk-all-methods/UsernameSlice";
import EditUserForm from "./EditUserForm";

export function DataTable({ data }) {
  const dispatch = useDispatch()
  return (
    <Table>
      <TableCaption>A list of Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>createdAt</TableHead>
          <TableHead>updatedAt</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell>{user.createdAt}</TableCell>
            <TableCell>{user.updatedAt}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                {/* <UpdateUserForm usernamedata={user} /> */}
                <EditUserForm userdata={user} />
                <button 
                onClick={() => {dispatch(DeleteUsername(user.id))}}
                className="bg-red-300 rounded p-1 cursor-pointer">
                  Delete
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
