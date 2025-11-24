import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { TableData } from "src/types/tabledata";
import { Eye, EyeSlash } from "iconsax-react";

const typePin = "123456";
const typeOTP = "OTP";

export default function RegisterConfirmForm({
  selectedItem,
  slckdkm,
  onCancelRegisterConfirmForm
}: {
  selectedItem: TableData;
  slckdkm: string;
  onCancelRegisterConfirmForm: () => void;
}) {
  const [showOTP, setShowOTP] = useState(false);
  const handleShowHideOTP = () => {
    setShowOTP((prevState) => !prevState);
  };
  // Khai báo state để lưu trữ giá trị của các ô input OTP
  const [otp, setOTP] = useState<string[]>(Array(6).fill(""));
  // Khai báo một mảng refs để lưu trữ tham chiếu đến các ô input OTP
  const otpRefs = useRef<HTMLInputElement[]>(Array(6).fill(null));

  const [isConfirmationEnabled, setIsConfirmationEnabled] = useState(false);
  useEffect(() => {
    const isAllOtpFilled = otp.every((value) => value !== "");
    setIsConfirmationEnabled(isAllOtpFilled);
  }, [otp]);

  // Hàm xử lý sự kiện thay đổi giá trị của ô input OTP
  const handleOtpInputChange = (index: number, value: string) => {
    const newOTP = [...otp];
    // Kiểm tra nếu giá trị nhập vào là số thì mới cập nhật vào state
    if (!isNaN(Number(value))) {
      newOTP[index] = value;
      setOTP(newOTP);
      // Di chuyển tới ô input tiếp theo nếu đã nhập đủ một ký tự
      if (value !== "" && index < 5) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  // Hàm xử lý sự kiện nhấn phím Backspace
  const handleOtpInputBackspace = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Nếu nhấn phím Backspace và ô input không phải là ô input đầu tiên
    if (e.key === "Backspace" && index > 0) {
      const newOTP = [...otp];
      // Xoá giá trị của ô input và chuyển focus tới ô input trước đó
      newOTP[index] = "";
      setOTP(newOTP);
      otpRefs.current[index - 1]?.focus();
    }
  };

  // Hàm xử lý khi submit OTP
  const handleSubmitOTP = () => {
    const combineOTP = otp.join("");
    // Kiểm tra nếu mã OTP nhập đúng thì hiển thị thông báo thành công
    if (combineOTP === "123456") {
      toast.success("Quý khách đã đăng ký quyền mua thành công!");
      onCancelRegisterConfirmForm();
    } else {
      // Hiển thị thông báo lỗi nếu mã OTP không đúng
      toast.error("Mã OTP không chính xác. Vui lòng nhập lại.");
    }
  };

  // Hàm xử lý thay đổi giá trị của mã PIN
  const [pinCode, setPinCode] = useState("");
  const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Kiểm tra nếu giá trị nhập vào là số và không vượt quá 6 ký tự thì mới cập nhật vào state
    if (!isNaN(Number(value)) && value.length <= 6) {
      setPinCode(value);
    }
  };

  // Hàm xử lý khi submit PIN
  const handleSubmitPin = () => {
    // Kiểm tra nếu mã PIN nhập đúng thì hiển thị thông báo thành công
    if (pinCode === typePin) {
      toast.success("Thành công!");
      onCancelRegisterConfirmForm();
    } else {
      // Hiển thị thông báo lỗi nếu mã PIN không đúng
      toast.error("Mã PIN không chính xác. Vui lòng thử lại.");
    }
  };

  return (
    <>
      {/* JSX content */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-customDark3 absolute top-164 left-435 rounded-8">
          <div className="w-full h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
            <span className="text-lg font-sans font-semibold tracking-tight text-white text-left">
              Xác nhận đăng ký quyền mua
            </span>
            <button
              className="flex ml-auto"
              onClick={onCancelRegisterConfirmForm}
            >
              <img src="/images/close.png" className="w-6 h-6" />
            </button>
          </div>
          <div className="mb-2 flex items-center mt-3">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              Tiểu khoản
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              -
            </span>
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
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              SL CK đăng ký mua
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              {slckdkm}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              Tiền mua phải thanh toán
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              -
            </span>
          </div>
          <div className="mt-5">
            <hr className="border-t border-neutral-600 w-full" />
          </div>
          <div className="flex justify-between mt-2 ml-5">
            <div className="flex">
              <div>
                <span className="text-sm">Nhập mã</span>
              </div>
              <div className="pl-2 pt-1">
                {showOTP ? (
                  <EyeSlash
                    size="15"
                    color="#D8D8D8"
                    onClick={handleShowHideOTP}
                  />
                ) : (
                  <Eye size="15" color="#D8D8D8" onClick={handleShowHideOTP} />
                )}
              </div>
            </div>
            <div className="flex mr-4">
              <span className="text-sm">Lưu PIN/OTP</span>
              <img
                src="/images/imgOTP/check box circle.png"
                className="ml-2 w-3 h-3 mt-1"
              />
            </div>
          </div>
          {typeOTP === "OTP" ? (
            <div className=" w-auto h-36 mx-4">
              <div className="otp-field bg-customBlack rounded-lg h-20 mt-3">
                <div className="py-1">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      type={showOTP ? "password" : "tel"}
                      maxLength={1}
                      // kiểm tra xem tel giá trị nhập vào có phải null không? nếu ko null thì gán
                      ref={(tel) => {
                        if (tel !== null) {
                          otpRefs.current[index] = tel;
                        }
                      }}
                      value={value}
                      // Gọi hàm xử lý khi thay đổi giá trị của ô input
                      onChange={(e) =>
                        handleOtpInputChange(index, e.target.value)
                      }
                      // Gọi hàm xử lý khi nhấn phím Backspace
                      onKeyDown={(e) => handleOtpInputBackspace(index, e)}
                      className="w-14 h-14 px-1 text-center rounded-md m-2 bg-customDark2 border-2 border-transparent focus:border-customGrayDark focus:outline-none"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex justify-center mt-3">
                    {/* Nút Huỷ */}
                    <button
                      onClick={onCancelRegisterConfirmForm}
                      className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
                    >
                      Huỷ
                    </button>
                    {/* Nút Xác nhận */}
                    <button
                      onClick={handleSubmitOTP}
                      className={`w-60 h-10 rounded-md text-sm font-normal ${
                        isConfirmationEnabled
                          ? "bg-customYellow text-customDarkGray"
                          : "bg-customGray text-customWhite"
                      }`}
                      disabled={!isConfirmationEnabled}
                    >
                      Xác nhận
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-3">
              <div>
                <input
                  type="text"
                  placeholder="Nhập mã PIN giao dịch hiện tại"
                  className="w-full h-[37px] p-[8px 10px 8px 16px] rounded-[4px] border-1 gap-[130px] bg-customDark3 border-neutral-600"
                  onChange={handlePinCodeChange}
                />
              </div>
              <div className="mt-3">
                <span className="text-customGrayDark">
                  Quý khách vui lòng mở ứng dụng KB đã đăng ký OTP để lấy mã xác
                  thực
                </span>
              </div>
              <div className="items-center mt-3">
                <button
                  onClick={onCancelRegisterConfirmForm}
                  className="w-44 h-10 mr-2 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
                >
                  Huỷ
                </button>
                <button
                  onClick={handleSubmitPin}
                  className="w-44 h-10 mr-2 text-sm font-normal border border-customYellow rounded-md text-customBrown bg-customYellow"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
