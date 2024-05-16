import BookingList from "../../components/BookingList/BookingList";

const ReservationPage =  ({reservations}) => {
    return (
        <>
            <BookingList reservations={reservations}/>
        </>
    )
}

export default ReservationPage