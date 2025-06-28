import React from 'react';
import './casual.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Replace Button with Link

const Casual = () => {
  return (
    <div>
      <div className='mainc'>

        <div className='arr1c'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img1c' variant="top" src={`${process.env.PUBLIC_URL}/images/sf1.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading1c'>ALL OVER 2PC</h6>
                <p className='rs1c'>₨1,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn1c'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr2c'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img2c' variant="top" src={`${process.env.PUBLIC_URL}/images/sf2.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading2c'>ALL OVER 2PC</h6>
                <p className='rs2c'>₨1,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn2c'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr3c'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img3c' variant="top" src={`${process.env.PUBLIC_URL}/images/sf3.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading3c'>ALL OVER 2PC</h6>
                <p className='rs3c'>₨1,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn3c'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr4c'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img4c' variant="top" src={`${process.env.PUBLIC_URL}/images/sf4.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading4c'>ALL OVER 2PC</h6>
                <p className='rs4c'>₨1,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn4c'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className='main2c'>

        <div className='arr5c'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img5c' variant="top" src={`${process.env.PUBLIC_URL}/images/sf5.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading5c'>ALL OVER 2PC</h6>
                <p className='rs5c'>₨1,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn5c'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr6c'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img6c' variant="top" src={`${process.env.PUBLIC_URL}/images/sf6.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading6c'>ALL OVER 2PC</h6>
                <p className='rs6c'>₨1,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn6c'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr7c'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img7c' variant="top" src={`${process.env.PUBLIC_URL}/images/sf7.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading7c'>ALL OVER 2PC</h6>
                <p className='rs7c'>₨1,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn7c'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr8c'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img8c' variant="top" src={`${process.env.PUBLIC_URL}/images/sf8.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading8c'>ALL OVER 2PC</h6>
                <p className='rs8c'>₨1,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn8c'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Casual;
