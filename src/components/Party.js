import React from 'react';
import './partywear.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Partywear = () => {
  return (
    <div>
      <div className='mainp'>

        <div className='arr1p'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img1p' variant="top" src={`${process.env.PUBLIC_URL}/images/pw1.jpeg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading1p'>ASIM JOFA PARTYWEAR</h6>
                <p className='rs1p'>₨4,350.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn1p'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr2p'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img2p' variant="top" src={`${process.env.PUBLIC_URL}/images/pw2.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading2p'>CHANDNI BY ASIM JOFA!</h6>
                <p className='rs2p'>₨5,950.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn2p'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr3p'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img3p' variant="top" src={`${process.env.PUBLIC_URL}/images/pw3.jpeg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading3p'>MARIA B. ORGANZA</h6>
                <p className='rs3p'>₨4,000.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn3p'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr4p'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img4p' variant="top" src={`${process.env.PUBLIC_URL}/images/pw4.jpeg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading4p'>LAAM PARTYWEAR</h6>
                <p className='rs4p'>₨5,200.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn4p'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className='main2p'>

        <div className='arr5p'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img5p' variant="top" src={`${process.env.PUBLIC_URL}/images/pw5.jpeg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading5p'>GULAAL ORGANZA</h6>
                <p className='rs5p'>₨6,850.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn5p'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr6p'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img6p' variant="top" src={`${process.env.PUBLIC_URL}/images/pw6.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading6p'>Reddish Maroon Silk Saree With Banarsi Blouse</h6>
                <p className='rs6p'>₨11,000.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn6p'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr7p'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img7p' variant="top" src={`${process.env.PUBLIC_URL}/images/pw7.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading7p'>RED SILK EXTRA LONG PALU DIVA SAREE</h6>
                <p className='rs7p'>₨10,000.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn7p'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

        <div className='arr8p'>
          <Card style={{ width: '19rem', border: 'none' }}>
            <Card.Img className='img8p' variant="top" src={`${process.env.PUBLIC_URL}/images/pw8.jpg`} />
            <Card.Body>
              <Card.Text>
                <h6 className='heading8p'>DARK MAROON SILK EXTRA LONG PALU DIVA SAREE</h6>
                <p className='rs8p'>₨11,000.00</p>
              </Card.Text>
              <Link to="/Cart" className='btn8p'>Add to cart</Link>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Partywear;
