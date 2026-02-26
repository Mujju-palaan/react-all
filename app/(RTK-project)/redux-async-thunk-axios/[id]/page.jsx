import ClientPage from "./ClientPage";
const API = "https://jsonplaceholder.typicode.com/users/";

export async function generateStaticParams() {
  try {
    const res = await axios.get(API, { cache: "no-store" });

    if (!res.ok) {
      return [];
    }

    const users = await res.data
    return users.map((user) => ({ id: String(user.id) }));
  } catch {
    return [];
  }
}

export default function Page() {
  return <ClientPage />;
}
