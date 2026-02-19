import React from "react";
import Link from "next/link";

const page = () => {
  const headings = [
    { title: "Todos-RTK", link: "/Todos-RTK" },
    { title: "feedback-project", link: "/feedback-project" },
    { title: "Employee Management App", link: "/empoyee_management_app" },
    { title: "Todo Flow (Progress bar)", link: "/todoflow" },
    { title: "Ecomm_cart", link: "/ecomm_cart" },
    { title: "Redux-async-Thunk", link: "/redux-async-Thunk" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black m-8">
      <h1 className="text-4xl	text-center">React practice</h1>
      <ul className="list-decimal list-inside text-left">
        {headings.map((e, idx) => (
          <li key={idx}>
            <Link href={e.link}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
