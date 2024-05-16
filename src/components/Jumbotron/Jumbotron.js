import './index.css';
import {useNavigate} from "react-router-dom";
const Jumbotron = ({title, subtitle, description, callToActionButtonLabel, imgSrc, altImg}) => {
    const navigate = useNavigate();
    return (
        <section className='section-header'>
            <article className='Jumbotron-article align-self-center'>
                <h1 className='text-yellow'>{title}</h1>
                <h3 className='text-white'>{subtitle}</h3>
                <p className='lead text-white'>
                    {description}
                </p>
                <button onClick={() => navigate('/booking')} aria-label={callToActionButtonLabel}>{callToActionButtonLabel}</button>
            </article>
            <div className='jumbo-img-container'>
                <img src={imgSrc} alt={altImg} className='jumbo-img'/>
            </div>
        </section>
    )
}

export default Jumbotron;