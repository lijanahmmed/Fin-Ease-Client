import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import TransactionCard from "../Components/TransactionCard";

const MyTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/transaction")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">My Transactions</h3>
        <p className="">
          Easily track, manage, and review all your income and expenses, giving
          you clear insights into your financial activity.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction._id}
            transaction={transaction}
          ></TransactionCard>
        ))}
      </div>
    </div>
  );
};

export default MyTransactions;
