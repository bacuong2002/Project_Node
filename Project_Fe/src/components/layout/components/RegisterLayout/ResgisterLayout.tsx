import { useState } from "react";
import RegisterFitter from "./RegisterFitter";
import RegisterTableData from "./RegisterTable/RegisterTableData";
import RegisterTableLabel from "./RegisterTable/RegisterTableLabel";
import { TableData } from "src/types/tabledata";

export default function ResgisterLayout() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const handleTableChange = (data: TableData[]) => {
    setTableData(data);
  };

  return (
    <div className="">
      <RegisterFitter sendTableData={handleTableChange} />
      <hr className=" border-neutral-700 mt-4 " />
      <div className="mt-3 ">
        <RegisterTableLabel />
      </div>
      <hr className=" border-neutral-700 mt-4" />
      {tableData.length > 0 ? (
        <RegisterTableData tableData={tableData} />
      ) : (
        <div className="flex justify-center pt-32">
          <div className="text-center">
            <img src="/images/imgEmpty/cry.png" />
            <p className="text-sm font-medium text-customGrayDark ">
              Danh sách trống
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
