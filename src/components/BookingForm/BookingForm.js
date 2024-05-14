import './index.css';

const BookingForm = ({
                         date,
                         time,
                         guestN,
                         occasion,
                         onChangeDate,
                         availableTime,
                         onChangeTime,
                         onChangeGuestN,
                         onChangeOccasion,
                         onSubmit
                     }) => {
    return (
        <form className='BookingForm'>
            <div className='d-flex gap-20 p-30 jc-around'>
                <h1 className='text-center'>Book Now</h1>
            </div>
            <div className='d-flex gap-20 p-30 jc-between'>
                <label htmlFor="res-date" className='lead'>Choose date</label>
                <input type="date"
                       id="res-date"
                       value={date}
                       onChange={(e) => onChangeDate(e.target.value)}
                />
            </div>
            <div className='d-flex gap-20 p-30 jc-between'>
                <label htmlFor="res-time" className='lead'>Choose time</label>
                <select id="res-time"
                        value={time}
                        onChange={(e) => onChangeTime(e.target.value)}>
                    <option>Select time..</option>
                    {availableTime.map((time, index) => (
                        <option data-testid='select-option' key={index}>{time}</option>))}
                </select>
            </div>
            <div className='d-flex gap-20 p-30 jc-between'>
                <label htmlFor="guests" className='lead'>Number of guests</label>
                <input type="number"
                       placeholder="1"
                       min="1"
                       max="10"
                       id="guests"
                       value={guestN}
                       onChange={(e) => onChangeGuestN(Number(e.target.value))}/>
            </div>
            <div className='d-flex gap-20 p-30 jc-between'>
                <label htmlFor="occasion" className='lead'>Occasion</label>
                <select id="occasion"
                        value={occasion}
                        onChange={(e) => onChangeOccasion(e.target.value)}>
                    <option>Select occasion..</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <div className='d-flex gap-20 p-30 jc-around'>
                <button type="submit" disabled={!date || !time || !guestN} onClick={(_) => onSubmit()}>Make your
                    reservation
                </button>
            </div>
        </form>
    )
}

export default BookingForm;