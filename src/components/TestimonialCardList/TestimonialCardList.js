import './index.css';
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const TestimonialCardList = ({items}) => {
    return (
        <section className='TestimonialCardList'>
            {items.map(i =>
                <TestimonialCard {...i}/>
            )}
        </section>
    )
}

export default TestimonialCardList;