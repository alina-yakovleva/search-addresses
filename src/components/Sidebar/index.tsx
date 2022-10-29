import SidebarItem from "./SidebarItem";

import "./index.scss";
import { sidebarItems } from "./config";

const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <div className="sidebar-header">Меню</div>
      <div className="sidebar-body">
        {sidebarItems.map((item) => (
          <SidebarItem depth={0} item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
