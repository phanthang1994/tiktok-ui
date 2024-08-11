import Button from "~/componenents/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind({
    menuItem: styles.menuItem,
});
function MenuItem({data, onClick}) {
    // console.log(data);
    return <Button 
    className={cx("menu-item")} 
    leftIcon={data.icon}
     to={data.to} 
     onClick={onClick}
     >
        {data.title}
    </Button>;
}

export default MenuItem;