import React from "react"
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

interface iProps {
    setToggle:any
}
const ConfirmSubmit: React.FC<iProps> = ({setToggle}) => {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-full flex justify-center items-center bg-[rgba(0,0,0,0.6)]">
        <div className="text-[30px] text-red-600 absolute top-[160px] right-[370px] hover:cursor-pointer duration-500 transition-all"
        onClick={()=>{
            console.log("i am")
            setToggle(false)
        }}
        >
            <AiOutlineClose />
        </div>
        <div className="w-[500px] h-[300px] bg-white text-black shadow-sm rounded-sm">
            <div className="text-center text-[17px] font-medium p-[5px]"> 
            Congratulations! You've successfully submitted your Computer-Based Test (CBT) exam.  Thank you for your participation. Best wishes on your results!<br /> Click on the proceed button below to see your result or click on the close icon to go back, make sure you have answered all questions before proceeding to see your result!!!
            </div>
            <div className="flex justify-end mt-[80px] mr-[30px]">
                <Link to="/see-result">
                <button className="py-2 px-3 bg-[#800080] hover:cursor-pointer duration-500 transition-all rounded-md text-white">Proceed</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ConfirmSubmit