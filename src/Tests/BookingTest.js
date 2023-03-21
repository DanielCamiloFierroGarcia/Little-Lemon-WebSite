import { render, screen } from "@testing-library/react";
import BookingForm from "../components/booking-form/BookingForm";

test("renders the BookingForm date picker label", () => {
  render(<BookingForm availableTimes={["17:00, 18:00"]} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("correct available times are there", () => {
  render(<BookingForm availableTimes={["17:00, 18:00"]} />);
});

test("correct html attributes are applied to the date input", () => {
  render(<BookingForm availableTimes={["17:00, 18:00"]}></BookingForm>);
  const datePicker = screen.getByLabelText("Choose date");
  expect(datePicker).toHaveAttribute("required");

  const time = screen.getByLabelText("Choose time");
  expect(time).toHaveAttribute("required");

  const guests = screen.getByLabelText("Number of guests");
  expect(guests).toHaveAttribute("required");

  const occasion = screen.getByLabelText("Occasion");
  expect(occasion).toHaveAttribute("required");
});