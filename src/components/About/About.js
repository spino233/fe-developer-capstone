import './index.css'

const About = ({title, subTitle, content, imgSrcOne, imgSrcTwo}) => {
    return (
        <section className='About'>
            <article>
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
                <p className='text-grey'>{content}</p>
            </article>
            <div className='d-flex p-top-20'>
                <picture className='About-img-container'>
                    <img className='About-img-1' src={imgSrcOne} alt='chefs 1'/>
                </picture>
                <picture className='About-img-container'>
                    <img className='About-img-2' src={imgSrcTwo} alt='chefs 2'/>
                </picture>
            </div>
        </section>
    )
}

export default About;