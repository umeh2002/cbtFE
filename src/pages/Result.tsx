import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#800080]">
      <div className="w-[400px] h-[250px] shadow-sm rounded-sm bg-white text-black flex justify-center items-center flex-col p-5">
        <div className="text-center font-medium text-[17px]">Dear Umeh Emmanuel,Thank you for completing your CBT</div>
        <span className="text-[16px] font-semibold mt-2">You scored: <span className="font-bold">180</span>
        </span>
        <Link to="/">
        <button className="py-2 px-3 bg-[#800080] text-white hover:cursor-pointer transition-all duration-500 mt-[20px] rounded-sm">Thank you</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
