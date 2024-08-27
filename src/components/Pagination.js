import React, { useEffect } from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  useEffect(() => {
    let tempNumber = null;
    const interval = setInterval(() => {
      if (currentPage > 1 || currentPage === 1) {
        tempNumber = currentPage + 1;
      } else if (currentPage === 5) {
        tempNumber = 1;
      } else {
        console.error("Pagination Error!");
      }
      onPageChange(tempNumber);
    }, 2500);
    return () => clearInterval(interval);
  });

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="w-full h-full flex justify-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage === number ? "" : "text-[#454A53]"}
            onClick={() => onPageChange(number)}
          ></li>
        ))}
      </div>
    </>
  );
}
