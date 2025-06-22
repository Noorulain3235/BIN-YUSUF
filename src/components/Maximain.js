import React from 'react'
import './maxi.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const maxi = () => {
  return (
    <div>
        <div className='mainm'>
         <div className='arr1m'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img1m' variant="top" src="/images/m1.webp" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading1m'>BLACK BEAUTY BY BINYOUSUF</h6>
                 <h7 className='rs1m'>₨4,500.00</h7>
               </Card.Text>
                 <Button href="/Cart" className='btn1m'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr2m'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img2m' variant="top" src="/images/m2.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading2m'>Black Silk Maxy</h6>
                 <h7 className='rs2m'>₨4,500.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn2m'>Add to cart</Button>
             </Card.Body>
           </Card>     
         </div>
         <div className='arr3m'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img3m' variant="top" src="/images/m3.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading3m'>Full Black Silk Maxi</h6>
                 <h7 className='rs3m'>₨6,850.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn3m'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr4m'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img4m' variant="top" src="/images/m4.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading4m'>MARIA B. MAXI</h6>
                 <h7 className='rs4m'>₨6,450.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn4m'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
       </div>

       <div className='main2m'>
         <div className='arr5m'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img5m' variant="top" src="/images/m5.png" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading5m'>Plain 12 Kali Maxi</h6>
                 <h7 className='rs5m'>₨17,500.00</h7>
               </Card.Text>
                 <Button href="/Cart" className='btn5m'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr6m'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img6m' variant="top" src="/images/m6.webp" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading6m'>BINYOUSUF DESIGNER MAXI</h6>
                 <h7 className='rs6m'>₨4,000.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn6m'>Add to cart</Button>
             </Card.Body>
           </Card>     
         </div>
         <div className='arr7m'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img7m' variant="top" src="/images/m7.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading7m'>MARIA B. MAXI</h6>
                 <h7 className='rs7m'>₨5,000.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn7m'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr8m'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img8m' variant="top" src="/images/m8.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading8m'>ASIM JOFA</h6>
                 <h7 className='rs8m'>₨5,750.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn8m'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
       </div>
    </div>
  )
}

export default maxi