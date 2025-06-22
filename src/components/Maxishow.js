import React from 'react';
import './maxishow.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Maxishow = () => {
  return (
      <div>
         <div className='semibtnx'>
             <h1 className='semix'>Maxi</h1>
             <Button href="/Maxipage" className='buttonx'>Veiw More<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi       bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
             </Button>
         </div> 
            <div className='mainx'>
                <div className='arr1x'>
                  <Card style={{ width: '18rem' , border:'none' }}>
                     <Card.Img className='img1x' variant="top" src="/images/m1.webp" /> 
                     <Card.Body>
                         <Card.Text>
                             < h6 className='heading1x'>BLACK BEAUTY BY BINYOUSUF</h6>
                             <h7 className='rs1x'>₨4,500.00</h7>
                         </Card.Text>
                         <Button href="/Cart" className='btn1x'>Add to cart</Button>
                      </Card.Body>
                   </Card>
              </div>
               <div className='arr2x'>
                  <Card style={{ width: '18rem' , border:'none'}}>
                      <Card.Img className='img2x' variant="top" src="/images/m2.jpg" /> 
                     <Card.Body>
                         <Card.Text>
                             < h6 className='heading2x'>Black Silk Maxy</h6>
                              <h7 className='rs2x'>₨4,500.00</h7>
                           </Card.Text>
                          <Button href="/Cart" className='btn2x'>Add to cart</Button>
                     </Card.Body>
                 </Card>     
               </div>
         </div>           
     </div>
    )
}

export default Maxishow;