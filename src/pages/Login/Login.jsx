import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Header from '../shared/Header/Header';

const Login = () => {

  const {signInUser} = useContext(AuthContext)

  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      // console.log(loggedUser)
      form.reset();
    })
    .catch(error => console.error(error))

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
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
              <div>
                <p>Don't have any account? <Link
                 to={'/register'}
                 className="underline text-amber-400"
                 >Register</Link></p>
              </div>
            </form>
          </div>
        </div>
        </>
    );
};

export default Login;