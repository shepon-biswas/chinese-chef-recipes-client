import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.displayName)

  const handleLogOut = () =>{
     logOut()
     .then()
     .catch(error => console.error(error))
  }


  return (
    <>
      <div className="bg-amber-400">
        <div className=" w-11/12 md:w-10/12 mx-auto flex-col flex md:flex-row justify-between items-center py-4 ">
          <div className="">
            <Link to={"/"} className="normal-case text-xl font-bold text-white ">
              Chinese Chef Recipe
            </Link>
          </div>
          <div className="">
            <ul className="flex space-x-6 items-center text-white font-semibold">
              <li>
                <NavLink to={'/'} className={({isActive}) => (isActive? 'text-cyan-600 underline  underline-offset-1': '')}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'} className={({isActive}) => (isActive? 'text-cyan-600  underline  underline-offset-1': '')}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={'/blogs' } className={({isActive}) => (isActive? 'text-cyan-600  underline   underline-offset-1': '')}>Blogs</NavLink>
              </li>

              {user && 
              <>
                <div className="w-10 h-10 rounded-full cursor-pointer">
                  <img className="w-full rounded-full" src={user?.photoURL} alt="userImg"  title={user?.displayName}/>
                </div>
              </>
              }
              {user ? (
                <>
                  <li>
                  <NavLink onClick={handleLogOut} className={'font-bold bg-white text-amber-400 px-3 py-2 rounded '}> Logout</NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to={'/login'} className={'font-bold bg-white text-amber-400 px-3 py-2 rounded '} > Login</NavLink>
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
