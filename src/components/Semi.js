import React from 'react';
import './semiformal.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';





const semiformal = () => {
  return (
    <div className='semi'>
       <div className='main'>
         <div className='arr1'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img1' variant="top" src="/images/sf1.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading1'>ALL OVER 2PC</h6>
                 <h7 className='rs1'>₨1,850.00</h7>
               </Card.Text>
                 <Button href="/Cart" className='btn1'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr2'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img2' variant="top" src="/images/sf2.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading2'>ALL OVER 2PC</h6>
                 <h7 className='rs2'>₨1,850.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn2'>Add to cart</Button>
             </Card.Body>
           </Card>     
         </div>
         <div className='arr3'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img3' variant="top" src="/images/sf3.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading3'>ALL OVER 2PC</h6>
                 <h7 className='rs3'>₨1,850.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn3'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr4'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img4' variant="top" src="/images/sf4.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading4'>ALL OVER 2PC</h6>
                 <h7 className='rs4'>₨1,850.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn4'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
       </div>

       <div className='main2'>
         <div className='arr5'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img5' variant="top" src="/images/sf5.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading5'>ALL OVER 2PC</h6>
                 <h7 className='rs5'>₨1,850.00</h7>
               </Card.Text>
                 <Button href="/Cart" className='btn5'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr6'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img6' variant="top" src="/images/sf6.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading6'>ALL OVER 2PC</h6>
                 <h7 className='rs6'>₨1,850.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn6'>Add to cart</Button>
             </Card.Body>
           </Card>     
         </div>
         <div className='arr7'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img7' variant="top" src="/images/sf7.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading7'>ALL OVER 2PC</h6>
                 <h7 className='rs7'>₨1,850.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn7'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr8'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img8' variant="top" src="/images/sf8.jpg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading8'>ALL OVER 2PC</h6>
                 <h7 className='rs8'>₨1,850.00</h7>
               </Card.Text>
               <Button href="/Cart" className='btn8'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
       </div> 
    </div>
  )
}

export default semiformal