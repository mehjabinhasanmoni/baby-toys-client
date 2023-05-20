import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
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
                <a>
                  <FaHome></FaHome> Home
                </a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">All Toys</a>
              </li>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a>Add a Toy</a>
              </li>
              <li>
                <a>Blog</a>
              </li>

              <li tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/tMmcFSP/nahid.jpg" />
                </div>
              </li>
              <Link to="/login">
                <li>
                  <button className="w-full btn btn-active btn-accent mr-2 my-2">
                    Login
                  </button>
                </li>
              </Link>
              <Link to="/register">
                <li>
                  <button className="w-full btn btn-active btn-accent">
                    Register
                  </button>
                </li>
              </Link>
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
              <a>
                <FaHome></FaHome>Home
              </a>
            </li>
            <li tabIndex={0}>
              <a>All Toys</a>
            </li>
            <li>
              <a>My Toys</a>
            </li>
            <li>
              <a>Add a Toy</a>
            </li>
            <li>
              <a>Blog</a>
            </li>

            <li tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/tMmcFSP/nahid.jpg" />
              </div>
            </li>
            <Link to="/login">
              <li>
                <button className="btn btn-active btn-accent mr-2">
                  Login
                </button>
              </li>
            </Link>
            <Link to="/register">
              <li>
                <button className="btn btn-active btn-accent">Register</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
