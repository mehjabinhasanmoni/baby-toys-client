import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Sign In User
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div className="hero min-h-screen bg-base-200  mt-5 bg-[url('https://i.ibb.co/f1bJCs9/g7.jpg')] bg-fixed bg-cover bg-no-repeat bg-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full border-4 border-white shadow-2xl shadow-white bg-gray-200">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <h1 className="text-3xl font-bold">Login now!</h1>
                <br />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="btn btn-outline btn-secondary"> <FaGoogle></FaGoogle> &nbsp;&nbsp;SignIn with Google</p>

            <p className="mt-5">
              New an Account?{" "}
              <Link to="/register" className="font-bold text-green-600">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
