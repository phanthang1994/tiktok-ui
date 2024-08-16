
import ProTypes from "prop-types";

function Menu({children}) {
    return ( <nav>
        {children}
    </nav> );
}
Menu.propTypes = {
children: ProTypes.node.isRequired
}
export default Menu;