import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../hacktiv.svg";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    Swal.fire("LOGOUT", "Success logout", "success");
    navigate("/login");
  }

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-[20vw] bg-orange-dark  p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-y-full"
        }`}
      >
        <img src={logo} className="w-30 opacity-80" alt="logo" />
        <h3 className=" mb-10 text-2xl text-center font-bold text-white">
          CMS News Portal
        </h3>
        <ul className="p-6 space-y-8 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-active" : "text-hover"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                isActive ? "text-active" : "text-hover"
              }
            >
              List Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive ? "text-active" : "text-hover"
              }
            >
              List Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transaction-history"
              className={({ isActive }) =>
                isActive ? "text-active" : "text-hover"
              }
            >
              Transaction Histories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? "text-active" : "text-hover"
              }
            >
              Customers Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-active" : "text-hover"
              }
            >
              Register Admin
            </NavLink>
          </li>
          <li>
            <button onClick={logout} className={"text-hover"}>
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
