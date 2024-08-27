import React from "react";
import Picture from "../../assets/AIimage.jpeg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function AiAgent({ handleBackButton }) {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-20">
        <button
          className="bg-[#F1F1F1] text-black text-xl flex justify-center items-center w-10 py-2 hover:bg-[#333333] hover:text-white"
          onClick={() => handleBackButton(false)}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="flex flex-col justify-between">
          <p className="text-4xl font-bold">Description</p>
          <div className="grid grid-cols-[2fr_3fr] items-center">
            <p className="text-xl">
              Embrace the future of communication with AI calling. Picture an
              intelligent AI agent handling routine tasks like scheduling doctor
              appointments, confirming insurance leads, reminding clients of
              meetings, and pre-qualifying leads then transferring calls to live
              agents based on need. AI voice technology provides a
              transformative solution that saves time, cost and boosts your
              business.
            </p>
            <div className="py-20">
              <img src={Picture} alt="AI Agent" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <p className="text-4xl font-bold">Projects</p>
          <p className="text-xl">Here will be multiple projects displayed</p>
          <div className="py-20 grid grid-cols-[1fr_1fr_1fr_1fr] gap-10">
            <p className="text-center text-lg">Project 1</p>
            <p className="text-center text-lg">Project 2</p>
            <p className="text-center text-lg">Project 3</p>
            <p className="text-center text-lg">Project 4</p>
            <p className="text-center text-lg">Project 5</p>
            <p className="text-center text-lg">Project 6</p>
            <p className="text-center text-lg">Project 7</p>
            <p className="text-center text-lg">Project 8</p>
          </div>
        </div>
      </div>
    </>
  );
}
