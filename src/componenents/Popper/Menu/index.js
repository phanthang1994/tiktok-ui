import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWreapper } from "~/componenents/Popper";
import MenuItem from "./MenuItem";
import { useMemo } from "react";

const cx = classNames.bind(styles);


function Menu({ children, items = [] }) {
    
    const renderItems = useMemo(() => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    }, [items]);
    
    return (
        <Tippy
        // visible
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
              <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                <PopperWreapper>
                  {renderItems}
                </PopperWreapper>
              </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;