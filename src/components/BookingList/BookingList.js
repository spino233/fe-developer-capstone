import './index.css';
import Booking from "../Booking/Booking";

const BookingList = ({reservations}) => {
    return (
        <section className='BookingList'>
            {reservations && reservations.length > 0 ? reservations.map(r => <Booking key={r.id} booking={r}/>) : (<h1 className='p-30 text-center'>Currently there aren't any reservation</h1>)}
        </section>
    )
}

export default BookingList;