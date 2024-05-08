import logo from '../../assets/svg/Logo.svg';
import './Header.css';
import Nav from "../Nav/Nav";
export default function Header(){
    return (
        <header className='Header'>
            <img src={logo} alt="little lemon logo" className='logo'/>
            <Nav/>
        </header>
    )
}