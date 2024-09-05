import React from "react";
import Picture from "../../assets/AI Agent.png";

export default function AiAgentIntro({ handleAiAgentContent }) {
  return (
    <>
      <img
        src={Picture}
        alt="AI Agent"
        className="hover:cursor-pointer w-4/6 h-5/6"
        onClick={() => handleAiAgentContent(true)}
      />
    </>
  );
}
