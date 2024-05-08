import './index.css';
const FoodCard = ({srcImage, title, price, content, bottomLabel, bottomIconSrc}) => {
    return (
        <article className='FoodCard'>
            <img alt='food' className='FoodCard-img' src={srcImage}/>
            <div className='FoodCard-title'>
                <h5 className='font-style-karla fw-bold'>{title}</h5>
                <h5 className='font-style-karla fw-bold'>{price}</h5>
            </div>
            <p className='FoodCard-content fw-regular text-grey'>{content}</p>
            <div className='FoodCard-action'>
                <span className='font-style-karla fw-m'>{bottomLabel}</span>
                <img alt='scooter' src={bottomIconSrc}/>
            </div>
        </article>
    )
}

export default FoodCard;