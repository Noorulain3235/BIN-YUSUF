import React from 'react';
import './Allstyle.css';
import { Link } from 'react-router-dom'; // <-- Uncommented this

const Allstyle = () => {
  return (
    <div>
      <div className='main0'>
        <div className='box01'>
          <img
            src={`${process.env.PUBLIC_URL}/images/sf.jpeg`}
            alt="SemiFormal"
            className='sf01'
          />
          <div className='inbox01'>
            <h2 className='hdg01'>SemiFormal</h2>
            <Link to="/Semipage" className='btn01'>Shop Now</Link>
          </div>
        </div>

        <div className='box02'>
          <img
            src={`${process.env.PUBLIC_URL}/images/arr6.jpeg`}
            alt="Casual Wear"
            className='sf02'
          />
          <div className='inbox02'>
            <h2 className='hdg02'>Casual Wear</h2>
            <Link to="/Casualpage" className='btn02'>Shop Now</Link>
          </div>
        </div>

        <div className='box03'>
          <img
            src={`${process.env.PUBLIC_URL}/images/pw4.jpeg`}
            alt="Party Wear"
            className='sf03'
          />
          <div className='inbox03'>
            <h2 className='hdg03'>Party Wear</h2>
            <Link to="/Partypage" className='btn03'>Shop Now</Link>
          </div>
        </div>

        <div className='box04'>
          <img
            src={`${process.env.PUBLIC_URL}/images/m7.jpeg`}
            alt="Maxi"
            className='sf04'
          />
          <div className='inbox04'>
            <h2 className='hdg04'>Maxi</h2>
            <Link to="/Maxipage" className='btn04'>Shop Now</Link>
          </div>
        </div>
      </div>

      <h1 className='arrheader'>New Arrival</h1>
    </div>
  );
}

export default Allstyle;
