import logo from '../assets/svg/Logo.svg';
export default function Header(){
    return (
        <header>
            <img src={logo} alt="little lemon logo" />
            <nav>
                <ul>
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