import React from 'react';
import './Allstyle.css';
// import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';




const Allstyle = () => {
  return (
     <div>
         <div className='main0'>
             <div className='box01'>
                  <img src="/images/sf.jpeg" alt="" className='sf01' />
                  <div className='inbox01'>
                     <h2 className='hdg01'>SemiFormal</h2>
                     <Button href="/Semipage" className='btn01'>Shop Now</Button>
                  </div>
             </div>
             <div className='box02'>
                 <img src="/images/arr6.jpeg" alt="" className='sf02' />
                  <div className='inbox02'>
                     <h2 className='hdg02'>Casual Wear</h2>
                     <Button href="/Casualpage" className='btn02'>Shop Now</Button>
                  </div>
             </div>
             <div className='box03'>
                   <img src="/images/pw4.jpeg" alt="" className='sf03' />
                  <div className='inbox03'>
                     <h2 className='hdg03'>Party Wear</h2>
                     <Button href="/Partypage" className='btn03'>Shop Now</Button>
                  </div>
             </div>
             <div className='box04'>
                   <img src="/images/m7.jpeg" alt="" className='sf04' />
                  <div className='inbox04'>
                     <h2 className='hdg04'>Maxi</h2>
                     <Button href="/Maxipage" className='btn04'>Shop Now</Button>
                  </div>
             </div>
         </div>
         <h1 className='arrheader'>New Arrival</h1>
      </div>
   );
}

export default Allstyle;