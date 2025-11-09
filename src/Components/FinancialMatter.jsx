import React from "react";

const FinancialMatter = () => {
  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Why Financial Planning Matters</h3>
        <p className="">
          Financial planning empowers you to control spending, save strategically, invest smartly, and build a stable, secure, and thriving future.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="border-2 border-purple-300 rounded-2xl p-7 shadow-xl space-y-3">
          <h2 className="text-lg font-bold">Financial Security</h2>
          <ul className="text-gray-400 list-disc ml-4 space-y-2">
            <li>
              Protects against unexpected expenses and emergencies, providing a
              reliable safety net for peace of mind.
            </li>
            <li>
              Ensures a stable financial future by creating consistent
              budgeting, savings, and risk management strategies.
            </li>
          </ul>
        </div>
        <div className="border-2 border-purple-300 rounded-2xl p-7 shadow-xl space-y-3">
          <h2 className="text-lg font-bold">Goal Achievement</h2>
          <ul className="text-gray-400 list-disc ml-4 space-y-2">
            <li>
              Helps set clear short-term and long-term objectives, ensuring that money is directed toward meaningful priorities.
            </li>
            <li>
              Guides progress with actionable steps and monitoring, increasing the likelihood of successfully reaching financial milestones.
            </li>
          </ul>
        </div>
        <div className="border-2 border-purple-300 rounded-2xl p-7 shadow-xl space-y-3">
          <h2 className="text-lg font-bold">Better Spending Decisions</h2>
          <ul className="text-gray-400 list-disc ml-4 space-y-2">
            <li>
              Encourages prioritization of essential needs over wants, promoting responsible and mindful spending habits.
            </li>
            <li>
              Reduces impulsive expenditures and unnecessary purchases, allowing resources to be allocated efficiently toward goals.
            </li>
          </ul>
        </div>
        <div className="border-2 border-purple-300 rounded-2xl p-7 shadow-xl space-y-3">
          <h2 className="text-lg font-bold">Wealth Growth & Investments</h2>
          <ul className="text-gray-400 list-disc ml-4 space-y-2">
            <li>
              Maximizes savings efficiency by creating structured plans that balance spending, saving, and investment opportunities.
            </li>
            <li>
             Supports strategic investment decisions to grow wealth over time while managing risks effectively.
            </li>
          </ul>
        </div>
        <div className="border-2 border-purple-300 rounded-2xl p-7 shadow-xl space-y-3">
          <h2 className="text-lg font-bold">Stress Reduction & Confidence</h2>
          <ul className="text-gray-400 list-disc ml-4 space-y-2">
            <li>
              Provides peace of mind by having a clear understanding of income, expenses, and financial commitments.
            </li>
            <li>
             Increases financial control and confidence, enabling better decision-making and reduced anxiety about money matters.
            </li>
          </ul>
        </div>
        <div className="border-2 border-purple-300 rounded-2xl p-7 shadow-xl space-y-3">
          <h2 className="text-lg font-bold">Customized Planning</h2>
          <ul className="text-gray-400 list-disc ml-4 space-y-2">
            <li>
              Adapts to individual circumstances, lifestyle, and income, ensuring that financial strategies are realistic and achievable.
            </li>
            <li>
             Aligns financial choices with personal values and long-term goals, creating a tailored approach to money management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialMatter;
