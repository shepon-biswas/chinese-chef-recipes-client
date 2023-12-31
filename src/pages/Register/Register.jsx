import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../shared/Header/Header";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoUrl.value;

    // Validate Password field
    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMessage("Password: Please add at least one uppercase letter");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setErrorMessage("Password: Please add at least one number");
      return;
    } else if (password.length < 6) {
      setErrorMessage("Password must be 6 characters or more");
      return;
    }

    createUser(email, password)
      .then((res) => {
        setErrorMessage("");
        setSuccess("");
        const newUser = res.user;
        console.log(newUser);
        // Update User Display Name and Photo URL
        updateUser(newUser, name, photo)
          .then(() => {
            console.log("User Updated!");
            setSuccess("User has been created successfully!")
            form.reset();
          })
          .catch((error) => setErrorMessage(error.message));
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <>
      <div>
        <Header></Header>
      </div>
      {/* Register Form */}
      <div className=" flex justify-center items-center min-h-screen bg-base-200">
        <div className=" card  max-w-sm shadow-2xl bg-base-100 w-10/12 mx-auto">
          {/* Register Title */}
          <div className="text-center mt-3 px-7">
            <h4 className="text-2xl font-bold mb-2">Please Register</h4>
            <hr />
          </div>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                name="email"
                required
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Paste Your Photo URL..."
                className="input input-bordered"
                name="photoUrl"
                required
              />
            </div>
            {/* Success & Error Message Display Section */}
            <p className="text-green-600">{success}</p>
            <p className="text-red-600">{errorMessage}</p>
            <div className="form-control ">
              <button className="btn btn-warning">Register</button>
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="underline text-amber-400">
                  Login
                </Link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
