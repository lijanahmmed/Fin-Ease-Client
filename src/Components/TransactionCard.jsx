import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const TransactionCard = ({ transaction, handleDeleteSuccess }) => {
  const {_id, type, category, amount, date} = transaction;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/transaction/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your transaction has been deleted.",
              icon: "success",
            });

            handleDeleteSuccess(id)
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

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
          <span className="font-bold">Amount :</span> {amount} ৳
        </p>
        <p className="text-sm text-gray-400 mr-2">{date}</p>
      </div>
      <div className="flex justify-between gap-3 w-full mt-5">
        <Link
          to={`/update-transaction/${_id}`}
          className="btn flex-1 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-blue-300 text-white"
        >
          Update
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn flex-1 w-full rounded-2xl bg-gray-200 text-black"
        >
          Delete
        </button>
      </div>
      <div>
        <Link
          to={`/transactions-details/${_id}`}
          className="btn w-full rounded-xl bg-gradient-to-r from-purple-800 to-purple-500 text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TransactionCard;
