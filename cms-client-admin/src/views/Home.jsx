import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Sidebar />
      </div>
      <Outlet />
    </>
  );
}
