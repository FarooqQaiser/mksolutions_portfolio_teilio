import React, { useEffect, useState } from "react";
import { LiaSmsSolid } from "react-icons/lia";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdVoiceChat } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BulkSmsIntro from "./Bulk SMS/BulkSmsIntro";
import AiAgentIntro from "./Ai Agent Intro/AiAgentIntro";
import IvrIntro from "./IVR/IvrIntro";
import ColdCallingIntro from "./Cold Calling/ColdCallingIntro";
import IntegrationWithCrmIntro from "./Integration With CRM/IntegrationWithCrmIntro";
import BulkSMS from "./Bulk SMS/BulkSMS";
import Pagination from "./Pagination";
import AiAgent from "./Ai Agent Intro/AiAgent";

export default function HomeDescription({
  activeComponent,
  handleNavigationBar,
}) {
  const [smsButton, setsmsButton] = useState("");
  const [aiAgentButton, setaiAgentButton] = useState("");
  const [ivrButton, setivrButton] = useState("");
  const [coldCallingButton, setcoldCallingButton] = useState("");
  const [integrationButton, setintegrationButton] = useState("");
  const [component, setComponent] = useState(1);
  const [isShowHomeContent, setIsShowHomeContent] = useState(true);
  const [isBulkSMS, setIsBulkSMS] = useState(false);
  const [isAiAgent, setIsAiAgent] = useState(false);
  const componentMap = [
    "smsButton",
    "aiAgentButton",
    "ivrButton",
    "coldCallingButton",
    "integrationButton",
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  useEffect(() => {
    const handleStyling = () => {
      let tempsms = null;
      let tempAiAgent = null;
      let tempIvr = null;
      let tempCold = null;
      let tempIntegration = null;
      let tempCurrentPage = 0;

      switch (activeComponent) {
        default:
          tempsms = "bg-[#444444] text-white";
          tempAiAgent = "";
          tempIvr = "";
          tempCold = "";
          tempIntegration = "";
          tempCurrentPage = 1;
          break;
        case "aiAgentButton":
          tempsms = "";
          tempAiAgent = "bg-[#444444] text-white";
          tempIvr = "";
          tempCold = "";
          tempIntegration = "";
          tempCurrentPage = 2;
          break;
        case "ivrButton":
          tempsms = "";
          tempAiAgent = "";
          tempIvr = "bg-[#444444] text-white";
          tempCold = "";
          tempIntegration = "";
          tempCurrentPage = 3;
          break;
        case "coldCallingButton":
          tempsms = "";
          tempAiAgent = "";
          tempIvr = "";
          tempCold = "bg-[#444444] text-white";
          tempIntegration = "";
          tempCurrentPage = 4;
          break;
        case "integrationButton":
          tempsms = "";
          tempAiAgent = "";
          tempIvr = "";
          tempCold = "";
          tempIntegration = "bg-[#444444] text-white";
          tempCurrentPage = 5;
          break;
      }
      setsmsButton(tempsms);
      setaiAgentButton(tempAiAgent);
      setivrButton(tempIvr);
      setcoldCallingButton(tempCold);
      setintegrationButton(tempIntegration);
      setCurrentPage(tempCurrentPage);
    };

    handleStyling();
  }, [activeComponent]);

  const handleOnClick = (value) => {
    const tempIndex = componentMap.findIndex((item) => item === value);
    setComponent(tempIndex + 1);
    handleNavigationBar(value);
  };

  const handleLeftArrowButton = () => {
    if (component > 1) {
      const newComponent = component - 1;
      setComponent(newComponent);
      handleNavigationBar(componentMap[newComponent - 1]);
    }
  };

  const handleRightArrowButton = () => {
    if (component < 5) {
      const newComponent = component + 1;
      setComponent(newComponent);
      handleNavigationBar(componentMap[newComponent - 1]);
    }
  };

  const handleBulkSMSContent = (value) => {
    setIsShowHomeContent(!value);
    setIsBulkSMS(value);
  };

  const handleAiAgentContent = (value) => {
    setIsShowHomeContent(!value);
    setIsAiAgent(value);
  };

  const handleBackButton = (value) => {
    setIsShowHomeContent(!value);
    setIsAiAgent(value);
    setIsBulkSMS(value);
  };

  const onPageChange = (value) => {
    setCurrentPage(value);
    handleNavigationBar(componentMap[value - 1]);
  };

  return (
    <>
      {!isShowHomeContent ? (
        <>
          {isBulkSMS && (
            <>
              <div className="w-full h-screen">
                <BulkSMS handleBackButton={handleBackButton} />
              </div>
            </>
          )}
          {isAiAgent && (
            <>
              <div className="w-full h-screen">
                <AiAgent handleBackButton={handleBackButton} />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="w-full h-screen grid grid-rows-[1fr_9fr_1fr] items-center">
            <div className="w-full h-full bg-[#F1F1F1] text-black grid grid-cols-[1fr_1fr_1fr_1fr_1fr]">
              <button
                onClick={() => handleOnClick("smsButton")}
                className={`smsButton px-1 w-full h-full flex justify-center gap-2 items-center hover:bg-[#333333] hover:cursor-pointer hover:text-white ${smsButton}`}
              >
                <LiaSmsSolid className="text-2xl" />
                <p className="text-lg">Bulk SMS</p>
              </button>
              <button
                onClick={() => handleOnClick("aiAgentButton")}
                className={`aiAgentButton px-1 w-full h-full flex justify-center gap-2 items-center hover:bg-[#333333] hover:cursor-pointer hover:text-white ${aiAgentButton}`}
              >
                <GiArtificialIntelligence className="text-2xl" />
                <p className="text-lg">AI Agent</p>
              </button>
              <button
                onClick={() => handleOnClick("ivrButton")}
                className={`ivrButton px-1 w-full h-full flex justify-center gap-2 items-center hover:bg-[#333333] hover:cursor-pointer hover:text-white ${ivrButton}`}
              >
                <MdVoiceChat className="text-2xl" />
                <p className="text-lg">IVR</p>
              </button>
              <button
                onClick={() => handleOnClick("coldCallingButton")}
                className={`coldCallingButton px-1 w-full h-full flex justify-center gap-2 items-center hover:bg-[#333333] hover:cursor-pointer hover:text-white ${coldCallingButton}`}
              >
                <IoCallOutline className="text-2xl" />
                <p className="text-lg">Cold Calling</p>
              </button>
              <button
                onClick={() => handleOnClick("integrationButton")}
                className={`integrationButton px-1 w-full h-full flex justify-center gap-2 items-center hover:bg-[#333333] hover:cursor-pointer hover:text-white ${integrationButton}`}
              >
                <RiCustomerServiceLine className="text-2xl" />
                <p className="text-lg">Integration with CRM</p>
              </button>
            </div>
            <div className="w-full h-full grid grid-cols-[1fr_10fr_1fr] items-center">
              <div className="flex justify-center">
                <button className="text-6xl" onClick={handleLeftArrowButton}>
                  <MdOutlineKeyboardArrowLeft />
                </button>
              </div>
              <div className="flex justify-center w-full h-5/6">
                {smsButton && (
                  <>
                    <BulkSmsIntro handleBulkSMSContent={handleBulkSMSContent} />
                  </>
                )}
                {aiAgentButton && (
                  <>
                    <AiAgentIntro handleAiAgentContent={handleAiAgentContent} />
                  </>
                )}
                {ivrButton && (
                  <>
                    <IvrIntro />
                  </>
                )}
                {coldCallingButton && (
                  <>
                    <ColdCallingIntro />
                  </>
                )}
                {integrationButton && (
                  <>
                    <IntegrationWithCrmIntro />
                  </>
                )}
              </div>
              <div className="flex justify-center">
                <button className="text-6xl" onClick={handleRightArrowButton}>
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </>
      )}
    </>
  );
}
