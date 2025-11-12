import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";

const TransactionDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryTotals, setCategoryTotals] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/my-transaction/?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        calculateCategory(data);
        const showDetails = data.find((t) => t._id === id);
        setTransaction(showDetails);
        setLoading(false);
      });
  }, [user, id]);

  const calculateCategory = (data) => {
    const categoryTotals = {};

    data.forEach((t) => {
      const category = t.category;
      const amount = Number(t.amount);

      if (categoryTotals[category]) {
        categoryTotals[category] += amount;
      } else {
        categoryTotals[category] = amount;
      }
    });
    setCategoryTotals(categoryTotals);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-2xl font-extrabold border-b-2 border-purple-600 w-28">
        Details
      </h1>
      <div className="mt-10 flex items-center gap-36">
        <div className="max-w-1/2">
          <div className="flex items-center gap-5 mb-7">
            <h3 className="text-xl font-bold">{transaction.type}</h3>
            <p className="border bg-purple-500 text-white px-3 py-1 rounded-2xl">
              {transaction.category}
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Amount :</span> {transaction.amount} ৳
            </p>
            <p>
              <span className="font-bold">Date :</span> {transaction.date}
            </p>
            <p>
              <span className="font-bold">Description :</span>{" "}
              <span className="text-gray-400">{transaction.description}</span>
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            className="w-full"
            src="https://cdn-icons-png.flaticon.com/256/9964/9964360.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-5">
        <span className="font-bold">
          Total Amount of {transaction.category} {transaction.type} :
        </span>
        <span className="text-purple-600">
          {" "}
          {categoryTotals[transaction.category]} ৳
        </span>
      </div>
    </div>
  );
};

export default TransactionDetails;
