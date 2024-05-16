import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from "react-router-dom";
export default function Footer(){
    return (
        <footer>
            <section className='d-flex'>
                <picture className='logo-img-container'>
                    <img alt='logo'
                         className='logo-img'
                         src='https://little-lemon-react-capstone.vercel.app/static/media/footer-logo.2c859235d6c57bb54176.png'/>
                </picture>
            </section>
            <section>
                <nav>
                    <h4>Doormat Navigation</h4>
                    <ul className='doormat-nav-list'>
                        <li>
                            <Link to='/' className='text-white'>Home</Link>
                        </li>
                        <li>
                            <Link to='about' className='text-white'>About</Link>
                        </li>
                        <li>
                            <Link to='menu' className='text-white'>Menu</Link>
                        </li>
                        <li>
                            <Link to='reservations' className='text-white'>Reservations</Link>
                        </li>
                        <li>
                            <Link to='order-online' className='text-white'>Order Online</Link>
                        </li>
                        <li>
                            <Link to='login' className='text-white'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className='contact-section'>
                <div>
                    <h4>Contact</h4>
                    <ul className='d-flex-column contact-list'>
                        <li>Via Tor De Schiavi 169</li>
                        <li>Roma (RM)</li>
                        <li>+1 345794302</li>
                        <li>little@lemon.com</li>
                    </ul>
                </div>
            </section>
            <section className='d-flex-column text-center-md'>
                <h4>Social Media Links</h4>
                <div className='d-flex jc-between'>
                    <FacebookIcon onClick={() => window.location.href="https://facebook.com"}/>
                    <InstagramIcon onClick={() => window.location.href="https://instagram.com"}/>
                    <TwitterIcon onClick={() => window.location.href="https://twitter.com"}/>
                </div>
            </section>
        </footer>
    )
}