import React from "react";
import BookingForm from "../../../components/Booking/Booking.js";

export default function Reservations({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      ></BookingForm>
    </>
  );
}