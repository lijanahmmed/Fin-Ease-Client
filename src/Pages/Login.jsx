import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    setUser,
    logInWithEmailAndPasswordFunc,
    logInWithGoogleFunc,
  } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        const user = result.user;

        // if (!user?.emailVerified) {
        //   toast.warn("Your email is not verified!!");
        //   return;
        // }

        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Login successfully!")
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    e.target.reset();
  };

  const handleGoogleLogIn = () => {
    logInWithGoogleFunc()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Log in to simplify your finances and grow your wealth effortlessly.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 border border-purple-300 shadow-md shadow-purple-200">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <label className="label text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <div className="relative">
                  <label className="label text-sm">Password</label>
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
                <div>
                  <button
                    type="button"
                    className="link link-hover"
                  >
                    Forgot password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-purple-800 to-purple-500 text-white mt-4"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={handleGoogleLogIn}
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
                  Don't have an account?{" "}
                  <Link to="/auth/register" className="text-blue-400 underline">
                    Register here
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

export default Login;
