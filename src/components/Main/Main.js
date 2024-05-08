import './Main.css';
import Jumbotron from "../Jumbotron/Jumbotron";
import FoodCardList from "../FoodCardList/FoodCardList";
import TestimonialCardList from "../TestimonialCardList/TestimonialCardList";
import {aboutObj, foodItems, jumbotronObj, testimonialItems} from "../../model/constant";
import About from "../About/About";

export default function Main() {
    return (
        <main>
            <Jumbotron {...jumbotronObj}/>
            <section>
                <section className='section-special'>
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </section>
                <FoodCardList items={foodItems}/>
            </section>
            <section className='section-testimonial'>
                <h2 className='text-center'>Testimonials</h2>
                <TestimonialCardList items={testimonialItems}/>
            </section>
            <About {...aboutObj}/>
        </main>
    )
}