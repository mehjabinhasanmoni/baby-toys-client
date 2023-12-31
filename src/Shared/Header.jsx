import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const current = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto px-8">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              
                <li>
                <Link to="/">
                   Home 
                  </Link>
                </li>
              
              
                <li>
                <Link to="/alltoys">
                  All Toys
                  </Link>
                </li>
             
              
                <li>
                <Link to="/mytoys">
                  My Toys
                  </Link>
                </li>
              

              
                <li>
                <Link to="/addtoy">
                  Add a Toy
                  </Link>
                </li>
             
              
                <li>
                <Link to="/blog">
                  Blog
                  </Link>
                </li>
             

              <li tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/tMmcFSP/nahid.jpg" />
                </div>
              </li>
              {user?.email ? (
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              ) : (
                
                  <li>
                    <Link to="/login">
                    <button className="btn btn-active btn-accent mr-2">
                      Login
                    </button>
                    </Link>
                  </li>
               
              )}
             
                <li>
                <Link to="/register">
                  <button className="w-full btn btn-active btn-accent">
                    Register
                  </button>
                  </Link>
                </li>
             
            </ul>
          </div>
          <div className="w-36">
            <img
              className="w-full"
              src="https://i.ibb.co/j4qTmpz/logo.webp"
              alt="logo"
            />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
              <li>
              <Link to="/">
                      Home
                  </Link>
              </li>
            
            
              <li>
              <Link to="/alltoys">
                All Toys
                </Link>
              </li>
           

            
              <li>
              <Link to="/mytoys">
                My Toys
                </Link>

              </li>
           

            
              <li>
              <Link to="/addtoy">
              Add a Toy
                </Link>
              </li>
            
            
              <li>
              <Link to="/blog">
               Blog
                </Link>
              </li>
           

            <li tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/tMmcFSP/nahid.jpg" />
              </div>
            </li>
            {user?.email ? (
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            ) : (
              
                <li>
                  <Link to="/login">
                  <button className="btn btn-active btn-accent mr-2">
                    Login
                  </button>
                  </Link>
                </li>
              
            )}

            
              <li>
              <Link to="/register">
                <button className="btn btn-active btn-accent">Register</button>
                </Link>
              </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
