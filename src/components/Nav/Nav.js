import './index.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className='Nav'>
                <li className='menu-item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='menu-item'>
                    <Link to='about'>About</Link>
                </li>
                <li className='menu-item'>
                    <Link to='menu'>Menu</Link>
                </li>
                <li className='menu-item'>
                    <Link to='booking'>Booking</Link>
                </li>
                <li className='menu-item'>
                    <Link to='order-online'>Order Online</Link>
                </li>
                <li className='menu-item'>
                    <Link to='login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;