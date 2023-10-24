import React from "react";
import { useSelector } from "react-redux";
import HandleRedux from "./HandleRedux";

const ReduxPractice = () => {
  const data = useSelector((state) => state.makeUp.makeUp);
  const list = data && data.listBedak.map((listData) => listData).join(", ");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-8 w-1/2 space-y-4">
        <table>
          <tr>
            <td className="font-semibold text-base">Jumlah MakeUp</td>
            <td>&nbsp;:&nbsp;</td>
            <td className="font-medium text-base">{data.jumlahMakeUp}</td>
          </tr>
          <tr>
            <td className="font-semibold text-base">Nama Brand</td>
            <td>&nbsp;:&nbsp;</td>
            <td className="font-medium text-base"> {data.namaBrand}</td>
          </tr>
          <tr>
            <td className="font-semibold text-base">Penerbit</td>
            <td>&nbsp;:&nbsp;</td>
            <td className="font-medium text-base">{data.penerbit}</td>
          </tr>
          <tr>
            <td className="font-semibold text-base">List Bedak</td>
            <td>&nbsp;:&nbsp;</td>
            <td className="font-medium text-base">{list}</td>
          </tr>
        </table>
        <hr />
        <HandleRedux data={data} />
      </div>
    </div>
  );
};

export default ReduxPractice;
