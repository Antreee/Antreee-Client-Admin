import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../config/queries";
import { useMutation } from "@apollo/client";

// import axios from "axios";
// import Swal from "sweetalert2";

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
    console.log(data.login.access_token, "<<<<<<<data");
    localStorage.setItem("access_token", data.login.access_token);
    navigate("/");
  }

  if (loading) {
    <p>loading Ngab...</p>;
  }

  if (error) {
    <p>error Ngab...</p>;
  }

  return (
    <div className="h-screen flex bg-ugray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-indigo-200 shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account
        </h1>

        <form onSubmit={doLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
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
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              name="password"
              value={login.password}
              onChange={loginHandler}
              placeholder="Input your password here"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className="bg-green-500 py-2 px-4 text-sm text-white rounded border border-green-200 focus:outline-none focus:border-green-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
