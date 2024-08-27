import React from "react";
import Picture from "../../assets/Bulk SMS.png";

export default function BulkSmsIntro({ handleBulkSMSContent }) {
  return (
    <>
      <img
        src={Picture}
        alt="Bulk SMS"
        className="hover:cursor-pointer w-full h-full"
        onClick={() => handleBulkSMSContent(true)}
      />
    </>
  );
}
