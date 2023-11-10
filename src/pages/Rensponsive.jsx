import React from "react";

const Rensponsive = () => {
  return (
    <>
      <div className="p-4 space-y-4 w-full h-screen box-border">
        <div className="flex justify-end md:justify-center w-full h-1/6 ">
          <div className="bg-[#EB3838] w-1/3 md:w-full h-full flex justify-center items-center">
            <span className="text-white font-semibold text-2xl">Merah</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full h-5/6">
          <div className="justify-center items-center h-full w-1/3 bg-[#5C38EB] hidden lg:flex">
            <span className="text-white font-semibold text-2xl">Ungu</span>
          </div>
          <div className="flex flex-col gap-4 md:flex-col-reverse w-full h-full">
            <div className="flex justify-center items-center h-2/6  w-full bg-[#5C38EB] lg:hidden">
              <span className="text-white font-semibold text-2xl">Ungu</span>
            </div>
            <div className="flex justify-between md:flex-row-reverse gap-4 items-center h-2/6 lg:h-3/6 w-full">
              <div className="flex justify-center items-center h-full w-full bg-[#EB38AE]">
                <span className="text-white font-semibold text-2xl">Pink</span>
              </div>
              <div className="flex justify-center items-center h-full w-full bg-[#38C0EB] md:bg-[#EB38AE] lg:bg-[#38C0EB]">
                <span className="text-white font-semibold text-2xl">Biru</span>
              </div>
            </div>
            <div className="flex justify-center items-center h-2/6 lg:h-3/6 w-full bg-[#38EB55]">
              <span className="text-white font-semibold text-2xl">Hijau</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rensponsive;
