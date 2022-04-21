import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../config/queries";
import { useMutation } from "@apollo/client";
import logo from "../justLogo.png";
import Spinners from "../components/Spinner";

import Swal from "sweetalert2";

function LoginPage() {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function loginHandler(e) {
    const { value, name } = e.target;
    let newLogin = {
      ...login,
    };
    newLogin[name] = value;
    setLogin(newLogin);
  }

  function doLogin(event) {
    event.preventDefault();

    loginMutation({
      variables: {
        email: login.email,
        password: login.password,
      },
    });
  }
  if (data) {
    Swal.fire("LOGIN", "Success login", "success");
    localStorage.setItem("access_token", data.login.access_token);
    navigate("/profile");
  }

  if (loading) {
    return <Spinners />;
  }

  if (error) {
    console.log(error.graphQLErrors[0].message);
  }

  return (
    <div className="h-screen flex color-red opacity-80	">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-red-200 shadow-default py-10 px-16">
        <div className="flex justify-center">
          <img src={logo} width="120" alt="" />
        </div>
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account
        </h1>

        <form onSubmit={doLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md outline-none text-sm transition duration-150 text-gray-800 mb-4 focus:ring-red-500 focus:border-red-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              name="email"
              value={login.email}
              onChange={loginHandler}
              placeholder="input your email here"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md outline-none text-sm transition text-gray-800 duration-150 ease-in-out mb-4 focus:ring-red-500 focus:border-red-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              name="password"
              value={login.password}
              onChange={loginHandler}
              placeholder="Input your password here"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button className="color-red py-2 px-4 text-sm text-white rounded  focus:outline-none hover:bg-red-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
