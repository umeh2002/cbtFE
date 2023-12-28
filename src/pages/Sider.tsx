import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOneUser } from "../APIs/api";

const Sider = () => {
  const user = useSelector((state:any)=>state.user)
  useEffect(()=>{
    getOneUser(user._id)
  })

  return (
    <div className="w-[250px] h-full border-r-2 p-2 bg-[#F8F8F8] fixed">
      <div className="flex justify-center flex-col items-center">
      <div className="w-[70px] h-[70px] rounded-[50%] border bg-[#83529A] text-white flex justify-center items-center font-semibold hover:cursor-pointer duration-500 transition-all text-[30px] ">{user.name.substring(0,2).toUpperCase()}</div>
        <div className="capitalize mt-[7px] text-[18px] font-bold">{user?.name}</div>
        <div className="mt-[10px] flex justify-center items-center flex-col">
        <div className="lowercase text-[14px] font-medium">{user.email}</div>
        <div className="text-[15px] font-semibold">{user.regNum}</div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
