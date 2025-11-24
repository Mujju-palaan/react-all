import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="justify-self-center">
      <Image
        className="justify-self-center rounded-sm"
        src={`/invest/Investing.webp`}
        alt="image"
        height={200}
        width={200}
      />
      <h1 className="text-4xl text-amber-50">Investment Calculator</h1>
    </div>
  );
};

export default Header;
