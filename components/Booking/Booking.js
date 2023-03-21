import React, { useState } from "react";

function isGuestsStateInvalid(guests) {
  return guests.length === 0 || 0 === parseInt(guests) || 10 < parseInt(guests);
}

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    if (formObject.date === "") return;
    if (formObject.time === "") return;
    if (isGuestsStateInvalid(formObject.guests)) return;
    if (
      formObject.occasion !== "Birthday" ||
      formObject.occasion !== "Anniversary"
    )
      return;
    submitForm(formObject);
    console.log(
      `Date: ${date}, Time: ${time}, Guests: ${guests}, Occasion: ${occasion}`
    );
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch({ type: "update_date", payload: event.target.value });
  };

  return (
    <form
      className="layout-item"
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        name="date"
        id="res-date"
        value={date}
        required
        onChange={handleDateChange}
        aria-label="Date input"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        value={time}
        required
        aria-label="Time input"
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.length !== 0 ? (
          availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option>No time available</option>
        )}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        aria-label="Number input"
        type="number"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        required
        onChange={(e) => {
          setGuests(e.target.value);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        aria-label="Occasion select"
        id="occasion"
        name="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input
        aria-label="Make reservation"
        required
        type="submit"
        value="Make Your reservation"
        disabled={
          availableTimes.length === 0 ||
          date.length === 0 ||
          isGuestsStateInvalid(guests)
        }
      />
    </form>
  );
}