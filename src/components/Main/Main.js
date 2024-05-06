import './Main.css';
import restaurantFood from '../../assets/img/restauranfood.jpg';
import greekSalad from '../../assets/img/greek salad.jpg';
import lemonAvatar from '../../assets/img/lemon-avatar.png';
import marioAndAdrianA from '../../assets/img/Mario and Adrian A.jpg';
import marioAndAdrianB from '../../assets/img/Mario and Adrian b.jpg';
export default function Main(){
    return (
        <main>
            <section className='section-header'>
                <article className='align-self-center'>
                    <h1 className='y-text-color'>Little Lemon</h1>
                    <h3 className='y-text-color'>Chicago</h3>
                    <p className='w-text-color'>
                        We are a family owned<br/>
                        Mediterranean restaurant,<br/>
                        focused on traditional<br/>
                        recipes served with a modern
                        twist.<br/>
                    </p>
                    <button>Reserve a table</button>
                </article>
                <div className='restaurant-img-container'>
                    <img src={restaurantFood} alt='restaurant food' className='restaurant-img'/>
                </div>
            </section>
            <section>
                <section className='section-special'>
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </section>
                <section className='section-foods'>
                    <article className='food-card'>
                        <img alt='food' className='card-img' src={greekSalad}/>
                        <div className='card-title'>
                            <h4>Greek Salad</h4>
                            <h4>$12.99</h4>
                        </div>
                        <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco</p>
                        <div className='card-action'>
                            <span>Order for a delivery</span>
                            <img alt='scooter'/>
                        </div>
                    </article>
                    <article className='food-card'>
                        <img alt='food' className='card-img' src={greekSalad}/>
                        <div className='card-title'>
                            <h4>Greek Salad</h4>
                            <h4>$12.99</h4>
                        </div>
                        <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco</p>
                        <div className='card-action'>
                            <span>Order for a delivery</span>
                            <img alt='scooter'/>
                        </div>
                    </article>
                    <article className='food-card'>
                        <img alt='food' className='card-img' src={greekSalad}/>
                        <div className='card-title'>
                            <h4>Greek Salad</h4>
                            <h4>$12.99</h4>
                        </div>
                        <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco</p>
                        <div className='card-action'>
                            <span>Order for a delivery</span>
                            <img alt='scooter'/>
                        </div>
                    </article>
                </section>
            </section>
            <section className='section-testimonial'>
                <h2 className='text-center'>Testimonials</h2>
                <section className='section-testimonial-cards'>
                    <article className='rating-card'>
                        <h5 className='p-xy-20'>Rating</h5>
                        <div className='d-flex p-xy-20'>
                            <img src={lemonAvatar} className='avatar-img' alt='profile avatar'/>
                            <h5 className='avatar-name'>Name</h5>
                        </div>
                        <p className='p-xy-20'>Leave rating</p>
                    </article>
                    <article className='rating-card'>
                        <h5 className='p-xy-20'>Rating</h5>
                        <div className='d-flex p-xy-20'>
                            <img src={lemonAvatar} className='avatar-img' alt='profile avatar'/>
                            <h5 className='avatar-name'>Name</h5>
                        </div>
                        <p className='p-xy-20'>Leave rating</p>
                    </article>
                    <article className='rating-card'>
                        <h5 className='p-xy-20'>Rating</h5>
                        <div className='d-flex p-xy-20'>
                            <img src={lemonAvatar} className='avatar-img' alt='profile avatar'/>
                            <h5 className='avatar-name'>Name</h5>
                        </div>
                        <p className='p-xy-20'>Leave rating</p>
                    </article>
                    <article className='rating-card'>
                        <h5 className='p-xy-20'>Rating</h5>
                        <div className='d-flex p-xy-20'>
                            <img src={lemonAvatar} className='avatar-img' alt='profile avatar'/>
                            <h5 className='avatar-name'>Name</h5>
                        </div>
                        <p className='p-xy-20'>Leave rating</p>
                    </article>
                </section>
            </section>
            <section className='section-about'>
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                        sed do eiusmod tempor incididunt ut <br/>
                        labore et dolore magna aliqua.<br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor incididunt ut<br/>
                        labore et dolore magna aliqua.</p>
                </article>
                <picture className='about-img-container'>
                    <img className='about-img' src={marioAndAdrianA} alt='restaurant 1'/>
                </picture>
                <picture className='about-img-container'>
                    <img className='about-img' src={marioAndAdrianB} alt='restaurant 2'/>
                </picture>
            </section>
        </main>
    )
}