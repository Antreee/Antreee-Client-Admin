// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

function Register() {
  //   const [user, setUser] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //     phoneNumber: "",
  //     address: "",
  //   });
  //   const navigate = useNavigate();
  //   // const BASE_URL = "http://localhost:3000";
  //   const PROD_URL = "https://news-portal-cmn.herokuapp.com"

  //   function userHandler(e) {
  //     const { value, name } = e.target;
  //     let newUser = {
  //       ...user,
  //     };
  //     newUser[name] = value;
  //     setUser(newUser);
  //   }

  //   async function registerUser(event) {
  //     event.preventDefault();
  //     try {
  //       const response = await fetch(PROD_URL + "/register", {
  //         method: "POST",
  //         mode: "cors",
  //         cache: "no-cache",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(user),
  //       });

  //       const userDataRegister = await response.json();
  //       if (!response.ok) throw userDataRegister;
  //       Swal.fire("REGISTER", userDataRegister.message, "success");
  //       setUser({
  //         username: "",
  //         email: "",
  //         password: "",
  //         phoneNumber: "",
  //         address: "",
  //       });
  //       navigate("/");
  //     } catch (error) {
  //       Swal.fire("FAILED", error.message, "error");
  //     }
  //   }

  return (
    <>
      <form
        // onSubmit={registerUser}
        className="max-w-xl m-auto mt-10 px-12 py-5  border"
      >
        <h1 className="text-center text-4xl font-semibold mt-10 mb-10">
          Register Admin
        </h1>
        <label className="text-gray-600 font-medium">Full Name</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="username"
          type="text"
          placeholder="Input your username"
          //   value={user.username}
          //   onChange={userHandler}
        />

        <label className="text-gray-600 font-medium block mt-4">Email</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="email"
          type="email"
          placeholder="Input your email"
          //   value={user.email}
          //   onChange={userHandler}
        />

        <label className="text-gray-600 font-medium block mt-4">Password</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded"
          name="password"
          type="password"
          placeholder="Input your password"
          //   value={user.password}
          //   onChange={userHandler}
        />

        <label className="text-gray-600 font-medium block mt-4">
          Phone Number
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded"
          name="phoneNumber"
          type="text"
          placeholder="Input your phone number"
          //   value={user.phoneNumber}
          //   onChange={userHandler}
        />

        <label className="text-gray-600 font-medium block mt-4">
          Profile Picture Url
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded"
          name="profilePicture"
          type="text"
          placeholder="Input Profil Picture url"
          //   value={user.phoneNumber}
          //   onChange={userHandler}
        />

        <button
          className="mt-4 w-full bg-green hover:bg-green-darker text-white border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Register;
