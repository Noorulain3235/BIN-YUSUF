import React from 'react';
import'./arrivalhome.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';


const arrivalhome = () => {
  return (  
    <div>
        <div className='main'>
         <div className='arr1'>
           <Card style={{ width: '18rem', border:'none'}}>
             <Card.Img className='img1' variant="top" src="/images/arr1.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading1'>SAIRA RIZWAN COTTON SILK</h6>
                 <h7 className='rs1'>₨4,850.00</h7>
               </Card.Text>
               <Button href="/Zoom1" className='btn1a'>Add to cart</Button> 
             </Card.Body>
           </Card>
         </div>
         <div className='arr2'>
           <Card style={{ width: '18rem', border:'none' }}>
             <Card.Img className='img2' variant="top" src="/images/arr2.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading2'>PARTYWEAR DRESS WEAR BY NIDA YASIR</h6>
                 <h7 className='rs2'>₨4,850.00</h7>
               </Card.Text>
               <Button href="/Zoom2" className='btn2'>Add to cart</Button>
             </Card.Body>
           </Card>     
         </div>
         <div className='arr3'>
           <Card style={{ width: '18rem', border:'none' }}>
             <Card.Img className='img3' variant="top" src="/images/arr3.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading3'>SAIRA RIZWAN</h6>
                 <h7 className='rs3'>₨4,850.00</h7>
               </Card.Text>
               <Button href="/Zoom3" className='btn3'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr4'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img4' variant="top" src="/images/arr4.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading4'>JAZMINE LAWN ORGANZA</h6>
                 <h7 className='rs4'>₨4,850.00</h7>
               </Card.Text>
               <Button href="/Zoom4" className='btn4'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
       </div>

       <div className='main2'>
         <div className='arr5'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img5' variant="top" src="/images/arr5.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading5'>ZARA SHAHJAHAN</h6>
                 <h7 className='rs5'>₨4,850.00</h7>
               </Card.Text>
                 <Button href="/Zoom5" className='btn5'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr6'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img6' variant="top" src="/images/arr6.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading6'>BAROQUE COTTON NET</h6>
                 <h7 className='rs6'>₨4,850.00</h7>
               </Card.Text>
               <Button href="/Zoom6" className='btn6'>Add to cart</Button>
             </Card.Body>
           </Card>     
         </div>
         <div className='arr7'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img7' variant="top" src="/images/arr7.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading7'>BAROQUE COTTON NET</h6>
                 <h7 className='rs7'>₨4,850.00</h7>
               </Card.Text>
               <Button href="/Zoom7" className='btn7'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
         <div className='arr8'>
           <Card style={{ width: '18rem' , border:'none'}}>
             <Card.Img className='img8' variant="top" src="/images/arr8.jpeg" /> 
             <Card.Body>
               <Card.Text>
                 < h6 className='heading8'>FLOSSIE FESTIVE COLLECTION</h6>
                 <h7 className='rs8'>₨4,850.00</h7>
               </Card.Text>
               <Button href="/Zoom8" className='btn8'>Add to cart</Button>
             </Card.Body>
           </Card>
         </div>
       </div>
    </div>
  )
}

export default arrivalhome;