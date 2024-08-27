import React, { useState } from "react";
import HomeDescription from "./HomeDecription";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("");

  const handleNavigationBar = (value) => {
    setActiveComponent(value);
  };

  return (
    <>
      <div className="px-28 mt-20 w-full h-full flex flex-col">
        <div className="py-36 grid grid-cols-[1fr_15fr] gap-20 w-full items-center">
          <div>
            <p className="font-semibold flex flex-col border-b-8 border-white">
              Portfolio <span>Projects</span>
            </p>
          </div>
          <div>
            <p className="text-6xl font-bold">Twilio Services</p>
          </div>
        </div>
        <HomeDescription
          activeComponent={activeComponent}
          handleNavigationBar={handleNavigationBar}
        />
      </div>
    </>
  );
}
