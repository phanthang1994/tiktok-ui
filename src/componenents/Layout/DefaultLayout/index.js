import Header from "../components/Header";
import Siderbar from "./Sidebar";
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div id="container">
            <Siderbar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;