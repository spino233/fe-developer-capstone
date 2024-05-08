import './index.css';
import FoodCard from "../FoodCard/FoodCard";

const FoodCardList = ({items}) => {
    return (
        <section className='FoodCardList'>
            {items.map(i =>
                <FoodCard {...i}/>
            )}
        </section>
    );
}

export default FoodCardList;