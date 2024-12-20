import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Body = () => {

  return (
    <div className="flex gap-4">
      <Sidebar/>
      <Outlet />
    </div>
  )
}

export default Body;
