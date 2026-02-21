import ClientPage from "./ClientPage";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://6996e4647d1786436575a5f2.mockapi.io/users/",
      { cache: "no-store" },
    );

    if (!res.ok) {
      return [];
    }

    const users = await res.json();
    return users.map((user) => ({ id: String(user.id) }));
  } catch {
    return [];
  }
}

export default function Page() {
  return <ClientPage />;
}
