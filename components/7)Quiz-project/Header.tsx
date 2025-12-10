import Image from "next/image";
import logo from "../../public/react.jpg";

const Header = () => {
  return (
    <div className="text-center justify-self-center p-2 ">
      <Image
        className="justify-self-center"
        src={logo}
        alt="logo"
        height={100}
        width={100}
      />
      <h1 className="text-4xl text-amber-50 font-semibold tracking-wide">
        REACT QUIZ
      </h1>
    </div>
  );
};

export default Header;
