import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
  return (
    <div className="navbar-wrapper">
      {/* Top Info Bar */}
      <div className="top-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone telephone" viewBox="0 0 16 16">
          <path d="..." />
        </svg>
        <h6 className="number01">+ (92) 333-3122-312</h6>
        <p className="para">Express delivery and free returns within 30 days</p>
        <a href="https://www.facebook.com/binyousuf19/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook facebook1" viewBox="0 0 16 16">
            <path d="..." />
          </svg>
        </a>
      </div>

      {/* Navigation Bar */}
      <Navbar expand="lg" bg="white" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="name">Bin Yousuf</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <div className="nav-links">
              <Navbar.Brand as={Link} to="/" className="home">Home</Navbar.Brand>
              <Navbar.Brand as={Link} to="/Arrivalpage" className="arrival1">New Arrival</Navbar.Brand>
              <Navbar.Brand as={Link} to="/Casualpage" className="casual">Casual Wear</Navbar.Brand>
              <Navbar.Brand as={Link} to="/Maxipage" className="maxi">Maxi</Navbar.Brand>
              <Navbar.Brand as={Link} to="/Semipage" className="formal">Semi Formal</Navbar.Brand>
              <Navbar.Brand as={Link} to="/Partypage" className="party">Party Wear</Navbar.Brand>
              <Navbar.Brand as={Link} to="/Winter" className="winter">Winter</Navbar.Brand>
              {/* <Navbar.Brand href="https://bin-yousuf.com/shawl/" className="shawl">Footwear</Navbar.Brand> */}
              <Navbar.Brand as={Link} to="/Customer" className="diary">Customer Diary</Navbar.Brand>
              <Navbar.Brand as={Link} to="/ContactPage" className="contact">Contact</Navbar.Brand>
            </div>
            <div className="nav-icons">
              <Link to="/" className="icon-link">
                <i className="bi bi-search" />
              </Link>
              <Link to="/Cart" className="icon-link">
                <i className="bi bi-handbag" />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
