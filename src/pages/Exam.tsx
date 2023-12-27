import { Link } from "react-router-dom";

const Exam = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#F7E5E9] text-white">
      <div className="w-[70%] h-[75%] bg-white text-black shadow-md rounded-sm">
        <div className="w-full h-[135px] flex  p-3 justify-between items-center mb-2">
          <div className="h-full w-[300px] bg-[#F8F8F8] rounded-sm p-1 text-[15px]">
            Welcome to the Computer-Based Test (CBT). This exam consists of 15
            questions, each designed to assess your knowledge in{" "}
            <span className="font-bold">HTML/CSS</span>
          </div>
          <div className="h-full w-[300px] bg-[#F8F8F8] rounded-sm  p-1">
            You have a total of{" "}
            <span className="capitalize font-bold">twenty minutes</span> to
            complete the exam. Manage your time wisely to ensure that you can
            answer all questions within the allocated time.
          </div>
          <div className="h-full w-[300px] bg-[#F8F8F8] rounded-sm  p-1">
            You can flag questions you are unsure about to review later. Use the
            flagging feature to mark questions for later review.
          </div>
        </div>
        <div className="w-full h-[135px] flex p-3 justify-between items-center mb-2">
          <div className="h-full w-[300px] bg-[#F8F8F8] rounded-sm  p-1 ">
            Read each question carefully before selecting your answer. Ensure
            you understand the requirements of the question before making your
            choice.
          </div>
          <div className="h-full w-[300px] bg-[#F8F8F8] rounded-sm  p-1">
            Select the best possible answer by clicking on the corresponding
            option. Only one answer is correct for each question.
          </div>
          <div className="h-full w-[300px] bg-[#F8F8F8] rounded-sm  p-1">
            Before submitting the exam, review flagged questions and make any
            necessary changes. Unanswered questions will be counted as incorrect
          </div>
        </div>
        <div className="w-full h-[135px] flex p-3 justify-center items-center mb-2">
          <div className="h-full w-[300px] bg-[#F8F8F8] rounded-sm  mr-[20px] p-1">
            When you have completed all sections and reviewed your answers,
            click the <span className="font-bold">"Submit"</span> button to end
            the exam.
          </div>
          <div className="h-full w-[300px] bg-[#F8F8F8] rounded-sm  p-1">
            A confirmation prompt will appear before final submission, cause you
            won't be allowed to go back once submitted
          </div>
        </div>
        <div className="flex justify-end m-2">
          <Link to="/exam-questions">
            <button className="py-3 px-2 bg-black text-white rounded-sm hover:cursor-pointer duration-500 transition-all ">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exam;
