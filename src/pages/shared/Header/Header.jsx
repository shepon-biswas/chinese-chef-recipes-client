import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="bg-amber-100">
        <div className="navbar w-10/12 mx-auto ">
          <div className="flex-1">
            <Link to={"/"} className="normal-case text-xl font-bold">
              Chinese Chef Recipe
            </Link>
          </div>
          <div className=" flex flex-wrap">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>{user.displayName}</a>
              </li>
              {user ? (
                <>
                  <li><button className="btn btn-info text-white">
                    <Link>Logout</Link>
                  </button></li>
                </>
              ) : (
                <li>
                  <button className="btn btn-info text-white">
                    <Link to={"/login"}>Login</Link>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
