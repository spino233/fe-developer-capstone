import './index.css';

const TestimonialCard = ({title, profileImgSrc, profileName, content}) => {
    return (
        <article className='TestimonialCard'>
            <h5 className='p-xy-20'>{title}</h5>
            <div className='d-flex p-xy-20'>
                <img src={profileImgSrc} className='TestimonialCard-img' alt='profile avatar'/>
                <h5 className='TestimonialCard-name'>{profileName}</h5>
            </div>
            <p className='p-xy-20'>{content}</p>
        </article>
    )
};

export default TestimonialCard;