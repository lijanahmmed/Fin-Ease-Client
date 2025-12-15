import React from "react";

const FinancialService = () => {
  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Financial Service Control</h3>
        <p className="text-gray-500">
          Take full control of your finances by managing services, tracking
          accounts, and optimizing spending - all from a single platform.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-bold mb-2">Accounting Services</h2>
          <p className="text-gray-500">
            FinEase Accounting Services simplify income tracking, expense
            management, and financial reporting, helping individuals and
            businesses maintain accurate records and make informed financial
            decisions with confidence.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-bold mb-2">Proficiency in Financial</h2>
          <p className="text-gray-500">
            Proficiency in Financial empowers users to confidently manage
            budgets, track expenses, and plan savings through smart insights,
            intuitive tools, and secure features designed for better financial
            decision-making.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-bold mb-2">Financial Reporting</h2>
          <p className="text-gray-500">
            Financial Reporting in Fin Ease provides clear, real-time insights
            into your income, expenses and savings. Track your financial health
            effortlessly, generate easy-to-understand reports to achieve your
            goals confidently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialService;
