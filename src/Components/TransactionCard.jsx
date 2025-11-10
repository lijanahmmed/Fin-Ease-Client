import React from "react";

const TransactionCard = ({ transaction }) => {
  const { _id, type, category, amount, date } = transaction;
  return (
    <div className="border border-purple-300 shadow-purple-300 p-3 rounded-lg space-y-2">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">{type}</p>
        <p className="border border-purple-200 px-3 py-1 rounded-2xl">
          {category}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p>
          <span className="font-bold">Amount :</span> {amount}৳
        </p>
        <p className="text-sm text-gray-400 mr-2">{date}</p>
      </div>
      <div className="flex justify-between gap-3 w-full mt-5">
        <button className="btn flex-1 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-blue-300 text-white">Update</button>
        <button className="btn flex-1 w-full rounded-2xl bg-gray-200 text-black">Delete</button>
      </div>
      <div>
        <button className="btn w-full rounded-xl bg-gradient-to-r from-purple-800 to-purple-500 text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
