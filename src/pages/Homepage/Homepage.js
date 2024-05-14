import './index.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import {aboutObj, foodItems, jumbotronObj, testimonialItems} from "../../model/constant";
import FoodCardList from "../../components/FoodCardList/FoodCardList";
import TestimonialCardList from "../../components/TestimonialCardList/TestimonialCardList";
import About from "../../components/About/About";
const Homepage = () => {
    return (
        <main>
            <Jumbotron {...jumbotronObj}/>
            <section>
                <section className='Homepage-special'>
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </section>
                <FoodCardList items={foodItems}/>
            </section>
            <section className='Homepage-testimonial'>
                <h2 className='text-center'>Testimonials</h2>
                <TestimonialCardList items={testimonialItems}/>
            </section>
            <About {...aboutObj}/>
        </main>
    )
}

export default Homepage;

