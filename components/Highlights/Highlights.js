import React from "react";
import Card from "../card/Card.js";

const specials = [
  {
    name: "Greek Salad",
    description:
      "Lorem ipsum dolor sit amet. Non rerum voluptate est unde rerum aut perferendis pariatur!",
    price: 14.99,
    img: "/steak.jpg",
  },
  {
    name: "Burger",
    description:
      "Lorem ipsum dolor sit amet. Non rerum voluptate est unde rerum aut perferendis pariatur!",
    price: 3.99,
    img: "/hamburguesas-caseras-receta.jpg",
  },
  {
    name: "Cookies Dessert",
    description:
      "Lorem ipsum dolor sit amet. Non rerum voluptate est unde rerum aut perferendis pariatur!",
    price: 2.99,
    img: "/dessert.jpg",
  },
];

const specialsWithIdAndFixedDecimal = specials
  .map((special, i) => ({
    ...special,
    id: i,
  }))
  .map((special) => ({ ...special, price: special.price.toFixed(2) }));

export default function HighlightsSection() {
  return (
    <section className="highlights-section layout-item">
      <div className="highlights-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {specialsWithIdAndFixedDecimal.map(
          ({ name, price, description, img, id }) => (
            <Card
              key={id}
              title={name}
              price={price}
              description={description}
              img={img}
            ></Card>
          )
        )}
      </div>
    </section>
  );
}