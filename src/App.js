import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Menu from "./pages/Menu";
import About from "./components/About/About";
import BookingPage from "./pages/BookingPage/BookingPage";
import OrderOnline from "./pages/OrderOnline";
import ErrorPage from "./pages/Error";
import Login from "./pages/Login";
import {aboutObj} from "./model/constant";
import {useEffect, useState} from "react";
import ReservationPage from "./pages/ReservationPage/ReservationPage";

const App = () => {
    const [reservation, setReservation] = useState(() => localStorage.getItem("reservation")  !== null ? JSON.parse(localStorage.getItem("reservation")) : []);

    useEffect(() => {
        localStorage.setItem("reservation", JSON.stringify(reservation));
    }, [reservation]);

    const addReservation = (reservation) => {
        setReservation((prevState) => [...prevState, reservation]);
    }
    return (
        <section style={{minHeight: '100vh'}}>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/about" element={<About {...aboutObj}/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/order-online" element={<OrderOnline/>}/>
                    <Route path="/booking" element={<BookingPage addReservation={addReservation}/>}/>
                    <Route path="/reservations" element={<ReservationPage reservations={reservation}/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </section>
    );
}

export default App;
