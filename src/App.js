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
import { Routes, Route,HashRouter  } from 'react-router-dom';
import Arrivalpage from './components/Arrivalpage';
import Casualpage from './components/Casualpage';
import Maxipage from './components/Maxipage';
import Semipage from './components/Semipage';
import Partypage from './components/Partypage';
import Cart from './components/Cart';
import Customer from './components/Customer';
import ContactPage from './components/ContactPage';
import Winter from './components/Winter';
import Aboutus from './components/Aboutus';


// Home component to display your main content
const Home = () => {
  return (
    <>
      {/* <img src="/images/frontimg.png" alt="" className='frontimg' width="100%" /> */}
      <img src={`${process.env.PUBLIC_URL}/images/frontimg.png`} alt="Front" width="100%" className="frontimg" />

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
    <HashRouter>

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
          <Route path="/Customer" element={<Customer />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Winter" element={<Winter />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
        <Foot />
      </div>
    </HashRouter>

  );
}

export default App;