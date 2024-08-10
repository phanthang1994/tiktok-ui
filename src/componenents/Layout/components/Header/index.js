import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PropperWreapper }  from '~/componenents/Propper';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/componenents/Accountitem";
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  setTimeout(() => {
    setSearchResult(() => {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    })
  },0)
 
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
        interactive={true}
        visible={searchResult.length > 0}
          render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PropperWreapper>
                <h4 className={cx("search-title")}>
                    Accounts
                </h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
            </PropperWreapper>
              </div>
          )}
        >
          <div className={cx("search")}>
            <input
              type="text"
              className={cx("search-input")}
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              {<FontAwesomeIcon icon={faCircleXmark} />}
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}

export default Header;
