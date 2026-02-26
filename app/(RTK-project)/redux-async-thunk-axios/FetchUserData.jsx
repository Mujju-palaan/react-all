import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

const FetchUserData = ({ data }) => {
  // const dispatch = useDispatch();
  const route = useRouter();
  return (
    <Table>
      <TableCaption>A list of Users.</TableCaption>
      <TableHeader>
        <TableRow>
           <TableHead className="w-[100px]">ID</TableHead>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>website</TableHead>
          {/* <TableHead>createdAt</TableHead>
          <TableHead>updatedAt</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.website}</TableCell>
            {/* <TableCell>{user.createdAt}</TableCell>
            <TableCell>{user.updatedAt}</TableCell> */}
            <TableCell>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    route.push(`redux-async-thunk-axios/${user.id}`)
                  }
                  className="bg-blue-300 rounded py-1 px-2 cursor-pointer"
                >
                  View
                </button>
                <button className="bg-red-300 rounded py-1 px-2 cursor-pointer">
                  Delete
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FetchUserData;
