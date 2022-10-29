import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Arrow } from "../../assets/sidebar/arrow.svg";
import { ISidebarItem } from "./config";

interface SidebarItemProps {
  item: ISidebarItem;
  depth: number;
}

const SidebarItem: FC<SidebarItemProps> = ({ item, depth }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const hasChildren = Boolean(item.items?.length);

  return (
    <>
      <div
        onClick={() => {
          if (hasChildren) {
            setOpen(!open);
          }
          if (item.href) {
            navigate(item.href);
          }
        }}
        className="sidebar-body__item"
        style={{
          borderRight:
            location.pathname === item.href ? "2px solid #4f27bf" : "",
          paddingLeft: depth > 0 ? 80 : 32,
        }}
      >
        {item.icon}
        <div>{item.name}</div>
        <div style={{ flex: 1 }} />
        {item.items && <Arrow className={open ? "arrowOpen" : ""} />}
      </div>

      {hasChildren &&
        open &&
        item.items?.map((i) => (
          <SidebarItem depth={depth + 1} item={i} key={i.id} />
        ))}
    </>
  );
};
export default SidebarItem;
