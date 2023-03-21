import { initializeTimes, updateTimes } from "./components/main/Main.js";

test("Update times", () => {
  const times = updateTimes([], { type: "update_date", payload: "2023-03-13" });
  expect(times.length).toBeGreaterThan(0);
});