import BookingForm from "../../components/BookingForm/BookingForm";
import {useReducer, useState} from "react";
import {fetchAPI, submitAPI} from "../../utils/fakeApi";
import {useNavigate} from "react-router-dom";

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const availableTimes = fetchAPI(action.selectedDate);
            return {
                ...state, times: availableTimes
            };
        default:
            return state;
    }
};

export const initializeTimes = () => {
    const availableTimes = fetchAPI(new Date())
    return {
        times: availableTimes
    };
};

const initialState = {
    time: []
}

const BookingPage = () => {
    const navigate = useNavigate();

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guestN, setGuestN] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [availableTimes, dispatch] = useReducer(reducer, initialState, initializeTimes);
    const updateTimes = (selectedDate) => {
        dispatch({type: 'UPDATE_TIMES', selectedDate: new Date(selectedDate)});
    };

    const onChangeDate = (value) => {
        setDate(value);
        updateTimes(value);
    }

    const onChangeTime = (value) => {
        setTime(value);
    }

    const onChangeGuestN = (value) => {
        setGuestN(value);
    }

    const onChangeOccasion = (value) => {
        setOccasion(value);
    }

    const onSubmit = () => {
        const data = new FormData();
        data.set("date", date);
        data.set("time", time);
        data.set("numberOfGuest", guestN);
        data.set("occasion", occasion);

        const result = submitAPI(data);
        if(result){
            navigate('/booking-confirm');
        }
    }

    return (
        <div style={{width: '100%'}}>
            <BookingForm date={date}
                         onChangeDate={onChangeDate}
                         time={time}
                         onChangeTime={onChangeTime}
                         guestN={guestN}
                         onChangeGuestN={onChangeGuestN}
                         occasion={occasion}
                         onChangeOccasion={onChangeOccasion}
                         availableTime={availableTimes.times}
                         onSubmit={onSubmit}/>
        </div>
    )
}

export default BookingPage;