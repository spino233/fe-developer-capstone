import './index.css';
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const TestimonialCardList = ({items}) => {
    return (
        <section className='TestimonialCardList'>
            {items.map((i, index)=>
                <TestimonialCard {...i} key={index}/>
            )}
        </section>
    )
}

export default TestimonialCardList;