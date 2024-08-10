import classNames from "classnames/bind";
import Header from "../components/Header";
import Siderbar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
function DefaultLayout({children}) {
    const cx = classNames.bind(styles);
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
            <Siderbar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;