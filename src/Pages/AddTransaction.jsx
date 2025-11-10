import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const AddTransaction = () => {
  const { user } = use(AuthContext);

  return (
    <div className="card border border-gray-200 bg-base-100 w-11/12 max-w-md mx-auto shadow-2xl rounded-2xl mt-20">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add Transaction</h2>
        <form className="space-y-4">
          <div>
            <label className="label font-medium">Type</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Vehicles">Vehicles</option>
              <option value="Plants">Plants</option>
              <option value="Foods">Foods</option>
              <option value="Home & Living">Home & Living</option>
              <option value="Characters">Characters</option>
              <option value="Space">Space</option>
              <option value="Animals">Animals</option>
              <option value="Other">Other</option>
            </select>
          </div>

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

          {/* Submit Button */}
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
