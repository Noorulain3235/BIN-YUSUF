import React from 'react';
import './App.css';
import Mynavbar from './components/Mynavbar';
import Allstyle from './components/Allstyle';
import Arrival from './components/Arrival';
import Semibtn from './components/Semibtn';
import Semi from './components/Semi';
import Casbtn from './components/Casbtn';
import Casual from './components/Casual';
import Partybtn from './components/Partybtn';
import Party from './components/Party';
import Maxishow from './components/Maxishow';
import Foot from './components/Foot';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Arrivalpage from './components/Arrivalpage';
import Casualpage from './components/Casualpage';
import Maxipage from './components/Maxipage';
import Semipage from './components/Semipage';
import Partypage from './components/Partypage';
import Cart from './components/Cart';
import Zoom1 from './components/Zoom1';
import Zoom2 from './components/Zoom2';
import Zoom3 from './components/Zoom3';
import Zoom4 from './components/Zoom4';
import Zoom5 from './components/Zoom5';
import Zoom6 from './components/Zoom6';
import Zoom7 from './components/Zoom7';
import Zoom8 from './components/Zoom8';
import Customer from './components/Customer';
import ContactPage from './components/ContactPage';
import Winter from './components/Winter';


// Home component to display your main content
const Home = () => {
  return (
    <>
      <img src="/images/frontimg.png" alt="" className='frontimg' width="100%" />
      <Allstyle />
      <Arrival />
      <Semibtn />
      <Semi />
      <Casbtn />
      <Casual />
      <Partybtn />
      <Party />
      <Maxishow />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Arrivalpage" element={<Arrivalpage />} />
          <Route path="/Casualpage" element={<Casualpage />} />
          <Route path="/Maxipage" element={<Maxipage />} />
          <Route path="/Semipage" element={<Semipage />} />
          <Route path="/Partypage" element={<Partypage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Zoom1" element={<Zoom1 />} />
          <Route path="/Zoom2" element={<Zoom2 />} />
          <Route path="/Zoom3" element={<Zoom3 />} />
          <Route path="/Zoom4" element={<Zoom4 />} />
          <Route path="/Zoom5" element={<Zoom5 />} />
          <Route path="/Zoom6" element={<Zoom6 />} />
          <Route path="/Zoom7" element={<Zoom7 />} />
          <Route path="/Zoom8" element={<Zoom8 />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Winter" element={<Winter />} />
        </Routes>
        <Foot />
      </div>
    </BrowserRouter>
  );
}

export default App;