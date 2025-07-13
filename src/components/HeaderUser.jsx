import { Link } from "react-router";

const HeaderUser = () => {
  return (
    <div className="bg-black h-20 flex items-center justify-between px-8 relative">
      <div className="w-32" />
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h2 className="text-white font-bold text-2xl">WealthQuery.AI</h2>
      </div>
      <div>
        <Link
          to="/"
          className="bg-[#1B1A55] text-white px-4 py-2 rounded-md font-medium hover:bg-[#535C91] transition duration-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export { HeaderUser };
