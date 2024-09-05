import React from "react";
import Picture from "../../assets/IVR.jpg";

export default function IvrIntro() {
  return (
    <>
      <img
        src={Picture}
        alt="IVR"
        className="hover:cursor-pointer w-4/6 h-5/6"
      />
    </>
  );
}
