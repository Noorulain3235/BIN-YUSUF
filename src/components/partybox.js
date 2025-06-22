import React from 'react';
import './partybox.css';



const partybox = () => {
  return (
     <div className='wholearrival'>
         <div className='continercp'>
             <div className='blackcp'>
                 <div className='con1cp'>
                     <h1 className='arrivcp'>Party Wear</h1>
                 </div>
                 <div className='con2cp'>
                     <a href='http://localhost:3000' className='conbtncp'>Home</a>
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-right  arrowacp" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                     </svg>
                     <h6 className='newcp'>Party Wear</h6>
                     <br/>
                 </div>
             </div>
         </div>
     </div>
   )
}

export default partybox;