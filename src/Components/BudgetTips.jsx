import React from "react";

const BudgetTips = () => {
  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Budgeting Tips</h3>
        <p className="">
          Master your money with smart budgeting habits that help you save more,
          spend wisely, and stay in control every single day.
        </p>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1/2 flex justify-center">
          <img
            className="w-96 h-96 object-cover"
            src="https://static.vecteezy.com/system/resources/previews/056/165/121/non_2x/budget-planning-concept-financial-plan-business-plan-concept-businessman-with-checklist-illustration-in-flat-style-vector.jpg"
            alt=""
          />
        </div>
        <div className="space-y-3 flex-1/2">
          <div className="p-3 shadow-md shadow-purple-200 border-purple-500 rounded-md space-y-2">
            <h3 className="text-xl font-bold ">Manage expenses with planing</h3>
            <p className="text-gray-400">
              Effectively manage your expenses by planning ahead, tracking every
              cost, prioritizing needs over wants, and achieving financial
              stability consistently.
            </p>
          </div>
          <div className="p-3 shadow-md shadow-purple-200 border-purple-500 rounded-md space-y-2">
            <h3 className="text-xl font-bold ">Plan ahead, spend wisely</h3>
            <p className="text-gray-400">
              Take control of your finances by planning ahead, making informed
              spending decisions, saving consistently, and achieving long-term
              financial stability effortlessly.
            </p>
          </div>
          <div className="p-3 shadow-md shadow-purple-200 border-purple-500 rounded-md space-y-2">
            <h3 className="text-xl font-bold ">
              Optimize monthly budget allocations.
            </h3>
            <p className="text-gray-400">
              Effectively allocate your monthly income across essential
              expenses, savings, and investments to maximize financial
              efficiency, control spending, and achieve goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTips;
