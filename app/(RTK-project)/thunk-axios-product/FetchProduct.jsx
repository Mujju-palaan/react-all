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
import { useDispatch } from "react-redux";
import { DeleteProduct } from "../../slice/product-thunk/productSlice";

const FetchProduct = ({ data }) => {
  const dispatch = useDispatch();
  const route = useRouter();
  return (
    <Table>
      <TableCaption>A list of Products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>CreatedAt</TableHead>
          <TableHead>UpdatedAt</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell className="font-medium">{product.product_name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.createdAt}</TableCell>
            <TableCell>{product.updatedAt}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <button 
                onClick={() => route.push(`thunk-axios-product/${product.id}`)}
                className="bg-blue-300 rounded py-1 px-2 cursor-pointer">
                  View
                </button>
                <button 
                onClick={()=> {dispatch(DeleteProduct(product.id))}}
                className="bg-red-300 rounded py-1 px-2 cursor-pointer">
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

export default FetchProduct;
