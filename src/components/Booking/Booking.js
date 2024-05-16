import './index.css';
const Booking = ({booking}) => {
    return (
        <article className='Booking text-white'>
            <section className='Booking-id'>
                <h5 className=' fw-bold'>ID</h5>
                <h5 className=''>{booking.id}</h5>
            </section>
            <section className='Booking-date'>
                <h5 className=' fw-bold'>Date</h5>
                <h5 className=''>{new Date(booking.date).toLocaleDateString()}</h5>
            </section>
            <section className='Booking-time'>
                <h5 className='fw-bold'>Name</h5>
                <h5 className=''>{booking.name}</h5>
            </section>
            <section className='Booking-time'>
                <h5 className='fw-bold'>Time</h5>
                <h5 className=''>{booking.time}</h5>
            </section>
            <section className='Booking-guest'>
                <h5 className='fw-bold'>Number of guest</h5>
                <h5 className=''>{booking.guestN}</h5>
            </section>
            <section className='Booking-occasion'>
                <h5 className='fw-bold'>Occasion</h5>
                <h5 className=''>{booking.occasion ? booking.occasion : 'No Occasion'}</h5>
            </section>
        </article>
    )
}

export default Booking;