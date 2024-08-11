import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";

import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import { Wrapper as PopperWreapper } from "~/componenents/Popper";
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEllipsisVertical,
  faKeyboard,
  faEarthAsia,
  faMagnifyingGlass,
  faSpinner,
  faCloudUpload,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/componenents/Accountitem";
import Button from "~/componenents/Button";
import Menu from "~/componenents/Popper/Menu";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult(() => {
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ];
      });
    }, 0);
  });
  // Handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };
  const currentUser = true;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <HeadlessTippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWreapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PopperWreapper>
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
        </HeadlessTippy>

        <div className={cx("actions")}>
          {currentUser ? (
            <>
             <Tippy delay={[0, 200]} content="Upload video">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
             </Tippy>
              {/* <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faMessage} />
              </button>  */}
            </>
          ) : (
            <>
              <Button text="Upload" />

              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img className={cx("user-avatar")} alt="Nguyen Van" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e75a19561fc093ba78a6d43ec0de1128.webp?lk3s=a5d48078&nonce=16270&refresh_token=06621c9fa560b5c4087e7ebc51195269&x-expires=1723561200&x-signature=MnCvENesUepn7%2FuTinfRYK4n1lY%3D&shp=a5d48078&shcp=fdd36af4"/>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
