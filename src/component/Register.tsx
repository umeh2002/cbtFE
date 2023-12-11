import { useState } from "react";


const Register = () => {

  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const [isFocused1, setIsFocused1] = useState<Boolean>(false);
  const [isFocused2, setIsFocused2] = useState<Boolean>(false);

  const [inputValue, setInputValue] = useState<String | any>("");
  const [error, setError] = useState<String | any>("");

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    setError("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setError("Please fill out this field");
    } else {
      console.log("Form submitted:", inputValue);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col text-white bg-black ">
      <form action="" onSubmit={handleSubmit} className="w-[450px] min-h-[200px] rounded-sm bg-white text-black shadow-md p-3">
        <div className="text-[20px] flex justify-center items-center font-semibold mb-1">Welcome, it good to have you here</div>
        <span className="text-[17px] flex justify-center items-center font-semibold mb-3">fill in your details to get started</span>
        <div className="mb-3">
          <span className="font-semibold text-[17px]">name</span>
          <input type="text" placeholder="enter your name" className={`w-full h-[40px] rounded-md pl-[5px] outline-none placeholder:text-[14px]  border ${
              isFocused ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            onChange={(e: any) => {
              handleInputChange(e);
            }}
          />
            {error && (
            <span className="flex justify-end text-[12px] text-red-500">
              {error}
            </span>
          )}
        </div>

        <div className="mb-3">
          <span className="font-semibold text-[17px]">email</span>
          <input type="text" placeholder="enter your email" className={`w-full h-[40px] rounded-md pl-[5px] outline-none placeholder:text-[14px]  border ${
              isFocused1 ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused1(true);
            }}
            onBlur={() => {
              setIsFocused1(false);
            }}
            onChange={(e: any) => {
              handleInputChange(e);
            }}
          />
            {error && (
            <span className="flex justify-end text-[12px] text-red-500">
              {error}
            </span>
          )}
        </div>

        <div className="mb-3">
          <span className="font-semibold text-[17px]">regNum</span>
          <input type="text" placeholder="enter your registration number" className={`w-full h-[40px] rounded-md pl-[5px] outline-none placeholder:text-[14px]  border ${
              isFocused2 ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused2(true);
            }}
            onBlur={() => {
              setIsFocused2(false);
            }}
            onChange={(e: any) => {
              handleInputChange(e);
            }}
          />
            {error && (
            <span className="flex justify-end text-[12px] text-red-500">
              {error}
            </span>
          )}
        </div>
        <button className="w-full h-[40px] rounded-md hover:cursor-pointer duration-500 transition-all bg-black text-white mt-2 text-[17px]">Start</button>
      </form>
    </div>
  )
}

export default Register