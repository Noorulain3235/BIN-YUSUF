import React from 'react';
import './maxi.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Maxi = () => {
  return (
    <div>
      <div className='mainm'>
        <div className='arr1m'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/m1.webp`} alt="BLACK BEAUTY" className='img1m' />
            <Card.Body>
              <Card.Text>
                <h6 className='heading1m'>BLACK BEAUTY BY BINYOUSUF</h6>
                <p className='rs1m'>₨4,500.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn1m'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr2m'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/m2.jpg`} alt="Black Silk Maxy" className='img2m' />
            <Card.Body>
              <Card.Text>
                <h6 className='heading2m'>Black Silk Maxy</h6>
                <p className='rs2m'>₨4,500.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn2m'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr3m'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/m3.jpg`} alt="Full Black Silk Maxi" className='img3m' />
            <Card.Body>
              <Card.Text>
                <h6 className='heading3m'>Full Black Silk Maxi</h6>
                <p className='rs3m'>₨6,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn3m'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr4m'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/m4.jpeg`} alt="MARIA B. MAXI" className='img4m' />
            <Card.Body>
              <Card.Text>
                <h6 className='heading4m'>MARIA B. MAXI</h6>
                <p className='rs4m'>₨6,450.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn4m'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='main2m'>
        <div className='arr5m'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/m5.png`} alt="Plain 12 Kali Maxi" className='img5m' />
            <Card.Body>
              <Card.Text>
                <h6 className='heading5m'>Plain 12 Kali Maxi</h6>
                <p className='rs5m'>₨17,500.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn5m'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr6m'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/m6.webp`} alt="BINYOUSUF DESIGNER MAXI" className='img6m' />
            <Card.Body>
              <Card.Text>
                <h6 className='heading6m'>BINYOUSUF DESIGNER MAXI</h6>
                <p className='rs6m'>₨4,000.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn6m'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr7m'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/m7.jpeg`} alt="MARIA B. MAXI" className='img7m' />
            <Card.Body>
              <Card.Text>
                <h6 className='heading7m'>MARIA B. MAXI</h6>
                <p className='rs7m'>₨5,000.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn7m'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr8m'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/m8.jpeg`} alt="ASIM JOFA" className='img8m' />
            <Card.Body>
              <Card.Text>
                <h6 className='heading8m'>ASIM JOFA</h6>
                <p className='rs8m'>₨5,750.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn8m'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Maxi;
