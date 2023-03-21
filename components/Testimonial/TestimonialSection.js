import React from "react";
import Testimonial from "../Testimonial/Testimonial.js";
import { useData } from "../../hooks/useData.js";
import { ClipLoader } from "react-spinners";

const testimonials = [
  {
    message:
      "The portion size was generous and it filled me up for the rest of the day. Will definitely be ordering again!",
  },
  {
    message:
      "The spinach and feta quiche was amazing! The crust was flaky and the filling was deliciously creamy. Will definitely recommend it to others!",
  },
  {
    message:
      "The mozzarella cheese melted in my mouth and the fresh basil leaves gave a nice fragrance to it. It was a perfect choice for a movie night with friends!",
  },
  {
    message:
      "The vegetables were fresh and the portion size was good enough for two people. I will definitely be ordering it again soon!",
  },
];

export default function TestimonialSection() {
  const userData = useData(
    "https://dummyjson.com/users?limit=4&skip=10&select=firstName,lastName,image,id"
  );

  let testimonialsWithData = [];
  testimonialsWithData = testimonials.map((testimonial, i) => {
    if (userData) {
      const { users } = userData;
      return {
        ...testimonial,
        ...users[i],
        rating: Math.floor(Math.random() * 2 + 4),
      };
    }
    return { id: i };
  });

  return (
    <section className="testimonials-section layout-item">
      <h2>Testimonials</h2>
      <div>
        {testimonialsWithData.map((testimonial) => {
          return (
            <Testimonial key={testimonial.id} {...testimonial}></Testimonial>
          );
        })}
      </div>
    </section>
  );
}