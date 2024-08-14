import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWreapper } from "~/componenents/Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tippy.js/dist/tippy.css"; // optional
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/componenents/Accountitem";

const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef()
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult(() => {
                return [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                ];
            });
        }, 0);
    },[]);
    const handleHideResult = (tf) => {
        setShowResult(tf);
    }
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        console.log(searchResult)
        inputRef.current.focus();
    };
    return (
        <HeadlessTippy
            onClickOutside={() => handleHideResult(false)}  
            interactive={true}
            visible={searchResult.length > 0 && showResult}
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
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    className={cx("search-input")}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={()=>handleHideResult(true)}
                />
                {!!searchValue && (
                    <button className={cx("clear")} onClick={handleClear}>
                        {<FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}

                <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
