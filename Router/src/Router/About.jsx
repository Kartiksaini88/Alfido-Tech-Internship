import axios from "axios";
import React, { useEffect, useState } from "react";
import "./about.css";
import { Link } from "react-router";
export default function About() {
  const [items, setimtems] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setimtems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="fashion-grid-container">
      {items.map((item) => (
        <div className="fashion-card" key={item.id}>
          {" "}
          <Link className="Link" to={`/detail/${item.id}`}>
            <img src={item.images} alt={item.title} className="fashion-image" />
            <h3 className="fashion-title">{item.title}</h3>
            <p className="fashion-price">₹{item.price}</p>
          </Link>{" "}
        </div>
      ))}
    </div>
  );
}
