import React from "react";
import Picture from "../../assets/Cold Calling.png";

export default function ColdCallingIntro() {
  return (
    <>
      <img
        src={Picture}
        alt="Cold Calling"
        className="hover:cursor-pointer w-4/6 h-5/6"
      />
    </>
  );
}
