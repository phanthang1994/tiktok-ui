
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useMemo } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);


function Header({ title, onBack  }) {
    
  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <i className={cx("icon")}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </i>
      </button>
      <h4 className={cx("header-title")}>{title}</h4>

    </header>
  );
}

export default Header;