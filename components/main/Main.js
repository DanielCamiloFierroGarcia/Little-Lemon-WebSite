import Home from "../src/pages/Home/Home.js";
import About from "../src/pages/about/About.js";
import Login from "../src/pages/login/login.js";
import Order from "../src/pages/Order/Order.js";
import Reservations from "../src/pages/Reservations/Reservations.js";
import Menu from "../src/pages/Menu/Menu.js";
import BookingConfirmed from "../src/pages/Booking/Booking.js";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../../apis/reservation-api.js";
import { Route, Routes, useNavigate } from "react-router-dom";

export function updateTimes(state, action) {
  if (action.type === "update_date") {
    const date = new Date(action.payload);
    return fetchAPI(date);
  }

  return state;
}

export function initializeTimes() {
  return fetchAPI(new Date());
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  function submitForm(formData) {
    setIsFormSubmitted(submitAPI(formData));
  }

  useEffect(() => {
    if (isFormSubmitted) {
      navigate("/confirmed");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted]);

  return (
    <main className="layout">
      {" "}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route
          path="/reservations"
          element={
            <Reservations
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/confirmed" element={<BookingConfirmed />}></Route>
      </Routes>
    </main>
  );
}