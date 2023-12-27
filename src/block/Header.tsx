import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#F8F8F8] text-black flex-col">
        <div className="text-[30px] font-medium mb-[30px]">Welcome to my testing of building a CBT </div>
        <span className="mb-[30px] text-[20px]">Click to get started here</span>
        <Link to="/register">
        <button className="py-3 px-2 rounded-md bg-black text-white hover:cursor-pointer duration-300 transition-all">Get started</button>
        </Link>
    </div>
  )
}

export default Header