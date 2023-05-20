import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        // Create User
        createUser(email, password)
          .then(result =>{
            const user = result.user;
            console.log(user);
          })
          .catch(error=>{
            console.log(error);
          })
      };

    return (
        <div className="hero min-h-screen bg-base-200  mt-5 bg-[url('https://i.ibb.co/M2xt6Fd/g1.jpg')] bg-fixed bg-cover bg-no-repeat bg-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full border-4 border-white shadow-2xl shadow-white bg-gray-200">
            <div className="card-body">
              <form onSubmit={handleRegister}>
              <div className="form-control">
                  <h1 className="text-3xl font-bold">Please Register!</h1>
                  <br />
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
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
                    value="Register"
                  />
                </div>
              </form>
              <p className="mt-5">
                Already have an Account? Please
                <Link to="/login" className="font-bold text-green-600">
                   register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;