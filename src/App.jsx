import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useGlobalState } from "./store/store";

function App() {
  const sidebarPage = useGlobalState();

  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <div className="md:block hidden"><Sidebar /></div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
