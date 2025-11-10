import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const { user } = use(AuthContext);
  const [showCategory, setShowCategory] = useState(null);

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
    const email = user.email;
    const name = user.displayName;

    const transactionData = {
      type,
      category,
      amount,
      description,
      date,
      email,
      name,
    };

    fetch("http://localhost:3000/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Transaction added Successfully!");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-11/12 max-w-md mx-auto shadow-2xl rounded-2xl mt-20">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium">Type</label>
            <select
              defaultValue={""}
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
                  defaultValue={""}
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
                  defaultValue={""}
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
              type="date"
              name="date"
              required
              className="input w-full rounded-full focus:border-0"
              placeholder="Date"
            />
          </div>

          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input w-full rounded-full focus:border-0"
              placeholder={user.email}
              readOnly
            />
          </div>
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0"
              placeholder={user.displayName}
              readOnly
            />
          </div>

          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-purple-800 to-purple-500"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
