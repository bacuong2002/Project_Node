const RegisterTableTradingLabel = () => {
  return (
    <div className="flex relative h-35px ">
      <div className="grid grid-cols-12 text-customGrayLight text-center items-center w-full text-sm py-1">
        <div className="grid col-span-8 grid-cols-10">
          <div className="col-span-1">Mã</div>
          <div className="col-span-1">Tiểu khoản</div>
          <div className="col-span-2">Ngày đăng ký </div>
          <div className="col-span-2">Ngày hiệu lực</div>
          <div className="col-span-1">SL đăng ký</div>
          <div className="col-span-2">Số tiền đã thanh toán</div>
          <div className="col-span-1">Trạng thái</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTableTradingLabel;
