import React, { useState } from 'react';
import './Zoom.css';
import Button from 'react-bootstrap/Button';
import Navbar from './Mynavbar';
import Foot from './Foot';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('/images/arr2.jpeg');

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Images list
  const images = [
    '/images/arr1.jpeg',
    '/images/arr2.jpeg',
    '/images/arr3.jpeg',
    '/images/arr4.jpeg',
    '/images/arr5.jpeg',
    '/images/arr6.jpeg',
    '/images/arr7.jpeg',
    '/images/arr8.jpeg'
    
  ];

  return (
    <>
      <Navbar />
      <div className="product-page">
        <div className="product-image">
          <img src={mainImage} alt="Majestic Dress" />
          <div className="thumbnail-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="thumbnail"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h1>PARTYWEAR DRESS WEAR BY NIDA YASIR</h1>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="price">₨ 4,850.00</p>
          <p className="categories">
            Categories: <strong>3 Piece, COTTON,PARTYWEAR DRESS WEAR</strong>
          </p>
          <p className="availability">
            Availability: <span className="green">3 in stock</span>
          </p>
          <div className="cart-controls">
            <div className="flex border border-gray-300">
              <button
                className="px-4 py-2 border-r border-gray-300 text-lg font-medium hover:bg-gray-100"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <div className="flex items-center justify-center px-4 min-w-12 text-center">
                {quantity}
              </div>
              <button
                className="px-4 py-2 border-l border-gray-300 text-lg font-medium hover:bg-gray-100"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <Button href="/Cart" className="add-to-cart-btn">Add to cart</Button>
          </div>
          <p className="return-policy">🔄 Free return within 15 days of purchase.</p>
          <p className="delivery-time">🚚 Estimate delivery times: 3-5 days</p>
        </div>
      </div>
      <Foot />
    </>
  );
}
