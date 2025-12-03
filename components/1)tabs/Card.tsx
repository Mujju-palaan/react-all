import Image from "next/image";

interface CardProps {
  id: number;
  name: string;
  description: string;
}

const Card = ({id,name,description}:CardProps) => {
  return (
    <div key={id} className="rounded-2xl bg-amber-200 p-4 w-68 h-auto">
      <Image
        src={`/react.jpg`}
        alt=""
        width={100}
        height={100}
        className="text-center justify-self-center"
      />
      <h1 className="text-3xl pt-4">{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
