import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Menu from "./pages/Menu";
import About from "./components/About/About";
import BookingPage from "./pages/BookingPage/BookingPage";
import OrderOnline from "./pages/OrderOnline";
import ErrorPage from "./pages/Error";
import Login from "./pages/Login";
import {aboutObj} from "./model/constant";
import BookingConfirmationPage from "./pages/BookingConfirmationPage/BookingConfirmationPage";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/about" element={<About {...aboutObj}/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/order-online" element={<OrderOnline/>}/>
                    <Route path="/booking" element={<BookingPage/>}/>
                    <Route path="/booking-confirm" element={<BookingConfirmationPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
