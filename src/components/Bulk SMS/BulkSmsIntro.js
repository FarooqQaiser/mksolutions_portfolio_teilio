import React from "react";
import Picture from "../../assets/Bulk SMS.png";

export default function BulkSmsIntro({ handleBulkSMSContent }) {
  return (
    <>
      <img
        src={Picture}
        alt="Bulk SMS"
        className="hover:cursor-pointer w-3/6 h-4/6"
        onClick={() => handleBulkSMSContent(true)}
      />
    </>
  );
}
