import React, { use, useEffect, useState } from "react";
import Loading from "../Components/Loading";
import TransactionCard from "../Components/TransactionCard";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const MyTransactions = () => {
  const { user } = use(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/transaction?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleDeleteSuccess = (id) => {
    setTransactions((prev) => prev.filter((data) => data._id !== id));
  };

  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">My Transactions</h3>
        <p className="">
          Easily track, manage, and review all your income and expenses, giving
          you clear insights into your financial activity.
        </p>
      </div>
      {transactions > 0 ? (
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transactions.map((transaction) => (
            <TransactionCard
              key={transaction._id}
              transaction={transaction}
              handleDeleteSuccess={handleDeleteSuccess}
            ></TransactionCard>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="mt-20 border border-purple-300 shadow-2xl shadow-purple-200 px-30 py-15 w-fit ">
          <p className="text-2xl font-bold mb-5">No Transaction Yet</p>
          <Link to="/add-transaction" className="btn flex justify-center bg-gradient-to-r from-purple-800 to-purple-500 text-white">Add Your Transaction</Link>
        </div>
        </div>
      )}
    </div>
  );
};

export default MyTransactions;
