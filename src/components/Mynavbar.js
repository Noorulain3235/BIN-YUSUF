import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const CustomNavbar = () => {
  return (
    <div>
        <div className="App">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" className="bi bi-telephone   telephone" viewBox="0 0 16 16">
           <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
         </svg>
         <h5 className='number01'>+ (92) 333-3122-312</h5>
         <p className='para'>Express delivery and free returns within 30 days</p>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook  facebook1" viewBox="0 0 16 16">
           <a href="https://www.facebook.com/binyousuf19/">
           <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></a>
         </svg>
      </div>
      <Navbar bg="white" data-bs-theme="light">
        <Container>
           <Navbar.Brand  className='name' href="http://localhost:3000/">Bin Yousuf</Navbar.Brand>
            <Navbar.Brand  href="http://localhost:3000/" active className='home' >Home</Navbar.Brand>
           <Navbar.Brand  href='/Arrivalpage' className='arrival1'  >New Arrival</Navbar.Brand>
           <Navbar.Brand  href="/Casualpage" className='casual'>Casual Wear</Navbar.Brand>
            <Navbar.Brand  href="/Maxipage" className='maxi' >Maxi</Navbar.Brand>
            <Navbar.Brand  href="/Semipage" className='formal' >Semi Formal</Navbar.Brand>
            <Navbar.Brand  href="/Partypage" className='party' >Party Wear</Navbar.Brand>
            <Navbar.Brand  href="/Winter" className='winter'>Winter</Navbar.Brand>
            <Navbar.Brand  href="https://bin-yousuf.com/shawl/" className='shawl' >Footwear</Navbar.Brand>
            <Navbar.Brand  href="/Customer" className='diary' >Customer Diary</Navbar.Brand>
            <Navbar.Brand  href="/ContactPage" className='contact' >Contact</Navbar.Brand>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
             <a href="http://localhost:3000/">
             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></a>
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
             <a href="http://localhost:3000/Cart">
             <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/></a>
           </svg>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar;