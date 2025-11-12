import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loading from "./Loading";

const Overview = () => {
  const { user } = use(AuthContext);
  const [transactions, setTransactions] = useState({
    totalBalance: 0,
    income: 0,
    expenses: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`http://localhost:3000/transaction?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        calculateOverview(data);
        setLoading(false);
      })
      
  }, [user]);

  const calculateOverview = (data) => {
    const FilteredIncome = data.filter((t) => t.type === "Income");
    const income = FilteredIncome.reduce((sum, t) => sum + Number(t.amount), 0);

    const FilteredExpense = data.filter((t) => t.type === "Expense");
    const expense = FilteredExpense.reduce(
      (sum, t) => sum + Number(t.amount),
      0
    );

    const totalBalance = income + expense;
    setTransactions({ income, expense, totalBalance });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-20 w-11/12 md:10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Overview Your Transaction
      </h1>
      <div className="mt-10 flex flex-col md:flex-row gap-10 w-full">
        <div className="text-white text-center bg-gradient-to-r from-purple-600 to-purple-400 py-20 rounded-2xl flex-1">
          <h2 className="text-2xl font-bold">Total Balance</h2>
          <p className="text-lg font-bold mt-5">
            Total Balance : {transactions.totalBalance}
          </p>
        </div>

        <div className="text-white text-center bg-gradient-to-r from-green-600 to-green-400 py-20 rounded-2xl flex-1">
          <h2 className="text-2xl font-bold">Income</h2>
          <p className="text-lg font-bold mt-5">
            Total income : {transactions.income}
          </p>
        </div>

        <div className="text-white text-center bg-gradient-to-r from-blue-600 to-blue-400 py-20 rounded-2xl flex-1">
          <h2 className="text-2xl font-bold">Expenses</h2>
          <p className="text-lg font-bold mt-5">
            Total expenses : {transactions.expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
