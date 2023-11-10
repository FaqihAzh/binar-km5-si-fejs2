import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBedak,
  decrement,
  increment,
  removeAbsurd,
  removeBedak,
  updateBrand,
} from "../redux/features/makeUpSlice";

const HandleRedux = ({ data }) => {
  const dispatch = useDispatch();
  const [newBedak, setNewBedak] = useState("");

  const bedakList = data.listBedak;

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleBrandChange = (e) => {
    const newBrand = e.target.value;
    dispatch(
      updateBrand({
        namaBrand: newBrand,
        penerbit: "Sedang di cari",
      })
    );
  };

  const handleAddNewBedak = () => {
    if (newBedak.trim() !== "") {
      dispatch(addBedak(newBedak));
      setNewBedak("");
    }
  };

  const handleRemoveSelectedBedak = (bedak) => {
    dispatch(removeBedak(bedak));
  };

  const handleRemoveAbsurd = () => {
    dispatch(removeAbsurd());
  };

  return (
    <div className="flex gap-2 flex-col w-full">
      {/* Increment & Decrement */}
      <div className="flex gap-2 w-full">
        <button
          className="px-4 py-2 bg-blue-600 font-semibold rounded-xl text-white w-full"
          onClick={handleIncrement}
        >
          Tambah
        </button>
        <button
          className="px-4 py-2 bg-blue-600 font-semibold rounded-xl text-white w-full"
          onClick={handleDecrement}
        >
          Kurang
        </button>
      </div>

      {/* Update Brand Name */}
      <input
        type="text"
        placeholder="Ganti nama brand"
        className="px-4 py-2 border rounded-xl"
        onChange={handleBrandChange}
      />

      {/* Add new data */}
      <div className="flex gap-2 w-full">
        <input
          type="text"
          placeholder="Tambah bedak"
          className="px-4 py-2 border rounded-xl w-3/4"
          value={newBedak}
          onChange={(e) => setNewBedak(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 font-semibold rounded-xl text-white w-1/4"
          onClick={handleAddNewBedak}
        >
          Tambah Bedak
        </button>
      </div>

      {/* Delete Absurd */}
      <div className="w-full">
        <button
          className="px-4 py-2 bg-red-600 font-semibold rounded-xl text-white w-full"
          onClick={handleRemoveAbsurd}
        >
          Hapus Pop
        </button>
      </div>

      {/* Delete data */}
      <div className="space-y-2">
        {bedakList.map((bedak, index) => (
          <div key={index} className="flex gap-2 items-center">
            <button
              className="px-4 py-2 bg-red-600 rounded-xl text-white text-sm font-semibold"
              onClick={() => handleRemoveSelectedBedak(bedak)}
            >
              Hapus
            </button>
            <p className="font-semibold text-base">{bedak}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandleRedux;
