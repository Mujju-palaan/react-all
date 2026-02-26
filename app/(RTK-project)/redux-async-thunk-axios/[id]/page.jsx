import axios from "axios";
import ClientPage from "./ClientPage";
const API = "https://jsonplaceholder.typicode.com/users/";

export async function generateStaticParams() {
  try {
    const res = await axios.get(API);

    const users =  res.data
    return users.map((user) => ({ id: String(user.id) }));
  } catch (error) {
    console.error("Failed to generate static params:", error.message);
    return [];
  }
}

export default function Page() {
  return <ClientPage />;
}
