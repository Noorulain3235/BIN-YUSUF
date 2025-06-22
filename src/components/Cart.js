import React from 'react';
import './cart.css';


const Cert = () => {
  return (
      <div>
           <h1 className='carth'>Cart</h1>
         <div className='continercm2'>
             <div className='blackcm2'>
                 <div className='con1cm2'>
                     <h1 className='arrivcm2'>Cart</h1>
                 </div>
             </div>
         </div>
         <hr style={{ height: '4px', backgroundColor: 'green', border: 'none',width:'70%', marginLeft:'15%' }}/>
         <div className='line'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill  check" viewBox="0 0 16 16">
                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <h6 className='carth1'>“ZAHA ORGANZA FROCK” removed.</h6>
              <a href="http://localhost:3000" className='carta'>Undo?</a>
         </div>
         <div className='box21'>
             <div className='box22'>
                  <div className='box23'>
                     <div className='inbox'>
                         <p className='para21'>Product</p>
                         <p className='para22'>	Price</p>
                         <p className='para23'>Quantity</p>
                         <p className='para24'>	Subtotal</p>
                     </div>
                     <div className='inbox2'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg  cross" viewBox="0 0 16 16">
                         <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                      </svg>
                      <img src="/images/arr5.jpeg" alt="" className='img23' />
                      <p className='para25'>Bin Clothes</p>
                      <p className='para26'>Rs8,750.00</p>
                      <input type="number" id="quantity_66975318cb84b" className="input-text qty text  numb" name="cart[cede2d63a7c04ebd4cb55a2228c7141a][qty]"
                     defaultValue="1" aria-label="Product quantity" size="4" min="0" step="1" placeholder="1" inputMode="numeric" autoComplete="off"/>

                     <input type="number" name="number" id="number"  placeholder='8,750.00' className='numb3'/>
                    </div>
                </div>
                <div className='box24'>
                  <input type="text" name="number" id="number"  placeholder='Coupon Code' className='numb4'/>
                  <button className='numb5'>Apply Coupon</button>
                </div>
            </div>
            <div className='box25'>
                <h1 className='numb6'>Cart Totals</h1>
                <p className='numb7'>Total</p>
                <input type="text" name="number" id="number"  placeholder='Total' className='numb8'/>
                <button href='https://bin-yousuf.com/checkout/' className='numb9'>Process to checkout</button>
            </div>
            </div>
      </div>
   )
}

export default Cert;