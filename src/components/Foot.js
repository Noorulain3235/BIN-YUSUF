import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/footerimg.png`} alt="" className='footerimg' />
      
      <div className='mainf'>
        <div className='box1'> 
          <img src={`${process.env.PUBLIC_URL}/images/bin logo.png`} alt="" className='imgf' />
          <p className='pref'>
            Unveiling Elegance, Embracing Tradition: Discover the Essence of Pakistani Grace
          </p>
          <a href="https://www.facebook.com/binyousuf19/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </a>
        </div>

        <div className='box2'>
          <h4>Categories</h4>
          <a href="/Semipage" className='pf1'>Semi Formal</a>
          <a href="/Casualpage" className='pf2'>Casual Wear</a>
          <a href="/Partypage" className='pf3'>Party Wear</a>
          <a href="/Maxipage" className='pf4'>Maxi</a>
        </div>

        <div className='box3'> 
          <h4>Help Center</h4>
          <a href="/" className='pf5'>Track Order</a>
          <a href="/" className='pf6'>Terms & Conditions</a>
          <a href="/" className='pf7'>Privacy Policy</a>
          <a href="/" className='pf8'>Refund Policy</a>
        </div>

        <div className='box4'>
          <h4>Company</h4>
          <a href="/" className='pf11'>Home</a>
          <a href="/Aboutus" className='pf9'>About Us</a>
          <a href="/ContactPage" className='pf10'>Contact Us</a>
        </div>
      </div>

      <div className='fl'>
        <p className='pfl'>Copyright © 2023 Bin-Yousuf. All rights reserved. Powered by Quality Tech Solution.</p>
        <img src={`${process.env.PUBLIC_URL}/images/pay icon.png`} alt="payment-icons" className='imgfl' />
      </div>
    </div>
  );
}

export default Footer;
