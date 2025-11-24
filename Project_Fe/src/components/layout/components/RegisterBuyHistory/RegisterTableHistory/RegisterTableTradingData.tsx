import React, { useState, useEffect } from "react";
import { History } from "src/types/history";
const RegisterTableTradingData: React.FC = () => {
  const [registersHistory, setRegistersHistory] = useState<History[]>([]);
  useEffect(() => {
    fetch("https://64f015e48a8b66ecf779241a.mockapi.io/api/registerHistory")
      .then((response) => response.json())
      .then((data) => {
        setRegistersHistory(data);
      });
  }, []);

  return (
    <>
      <div className="overflow-y-auto max-h-351">
        {registersHistory.map((registerHistory, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className={"flex"}>
            <div
              key={registerHistory.id}
              className={`grid grid-cols-12 text-white text-center items-center w-full text-xs ${
                index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`
              }`}
            >
              <div className="grid col-span-8 grid-cols-10 py-2">
                <div className="col-span-1">{registerHistory.id}</div>
                <div className="col-span-1">{registerHistory.TieuKhoan}</div>
                <div className="col-span-2">
                  {new Date(registerHistory.registerDate).toLocaleDateString()}
                </div>
                <div className="col-span-2">
                  {new Date(registerHistory.effectDate).toLocaleDateString()}
                </div>
                <div className="col-span-1">{registerHistory.sldk}</div>
                <div className="col-span-2">{registerHistory.paid}</div>
                <div className="col-span-1">
                  {registerHistory.status ? "Đã xong" : "Chờ duyệt"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RegisterTableTradingData;
