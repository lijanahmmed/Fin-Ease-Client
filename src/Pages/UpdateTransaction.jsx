import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";

const UpdateTransaction = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCategory, setShowCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/transaction/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTransaction(data.result);
        setLoading(false);

        if (data.result.type === "Income") {
          setShowCategory(true);
        } else if (data.result.type === "Expense") {
          setShowCategory(false);
        } else {
          setShowCategory(null);
        }
      });
  }, [user, id]);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleTypeChange = (e) => {
    const type = e.target.value;

    if (type === "Income") {
      setShowCategory(true);
    } else if (type === "Expense") {
      setShowCategory(false);
    } else {
      setShowCategory(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const type = e.target.type.value;
    const category = e.target.category.value;
    const amount = e.target.amount.value;
    const description = e.target.description.value;
    const date = e.target.date.value;

    const transactionData = {
      type,
      category,
      amount,
      description,
      date,
    };

    fetch(`http://localhost:3000/transaction/${transaction._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Update your transaction Successfully!");
        navigate(`/transactions-details/${transaction._id}`)
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };

  return (
    <div className="card w-11/12 max-w-md mx-auto border border-purple-300 shadow-md shadow-purple-200 rounded-2xl mt-20">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Transaction
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium">Type</label>
            <select
              defaultValue={transaction.type}
              onChange={handleTypeChange}
              name="type"
              required
              className="select w-full rounded-full focus:border-0 "
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          {showCategory !== null && (
            <div>
              <label className="label font-medium">Category</label>
              {showCategory ? (
                <select
                  defaultValue={transaction.category}
                  name="category"
                  required
                  className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Salary">Salary</option>
                  <option value="Pocket money">Pocket money</option>
                  <option value="Business">Business</option>
                  <option value="Others">Others</option>
                </select>
              ) : (
                <select
                  defaultValue={transaction.category}
                  name="category"
                  required
                  className="select w-full rounded-full focus:border-0"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Home">Home</option>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Personal">Personal</option>
                  <option value="Education">Education</option>
                  <option value="Technology">Technology</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Family">Family</option>
                  <option value="Other">Other</option>
                </select>
              )}
            </div>
          )}

          <div>
            <label className="label font-medium">Amount</label>
            <input
              defaultValue={transaction.amount}
              type="number"
              name="amount"
              required
              className="input w-full rounded-full focus:border-0"
              placeholder="Amount"
            />
          </div>

          <div>
            <label className="label font-medium">Description</label>
            <textarea
              defaultValue={transaction.description}
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div>
            <label className="label font-medium">Date</label>
            <input
              defaultValue={transaction.date}
              type="date"
              name="date"
              required
              className="input w-full rounded-full focus:border-0"
              placeholder="Date"
            />
          </div>

          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-purple-800 to-purple-500"
          >
            Update Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTransaction;
