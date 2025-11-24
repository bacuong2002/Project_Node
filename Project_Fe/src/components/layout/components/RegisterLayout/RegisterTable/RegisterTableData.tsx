import { useState } from "react";
import { TableData } from "src/types/tabledata";
import RegisterDialogForm from "../../RegisterDialogForm";

const RegisterTableData = ({ tableData }: { tableData: TableData[] }) => {
  const [selectedItem, setSelectedItem] = useState<TableData | null>(null);
  const [showData, setShowData] = useState(false);

  const handleRegisterClick = (item: TableData) => {
    setSelectedItem(item);
    setShowData(true);
  };
  const getStatusRegisterDialog = (val: boolean) => {
    setShowData(val);
  };

  return (
    <>
      {showData && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
      )}
      <div className="overflow-y-auto max-h-351">
        {tableData.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className={"flex"}>
            <div
              className={`grid grid-cols-12 text-white text-center items-center w-full text-xs ${
                index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`
              }`}
            >
              <div className="grid col-span-4 grid-cols-8 py-2 ">
                <div className="col-span-1">{item.id}</div>
                <div className="col-span-1">{item.symbol}</div>
                <div className="col-span-3">{item.slckhq}</div>
                <div className="col-span-3">{item.slqsh}</div>
              </div>
              <div className="grid col-span-4 grid-cols-6">
                <div className="col-span-1">{item.price}</div>
                <div className="col-span-1">
                  {new Date(item.term).toLocaleDateString()}
                </div>
                <div className="col-span-2">
                  {new Date(item.termdk).toLocaleDateString()}
                </div>
                <div className="col-span-2">{item.slckcdm}</div>
              </div>
              <div className="grid col-span-4 grid-cols-4">
                <div className="col-span-1">{item.slckdm}</div>
                <div className="col-span-1">{item.paid}</div>
                <div className="col-span-1">{item.payable}</div>
                <div className="col-span-1 h-full flex justify-center items-center text-xs text-yellow-400 underline">
                  <button onClick={() => handleRegisterClick(item)}>
                    Đăng ký
                  </button>
                </div>
                {showData && selectedItem ? (
                  <RegisterDialogForm
                    selectedItem={selectedItem}
                    sendStatusRegisterDialog={getStatusRegisterDialog}
                  />
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RegisterTableData;
