import EcartDrawer from "./EcartDrawer";

const Ecart_Nav = () => {

  return (
    <div className="flex gap-2 justify-around p-4 shadow-xl">
      <div className="md:text-2xl font-bold cursor-pointer">
        <h1>Mujju Mart</h1>
      </div>
      <div className="cursor-pointer">
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter your product"
          className="md:w-80 md:p-2 p-1 border rounded-xl bg-stone-300"
        />
      </div>

      <EcartDrawer />
    </div>
  );
};

export default Ecart_Nav;
