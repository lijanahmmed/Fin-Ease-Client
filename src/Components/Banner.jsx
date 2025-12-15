import React from "react";

const Banner = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-20 flex items-center flex-col-reverse md:flex-row">
      <div className="flex-1/2">
        <h1 className="text-5xl md:text-6xl">
          Grow Your <span className="text-purple-600">Wealth</span>
        </h1>
        <h1 className="text-4xl md:text-5xl mt-2">Shape Your Tomorrow.</h1>
        <p className="text-gray-400 mt-4">
          Empowering you to take control of your money, make smarter decisions,
          and achieve lasting financial freedom with confidence and clarity.
        </p>
      </div>
      <div className="flex-1/2 md:ml-30 flex justify-center">
        <img
          className="w-96 rounded-2xl"
          src="https://img.freepik.com/premium-vector/thinking-about-money-decision-financial-planning-investment-strategy-profit-loss-expense_926199-3663908.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
