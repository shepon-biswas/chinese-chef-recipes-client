import React from "react";
import { Link } from "react-router-dom";
import Header from "../shared/Header/Header";

const Register = () => {
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
            <h4 className="text-2xl font-bold mb-2 ">Please Register</h4>
            <hr />
            </div>
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Paste Your Photo URL..."
                  className="input input-bordered"
                  name="photoUrl"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Register</button>
              </div>
              <div>
                <p>Already have an account? <Link
                 to={'/login'}
                 className="underline text-amber-400"
                 >Login</Link></p>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default Register;
