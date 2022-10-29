import { ReactComponent as Icon1 } from "../../assets/sidebar/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/sidebar/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/sidebar/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/sidebar/icon4.svg";
import { ReactComponent as Icon5 } from "../../assets/sidebar/icon5.svg";
import { ReactComponent as Icon6 } from "../../assets/sidebar/icon6.svg";
import { ReactComponent as Icon7 } from "../../assets/sidebar/icon7.svg";
import { ReactComponent as Icon8 } from "../../assets/sidebar/icon8.svg";
import { ReactComponent as Icon9 } from "../../assets/sidebar/icon9.svg";
import { ReactComponent as Icon10 } from "../../assets/sidebar/icon10.svg";

export const sidebarItems: ISidebarItem[] = [
  { id: 1, name: "Главная", icon: <Icon1 />, href: "/" },
  { id: 2, name: "Поиск адресов", icon: <Icon2 />, href: "/address" },
  { id: 3, name: "Таблицы", icon: <Icon3 /> },
  { id: 4, name: "Календарь", icon: <Icon4 /> },
  {
    id: 5,
    name: "Карты",
    icon: <Icon5 />,
  },
  { id: 6, name: "Виджеты", icon: <Icon6 /> },
  {
    id: 7,
    name: "Настройки",
    icon: <Icon7 />,
    items: [
      { id: 11, name: "Настройки профиля", icon: <Icon8 /> },
      { id: 12, name: "Управление финансами", icon: <Icon9 /> },
    ],
  },
  { id: 9, name: "Выход", icon: <Icon10 /> },
];

export interface ISidebarItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  href?: string;
  items?: ISidebarItem[];
}
