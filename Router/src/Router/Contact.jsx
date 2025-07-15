import axios from "axios";
import React, {  useEffect, useState } from "react";
import "./about.css";
export default function Contact() {
  const [items, setimtems] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users")
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
          <img src={item.avatar} alt={item.title} className="fashion-image" />
          <h3 className="fashion-title">{item.name}</h3>
          <p className="fashion-price">{item.role}</p>
        </div>
      ))}
    </div>
  );
}
