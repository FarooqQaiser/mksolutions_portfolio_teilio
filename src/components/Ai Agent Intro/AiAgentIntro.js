import React from "react";
import Picture from "../../assets/AIimage.jpeg";

export default function AiAgentIntro({ handleAiAgentContent }) {
  return (
    <>
      <img
        src={Picture}
        alt="AI Agent"
        className="hover:cursor-pointer w-full h-full"
        onClick={() => handleAiAgentContent(true)}
      />
    </>
  );
}
