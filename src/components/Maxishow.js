import React from 'react';
import './maxishow.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Maxishow = () => {
  return (
    <div>
      <div className='semibtnx'>
        <h1 className='semix'>Maxi</h1>
        <Link to="/Maxipage" className='buttonx'>
          View More
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
          </svg>
        </Link>
      </div>

      <div className='mainx'>
        <div className='arr1x'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img1x' variant="top" src={`${process.env.PUBLIC_URL}/images/m1.webp`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading1x'>BLACK BEAUTY BY BINYOUSUF</h6>
                <p className='rs1x'>₨4,500.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn1x'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr2x'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img2x' variant="top" src={`${process.env.PUBLIC_URL}/images/m2.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading2x'>Black Silk Maxy</h6>
                <p className='rs2x'>₨4,500.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn2x'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Maxishow;
