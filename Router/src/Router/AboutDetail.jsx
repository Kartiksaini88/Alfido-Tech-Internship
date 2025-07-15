import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './aboutdetail.css';
export default function Detail() {
     let {id} = useParams()
     const [item, setItem] = useState([]);

     useEffect(()=>{
      axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res)=>{
        setItem(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
     },[id])
  return (
   <div className="item-detail-container">
      <div className="item-image-section">
        <img
          src={item.images?.[0]}
          alt={item.title}
          className="item-main-image"
        />
      </div>
      <div className="item-info-section">
        <h2 className="item-title">{item.title}</h2>
        <p className="item-price">₹{item.price}</p>
        <p className="item-description">{item.description}</p>

        <div className="item-category">
          <strong>Category:</strong> {item.category?.name}
        </div>

        <img
          src={item.category?.image}
          alt={item.category?.name}
          className="item-category-image"
        />
      </div>
    </div>
  );
  
}
