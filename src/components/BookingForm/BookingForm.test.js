import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Cannot submit without name',() => {
    render(<BookingForm time='17:00' date='2024-04-11' guestN={1} availableTime={['17:00', '18:00', '19:00']}/>);
    expect(screen.getByRole("button")).toHaveProperty('disabled', true);
});

test('Cannot submit without date', () => {
    render(<BookingForm time='17:00' name='Angala' guestN={1} availableTime={['17:00', '18:00', '19:00']}/>);
    expect(screen.getByRole("button")).toHaveProperty('disabled', true);
});

test('Cannot submit without time', () => {
    render(<BookingForm date='2024-04-12' name='Angala' guestN={1} availableTime={['17:00', '18:00', '19:00']}/>);
    expect(screen.getByRole("button")).toHaveProperty('disabled', true);
});

test('Cannot submit with number of guest equal to zero', () => {
    render(<BookingForm date='2024-04-12' name='Angala' guestN={0} availableTime={['17:00', '18:00', '19:00']}/>);
    expect(screen.getByRole("button")).toHaveProperty('disabled', true);
});

test('Can submit with name, date, time, and guest number filled and greater than 0', () => {
    render(<BookingForm date='2024-04-12' time='17:00' name='Angala' guestN={1} availableTime={['17:00', '18:00', '19:00']}/>);
    expect(screen.getByRole("button")).toHaveProperty('disabled', false);
});