import BookingPage, {initializeTimes} from './BookingPage';
import {fireEvent, render, screen} from "@testing-library/react";


test('initializeTimes returns the correct expected value', () => {
    const initialState = {
        times: [],
    };

    const expectedState = {
        times: ['17:00', '18:00', '19:00'],
    };

    const actualState = initializeTimes(initialState);

    expect(actualState).toEqual(expectedState);
});

test('updateTimes returns the same value as provided in the state', () => {
    render(<BookingPage/>);

    const selectedDate = '2024-05-14';

    const date = screen.getByLabelText('Choose date');
    fireEvent.change(date, {target: {value: selectedDate}});

    let options = screen.getAllByTestId('select-option');
    const expectedState = {
        times: [
            '20:00',
            '21:00',
            '22:00',
        ]
    };

    expect(expectedState.times[0]).toEqual(options[0].value);
    expect(expectedState.times[1]).toEqual(options[1].value);
    expect(expectedState.times[2]).toEqual(options[2].value);
});