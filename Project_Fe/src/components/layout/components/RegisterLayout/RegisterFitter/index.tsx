/* eslint-disable prettier/prettier */
import axios from "axios";
import { useRef, useState } from "react";
import { TableData } from "src/types/tabledata";
import { useOnClickOutside } from "usehooks-ts";

// const query = "symbol";

export default function RegisterFitter({
  sendTableData
}: {
  sendTableData: (data: TableData[]) => void;
}) {
  const [showForm, setShowForm] = useState(false);
  const [stockCodeInput, setStockCodeInput] = useState("");
  const [tableData, setTableData] = useState<TableData[]>([]);
  const refDialogFitter = useRef(null);
  const handleClickOutSideDialogTrading = () => {
    setShowForm(false);
  };
  useOnClickOutside(refDialogFitter, handleClickOutSideDialogTrading);
  const handleApplyFilter = async () => {
    if (stockCodeInput === "symbol") {
      // console.log("sendTableData:", sendTableData);
      const res = await axios.get(
        `https://64f015e48a8b66ecf779241a.mockapi.io/api/WTS`
      );
      // console.log("res =>>", res);
      setTableData(res.data);
      sendTableData(res.data);
      setShowForm(false);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className="bg-customDark3 h-9 w-40 rounded-md flex item-center">
        <button
          className="text-customGrayLight flex items-center px-7"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          <img
            className="w-5 h-5"
            src="/images/imageMenu/search-normal-new.png"
          />
          <span className="ml-2 text-base">Bộ lọc</span>
          <img
            className="ml-2 w-5 h-5"
            src="/images/imageMenu/arrow-down.png"
          />
        </button>
      </div>
      {showForm && (
        <div className="flex flex-col absolute bg-customDark3 rounded-md mt-4 z-50 w-96 h-36" ref={refDialogFitter}>
          <div className="flex mt-3">
            <label className="text-customGrayDark ml-3 text-sm mt-1">
              Mã chứng khoán
            </label>
            <input
              className=" bg-customBlack w-44 h-8 rounded-md ml-5 text-customGrayLight text-sm pl-4"
              type="text"
              placeholder="Nhập mã chứng khoán"
              onChange={(e) => setStockCodeInput(e.target.value)}
            />
          </div>
          <div className="flex flex-item justify-end mt-12">
            <div>
              <button
                className="w-24 h-8 text-customGrayLight bg-customGray text-sm rounded-md"
                onClick={handleCloseForm}
              >
                Đóng
              </button>
              <button
                className="w-24 h-8 bg-customYellow text-sm rounded-md m-2 text-customBrown"
                onClick={handleApplyFilter}
              >
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
