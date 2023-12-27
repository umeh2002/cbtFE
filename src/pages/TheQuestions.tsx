import img from "../assets/bg-forvo-academy-welcome.jpeg";

const TheQuestions = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#F8F8F8] p-[20px] flex flex-col">
      {/* <div className="w-full h-[150px] bg-[#F7E5E9] p-3 flex items-center">
        <div className="h-[100%] w-[300px] bg-purple-500 text-white rounded-sm  p-1 mr-[25px]">
            You have a total of{" "}
            <span className="capitalize font-bold">twenty minutes</span> to
            complete the exam. Manage your time wisely to ensure that you can
            answer all questions within the allocated time.
          </div>
          <div className="h-full w-[300px] bg-purple-500 text-white rounded-sm  p-1 mr-[25px]">
            You can flag questions you are unsure about to review later. Use the
            flagging feature to mark questions for later review.
          </div>
          <img className="h-full w-[400px] object-cover border" src={img}/>
        </div> */}
      <div className="w-full mt-[20px] p-3">
        <div className="flex w-[650px] min-h-[100px] border mb-2 p-1 shadow-md bg-white text-black">
          <span className="mr-[7px] text-[20px]">1.</span>
          <div>
            <span className="text-[20px] mb-[10px] font-semibold">
              Who is the current persident of Nigeria
            </span>
            <div>
              <input
                type="radio"
                name="question"
                id=""
                className="hover:cursor-pointer duration-500 transition-all"
              />
              <span className="ml-[7px] text-[16px] font-medium">Tinubu</span>
            </div>
            <div>
              <input
                type="radio"
                name="question"
                id=""
                className="hover:cursor-pointer duration-500 transition-all"
              />
              <span className="ml-[7px] text-[16px] font-medium">Clement</span>
            </div>
            <div>
              <input
                type="radio"
                name="question"
                id=""
                className="hover:cursor-pointer duration-500 transition-all"
              />
              <span className="ml-[7px] text-[16px] font-medium">Etim</span>
            </div>
            <div>
              <input
                type="radio"
                name="question"
                id=""
                className="hover:cursor-pointer duration-500 transition-all"
              />
              <span className="ml-[7px] text-[16px] font-medium">Emmanuel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheQuestions;
