import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUser, updateProfileFunc } = use(AuthContext);

  const [input, setInput] = useState(false);

  const handleInputUpdateProfile = () => {
    setInput(true);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const updateData = {};

    if (name && name !== user.displayName) {
      updateData.displayName = name;
    }
    if (photo && photo !== user.photoURL) {
      updateData.photoURL = photo;
    }
    if (Object.keys(updateData).length === 0) {
      toast.info("No changes your profile!");
      setInput(false);
      return;
    }

    updateProfileFunc({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log(user);
        setUser({ ...user, ...updateData });
        toast.success("Your Profile is updated successfully!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    setInput(false);
  };

  return (
    <div className="mt-15 mx-auto p-10 border border-purple-300 shadow-md shadow-purple-200 w-fit">
      <h2 className="text-center text-xl font-bold mb-8">My Profile</h2>
      <div className="flex items-center gap-10">
        <div>
          <img
            className="w-44 h-44 object-cover rounded-full"
            src={user.photoURL}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-bold">Name</p>
          <p>{user.displayName}</p>
          <p className="text-lg font-bold mt-3">Email</p>
          <p>{user.email}</p>
          {input ? (
            ""
          ) : (
            <button
              onClick={handleInputUpdateProfile}
              className="btn bg-gradient-to-r from-purple-800 to-purple-500 text-white mt-3"
            >
              Update Profile
            </button>
          )}
        </div>
      </div>

      {input ? (
        <div className="card w-full max-w-sm shrink-0 shadow-xl mt-10">
          <div className="card-body">
            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset border border-purple-300 shadow-md shadow-purple-200 p-5">
                <label className="label text-sm">Name</label>
                <input
                  name="name"
                  type="name"
                  className="input"
                  placeholder="Your Name"
                />
                <label className="label text-sm">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                />
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-purple-800 to-purple-500 text-white mt-4"
                >
                  Update
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyProfile;
