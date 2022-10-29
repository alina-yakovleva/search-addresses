import "./index.scss";

import { ReactComponent as HeaderIcon } from "../../assets/headerIcon.svg";
import { ReactComponent as NameIcon } from "../../assets/name.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__item">
        <HeaderIcon />
        <div>Wrench CRM</div>
      </div>
      <div className="header__item">
        <NameIcon />
        <div>Имя Фамилия</div>
      </div>
    </div>
  );
};
export default Header;
