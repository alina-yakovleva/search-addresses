import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import "./index.scss";

import "../Sidebar/index.scss";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
