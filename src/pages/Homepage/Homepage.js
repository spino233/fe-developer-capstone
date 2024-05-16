import './index.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import {aboutObj, foodItems, jumbotronObj, testimonialItems} from "../../model/constant";
import FoodCardList from "../../components/FoodCardList/FoodCardList";
import TestimonialCardList from "../../components/TestimonialCardList/TestimonialCardList";
import About from "../../components/About/About";
import {useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <>
            <main>
                <Jumbotron {...jumbotronObj}/>
                <section>
                    <section className='Homepage-special'>
                        <h2>Specials</h2>
                        <button onClick={() => navigate('/menu')} aria-label="On Click goes to online menu">Online
                            Menu
                        </button>
                    </section>
                    <FoodCardList items={foodItems}/>
                </section>
                <section className='Homepage-testimonial'>
                    <h2 className='text-center'>Testimonials</h2>
                    <TestimonialCardList items={testimonialItems}/>
                </section>
                <About {...aboutObj}/>
            </main>
            <Footer/>
        </>
    )
}

export default Homepage;

