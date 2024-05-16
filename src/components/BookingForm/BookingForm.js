import './index.css';

const BookingForm = ({   name,
                         date,
                         time,
                         guestN,
                         occasion,
                         onChangeName,
                         onChangeDate,
                         availableTime,
                         onChangeTime,
                         onChangeGuestN,
                         onChangeOccasion,
                         onSubmit,
                         imgSrc,
                         altImg,
                     }) => {
    return (
        <form className='BookingForm-form'>
            <section className='d-flex d-sm-flex-column gap-20 jc-around bg-color-green text-white'>
                <div className='img-container align-self-center'>
                    <img src={imgSrc} alt={altImg} className='img'/>
                </div>
                <div className='d-flex-column p-30'>
                    <h1>RESERVE A TABLE</h1>
                    <p className='lead'>Here you can choose the preferred turn
                        for your booking and the amount of seats
                        you need.</p>
                </div>
            </section>
            <section className='d-flex-column d-md-flex-column jc-center align-self-center w-50 w-sm-100'>
                <div className='d-flex d-md-flex-column gap-20 p-30 jc-between'>
                    <label htmlFor="res-date" className='lead fw-bold'>Name</label>
                    <input type="text"
                           id="res-name"
                           value={name}
                           placeholder='Insert Name'
                           required
                           onChange={(e) => onChangeName(e.target.value)}
                    />
                </div>
                <div className='d-flex d-md-flex-column gap-20 p-30 jc-between'>
                    <label htmlFor="res-date" className='lead fw-bold'>Date</label>
                    <input type="date"
                           id="res-date"
                           value={date}
                           required
                           onChange={(e) => onChangeDate(e.target.value)}
                    />
                </div>
                <div className='d-flex d-md-flex-column gap-20 p-30 jc-between'>
                    <label htmlFor="res-time" className='lead fw-bold'>Reservation Time</label>
                    <select id="res-time"
                            value={time}
                            required
                            onChange={(e) => onChangeTime(e.target.value)}>
                        <option>Select time..</option>
                        {availableTime.map((time, index) => (
                            <option data-testid='select-option' key={index}>{time}</option>))}
                    </select>
                </div>
                <div className='d-flex d-md-flex-column gap-20 p-30 jc-between'>
                    <label htmlFor="guests" className='lead fw-bold'>Number of guests</label>
                    <input type="number"
                           placeholder="1"
                           min="1"
                           max="10"
                           id="guests"
                           value={guestN}
                           required
                           onChange={(e) => onChangeGuestN(Number(e.target.value))}/>
                </div>
                <div className='d-flex d-md-flex-column gap-20 p-30 jc-between'>
                    <label htmlFor="occasion" className='lead fw-bold'>Occasion</label>
                    <select id="occasion"
                            value={occasion}
                            onChange={(e) => onChangeOccasion(e.target.value)}>
                        <option>Select occasion..</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className='d-flex gap-20 p-30 jc-evenly'>
                    <button type="submit" aria-label="On Click Make your reservation"
                            disabled={!date || !time || !guestN || !name} onClick={(_) => onSubmit()}>
                        Make your reservation
                    </button>
                </div>
            </section>
        </form>
    )
}

export default BookingForm;