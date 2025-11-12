import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS_INCOME = ["#10b981", "#34d399", "#6ee7b7", "#059669", "#047857"];
const COLORS_EXPENSE = ["#ef4444", "#f87171", "#fb7185", "#b91c1c", "#7f1d1d"];

const Reports = () => {
  const { user } = use(AuthContext);
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/transaction/?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTransaction(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  const incomeTransaction = transaction.filter((t) => t.type === "Income");
  const expenseTransaction = transaction.filter((t) => t.type === "Expense");

  const incomeTotals = incomeTransaction.reduce((acc, t) => {
    const amount = Number(t.amount);
    acc[t.category] = (acc[t.category] || 0) + amount;
    return acc;
  }, {});

  const expenseTotals = expenseTransaction.reduce((acc, t) => {
    const amount = Number(t.amount);
    acc[t.category] = (acc[t.category] || 0) + amount;
    return acc;
  }, {});

  const incomeData = Object.keys(incomeTotals).map((c) => ({
    name: c,
    value: incomeTotals[c],
  }));
  const expenseData = Object.keys(expenseTotals).map((c) => ({
    name: c,
    value: expenseTotals[c],
  }));

  const monthlyTotals = transaction.reduce((acc, t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });
    const amount = Number(t.amount);
    acc[month] = (acc[month] || 0) + amount;
    return acc;
  }, {});

  const barData = Object.keys(monthlyTotals).map((month) => ({
    month,
    total: monthlyTotals[month],
  }));

  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-2xl font-extrabold border-b-2 border-purple-600 pb-1 w-32">
        Reports
      </h1>

      <div className="grid lg:grid-cols-2 gap-10 mt-10">
        <div className="bg-purple-100 rounded-2xl shadow-md shadow-purple-200 p-5">
          <h2 className="text-lg font-semibold mb-3 text-center text-green-600">
            Income by category
          </h2>
          <PieChart width={300} height={300}>
            <Pie
              data={incomeData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {incomeData.map((entry, index) => (
                <Cell
                  key={`cell-income-${index}`}
                  fill={COLORS_INCOME[index % COLORS_INCOME.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="bg-purple-100 rounded-2xl shadow-md shadow-purple-200 p-5">
          <h2 className="text-lg font-semibold mb-3 text-center text-red-600">
            Expenses by category
          </h2>
          <PieChart width={300} height={300}>
            <Pie
              data={expenseData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {expenseData.map((entry, index) => (
                <Cell
                  key={`cell-expense-${index}`}
                  fill={COLORS_EXPENSE[index % COLORS_EXPENSE.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      <div className="bg-purple-100 rounded-2xl shadow-md shadow-purple-200 p-5 mt-10">
        <h2 className="text-lg font-semibold mb-3 text-center text-purple-600">
          Monthly Total Amount
        </h2>

        <BarChart width="100%" height={350} data={barData} className="mx-auto">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8b5cf6" name="Total Amount" />
        </BarChart>
      </div>
    </div>
  );
};

export default Reports;
