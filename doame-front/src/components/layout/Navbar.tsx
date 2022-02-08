import { Link } from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai';
import {BiDroplet} from 'react-icons/bi';
// import {BsGear} from 'react-icons/bs'

import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/"><AiOutlineHome/></Link></li>
                <li><Link to="/pedidos"><BiDroplet/></Link></li>
                {/* <li><Link to="/configurar"><BsGear/></Link></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;