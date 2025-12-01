const Timer = ({ title, time }: any) => {
  return (
    <div className="bg-blue-200 justify-self-center items-center rounded w-3xs text-center p-6 m-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="border rounded w-20 justify-self-center text-[12px]">
        {time} second{time > 1 ? "s" : ""}
      </p>

      <button className="bg-black text-amber-50 rounded mt-6 px-2 cursor-pointer">
        Start Challenge
      </button>
      <p className="text-[12px] mt-6">timer is running / timer is inactive</p>
    </div>
  );
};

export default Timer;
