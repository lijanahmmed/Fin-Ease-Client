import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    setUser,
  } = use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.warn("Password has at least 6 character long !!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.warn("Password has at least one uppercase letter !!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.warn("Password has at least one lowercase letter !!");
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileFunc({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    e.target.reset();
  };

  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Here!</h1>
          <p className="py-6">
            Create your account today to manage your finances smarter, track
            spending effortlessly, and achieve your financial goals faster.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label text-black text-sm">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  required
                />
                <label className="label text-black text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label text-black text-sm">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                  required
                />
                <div className="relative">
                  <label className="label text-black text-sm">Password</label>
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute mt-4 -ml-7 cursor-pointer z-50"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-purple-800 to-purple-500 text-white mt-4"
                >
                  Register
                </button>
                <button
                  type="button"
                  className="btn bg-white text-black border-[#e5e5e5] my-2"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <p className="text-sm">
                  Already have an account? Please{" "}
                  <Link to="/login" className="text-blue-400 underline">
                    Login now
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
