import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black m-8">
      <h1 className="text-4xl	text-center">React udemy course</h1>
      <ul className="list-decimal list-inside text-left">
        <li><Link href={`/tabs`}>Tabs (OnClick change data)</Link></li>
        <li><Link href={`/tic-tac-toe`}>Tic-Tac-Toe Game</Link></li>
        <li><Link href={`/investment-calculator`}>Investment Calculator</Link></li>
        <li><Link href={`/countdown`}>Countdown</Link></li>
        <li><Link href={`/CreateNewProject`}>Create New Project Screen (prop drilling, lifting the States)</Link></li>
        <li><Link href={`/context`}>useContext</Link></li>
        <li><Link href={`/bgChanger`}>bgChanger</Link></li>
        <li><Link href={`/PasswordGenerator`}>PasswordGenerator</Link></li>
        <li><Link href={`/CurrencyConverter`}>CurrencyConverter</Link></li>

      </ul>
    </div>
  );
}
