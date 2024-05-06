import logo from '../../assets/svg/Logo.svg';
import './Header.css';
export default function Header(){
    return (
        <header className='Header'>
            <img src={logo} alt="little lemon logo" className='logo'/>
            <nav>
                <ul className='nav-menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}