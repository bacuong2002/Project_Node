import { useState } from "react";
import { TableData } from "src/types/tabledata";
import RegisterConfirmForm from "../RegisterConfirmForm";

export default function RegisterDialogForm({
  selectedItem,
  sendStatusRegisterDialog
}: {
  selectedItem: TableData;
  sendStatusRegisterDialog: (val: boolean) => void;
}) {
  const [isConfirmForm, setIsConfirmForm] = useState(false);
  const [slckdkm, setSlckdm] = useState("");
  const [isErrorSlckdkm, setIsErrorSlckdkm] = useState<boolean>(false);
  const [isDisableButton, setIsDisableButton] = useState(true);
  const [inputCharacterError, setInputCharacterError] = useState<string>("");
  const [inputValue, setInputValue] = useState(""); // Sử dụng hook useState để lưu trữ giá trị của ô input

  const handleRegisterClick = () => {
    if (!isErrorSlckdkm && inputValue.trim() !== "") {
      // Kiểm tra giá trị của ô input có tồn tại không
      setIsConfirmForm(true);
      setIsDisableButton(false);
      setInputValue(""); // Đặt lại giá trị của ô input về rỗng
    }
  };

  const handleChangeSlckdkm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const specialCharactersRegex = /[`,.*&%$#@!\-+=?]/;
    const decimalRegex = /^\d*\.?\d*$/;
    const inputValueNumber = parseFloat(inputValue);
    if (inputValueNumber > selectedItem.slckcdm) {
      setIsErrorSlckdkm(true);
      setSlckdm("");
      setInputCharacterError(
        "*SL CK đăng ký mua không được vượt quá SL CK còn được mua"
      );
      setIsDisableButton(true);
    } else if (
      specialCharactersRegex.test(inputValue) ||
      !decimalRegex.test(inputValue) ||
      parseFloat(inputValue) < 0
    ) {
      setIsErrorSlckdkm(true);
      setInputCharacterError("*SL không hợp lệ");
      setIsDisableButton(true);
    } else if (inputValue === "") {
      setIsErrorSlckdkm(false);
      setSlckdm("");
      setIsDisableButton(true);
    } else {
      setIsErrorSlckdkm(false);
      setSlckdm(inputValue);
      setIsDisableButton(false);
    }
    setInputValue(inputValue); // Cập nhật giá trị của ô input trong trạng thái của component
  };

  const handleCancelClick = () => {
    sendStatusRegisterDialog(false);
    setSlckdm("");
    setIsErrorSlckdkm(false);
    setIsDisableButton(true);
    setInputValue(""); // Đặt lại giá trị của ô input về rỗng khi hủy bỏ form xác nhận
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
        {!isConfirmForm ? (
          <>
            <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
              <span className="text-lg font-sans font-semibold tracking-tight text-white ">
                Đăng ký quyền mua
              </span>
              <button className="flex ml-auto" onClick={handleCancelClick}>
                <img src="/images/close.png" className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
                  Tiểu khoản
                </label>
                <span className="bg-customDark3 py-1 flex justify-end w-full px-5"></span>
              </div>
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
                  Mã
                </label>
                <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
                  {selectedItem.id}
                </span>
              </div>
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
                  Giá
                </label>
                <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
                  {selectedItem.price}
                </span>
              </div>
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
                  SL CK hưởng quyền
                </label>
                <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
                  {selectedItem.slckhq}
                </span>
              </div>
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
                  SL quyền sở hữu
                </label>
                <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
                  {selectedItem.slqsh}
                </span>
              </div>
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
                  SL CK đã mua
                </label>
                <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
                  {selectedItem.slckdm}
                </span>
              </div>
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
                  SL CK còn được mua
                </label>
                <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
                  {selectedItem.slckcdm}
                </span>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
                  SL CK đăng ký mua
                </label>
                <div className="flex flex-col items-end px-5">
                  <input
                    type="text"
                    className="border border-customGray rounded w-40 text-right py-1 bg-customDark3 text-zinc-400 mb-1 pr-2"
                    placeholder="Nhập số lượng"
                    onChange={handleChangeSlckdkm}
                  />
                  {isErrorSlckdkm ? (
                    <div className="flex">
                      <div>
                        <img src="/images/danger.png" />
                      </div>
                      <div className="text-customRed whitespace-nowrap">
                        {inputCharacterError}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-zinc-400 text-left px-5 flex-shrink-0 ">
                  Tiền mua phải thanh toán
                </label>
                <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
                  -
                </span>
              </div>
            </div>

            <div className="mt-5">
              <hr className="border-t border-neutral-600 w-full" />
            </div>

            <div className="flex justify-center my-5 h-18">
              <button
                onClick={handleCancelClick}
                className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
              >
                Huỷ
              </button>
              <button
                onClick={handleRegisterClick}
                disabled={isDisableButton}
                className={`w-60 h-10 text-sm font-normal rounded-md ${
                  !isDisableButton
                    ? "bg-customYellow text-customDarkGray"
                    : "bg-customGray text-customWhite"
                }`}
              >
                Đăng ký
              </button>
            </div>
          </>
        ) : (
          <RegisterConfirmForm
            selectedItem={selectedItem}
            slckdkm={slckdkm}
            onCancelRegisterConfirmForm={() => {
              setIsConfirmForm(false); // Tắt form xác nhận
              sendStatusRegisterDialog(false); // Tắt cả hai form khi huỷ
            }}
          />
        )}
      </div>
    </div>
  );
}
