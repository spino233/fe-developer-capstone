import './index.css';
import FoodCard from "../FoodCard/FoodCard";

const FoodCardList = ({items}) => {
    return (
        <section className='FoodCardList'>
            {items.map((i, index) =>
                <FoodCard {...i} key={index}/>
            )}
        </section>
    );
}

export default FoodCardList;