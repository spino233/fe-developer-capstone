import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
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
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </section>
            <section className='contact-section'>
                <div>
                    <h4>Contact</h4>
                    <ul className='d-flex-column contact-list'>
                        <li>Address</li>
                        <li>phone number</li>
                        <li>email</li>
                    </ul>
                </div>
            </section>
            <section className='d-flex-column text-center-md'>
                <h4>Social Media Links</h4>
                <div className='d-flex jc-between'>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                </div>
            </section>
        </footer>
    )
}