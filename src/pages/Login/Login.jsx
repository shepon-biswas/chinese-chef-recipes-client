import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../shared/Header/Header";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const { signInUser} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth(app);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        setErrorMessage("");
        const loggedUser = result.user;
        form.reset();
        setSuccess("Successfully Logged In!");
      })
      .catch((error) => setErrorMessage(error.message));
  };

  // Google sign in
  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      setErrorMessage('');
      const user = result.user;
      console.log(user)
      setSuccess("Successfully Logged In!");
    })
    .catch(error =>{
      setErrorMessage(error.message)
    })
  };

  // Github sign in
  const handleGithubSignin = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      setErrorMessage('');
      const user = result.user;
      console.log(user);
      setSuccess("Successfully Logged In!");
    })
    .catch(error =>{
      setErrorMessage(error.message)
    })
  }

  return (
    <>
      <div>
        <Header></Header>
      </div>
      {/* Login Form */}
      <div className=" flex justify-center items-center min-h-screen bg-base-200">
        <div className=" card  max-w-sm shadow-2xl bg-base-100 w-10/12 mx-auto">
          {/* Login Title */}
          <div className="text-center mt-3 px-7">
            <h4 className="text-2xl font-bold mb-2 ">Please Login</h4>
            <hr />
          </div>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Password"
                className="input input-bordered"
                name="password"
              />
            </div>
            {/* Display Success & Error Messages */}
            <p className="text-green-600">{success}</p>
            <p className="text-red-600">{errorMessage}</p>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Login</button>
            </div>
            <div>
              <p>
                Don't have any account?{" "}
                <Link to={"/register"} className="underline text-amber-400">
                  Register
                </Link>
              </p>
            </div>
          </form>
          {/* Signin with google & Github Section */}
          <p className="text-center">--------------- or ----------------</p>
          <div className="px-7 my-5">
            <button
              onClick={handleGoogleSignin}
              className="btn btn-outline btn-warning w-full mb-3"
            >
              <FaGoogle className="me-3"></FaGoogle> continue with Google
            </button>
            <button onClick={handleGithubSignin} className="btn btn-outline btn-warning w-full">
              <FaGithub className="me-3"></FaGithub> continue with Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
