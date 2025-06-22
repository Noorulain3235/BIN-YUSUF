import React from 'react';
import './maxibox.css';



const Maxibox = () => {
  return (
     <div className='wholearrival'>
         <div className='continercm'>
             <div className='blackcm'>
                 <div className='con1cm'>
                     <h1 className='arrivcm'>Maxi</h1>
                 </div>
                 <div className='con2cm'>
                     <a href='http://localhost:3000' className='conbtncm'>Home</a>
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-right  arrowac" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                     </svg>
                     <h6 className='newcm'>Maxi</h6>
                     <br/>
                 </div>
             </div>
         </div>
     </div>
   )
}

export default Maxibox;