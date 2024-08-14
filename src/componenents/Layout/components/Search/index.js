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
import { useDebounce } from "~/hook";

const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef()
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
   
    useEffect(() => {
        if(!debounced.trim())
            {
                setSearchResult([]);
                return;
            }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        .then(res => res.json())
        .then(data => {setLoading(false);setSearchResult(data.data)})
        
    },[debounced]);
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
                       { searchResult.map((result) => (
                            <AccountItem
                                key={result.id}
                                data={result}
                            />
                        ))}
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
                {!!searchValue && !loading && (
                    <button className={cx("clear")} onClick={handleClear}>
                        {<FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                )}

                { loading &&  <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> }

                <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button> 
            </div>
        </HeadlessTippy>
    );
}

export default Search;
