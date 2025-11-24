import { ArrowDown2 } from "iconsax-react";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import RegisterTableTradingData from "./RegisterTableHistory/RegisterTableTradingData";
import RegisterTableTradingLabel from "./RegisterTableHistory/RegisterTableTradingLabel";

export default function RegisterBuyHistory() {
  const [isDropdownTime, setIsDropdownTime] = useState(false);
  const [isDropdownStatus, setIsDropdownStatus] = useState(false);
  const refDialogHistoryTrading = useRef(null);
  const handleClickOutSideDialogTradinng = () => {
    setIsDropdownTime(false);
    setIsDropdownStatus(false);
  };
  useOnClickOutside(refDialogHistoryTrading, handleClickOutSideDialogTradinng);

  const toggleDropdownStatus = () => {
    setIsDropdownStatus(!isDropdownStatus);
  };
  const toggleDropdown = () => {
    setIsDropdownTime(!isDropdownTime);
  };
  return (
    <>
      <div className="flex pt-3">
        <div className=" h-9 w-52 rounded-md flex item-center border border-customBlack justify-center">
          <button className=" flex items-center">
            <span className="ml-2 text-sm text-customGrayDark">
              Mã chứng khoán:
            </span>
            <span className="ml-2 text-sm text-customGrayLight">Tất cả</span>
          </button>
        </div>
        <div
          className=" h-9 w-40 rounded-md flex item-center border border-customBlack mx-3 justify-center"
          ref={refDialogHistoryTrading}
        >
          <button
            className="flex pt-2 text-customGrayLight text-sm ml-2"
            onClick={toggleDropdownStatus}
          >
            <span className="ml-2 text-sm text-customGrayDark">
              Trạng thái:
            </span>
            <span className="ml-2 text-sm text-customGrayLight">Tất cả</span>
            <ArrowDown2 size="22" color="#d8d8d8" className="pl-2" />
          </button>
          {isDropdownStatus && (
            <div className=" absolute bg-customBlack mt-10 z-50 w-40 h-30 rounded-t-md">
              <div className="  py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm ">Tất cả</label>
              </div>
              <div className="  py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Chờ duyệt</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Thành công</label>
              </div>
            </div>
          )}
        </div>
        <div
          className=" h-9 w-52 rounded-md flex item-center border border-customBlack justify-center"
          ref={refDialogHistoryTrading}
        >
          <button className="flex pt-2" onClick={toggleDropdown}>
            <span className="ml-2 text-sm text-customGrayDark">
              Khoảng thời gian:
            </span>
            <span className="ml-2 text-sm text-customGrayLight">Tất cả</span>
            <ArrowDown2 size="22" color="#d8d8d8" className="pl-2" />
          </button>
          {isDropdownTime && (
            <div className=" absolute bg-customBlack mt-10 z-50 w-52 h-60 rounded-t-md">
              <div className="  py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm ">Tất cả</label>
              </div>
              <div className="  py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Hôm nay</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Hôm qua</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">7 ngày trước</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">1 tháng trước</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Tùy chỉnh</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className=" border-neutral-700 mt-5 " />
      <div className="py-3">
        <RegisterTableTradingLabel />
      </div>
      <hr className=" border-neutral-700 " />
      <RegisterTableTradingData />
    </>
  );
}
