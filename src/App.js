import React, {useState} from 'react'
import './App.css';
import Home from './Components/Home';
import Logo from './Assets/Logo.png'
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import {
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Faqs from './Components/Faqs';
import Support from './Components/Support';
import AllCreators from './Components/AllCreators';
import { Divide as Hamburger } from "hamburger-react";
import ErrorPage from './Components/ErrorPage';


function App() {
  const [isOpen, setOpen] = useState(false);  // For Phone Size Hamburger

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");


  return (
    <div className="App">
      <main className="App-main">
       <div className='intro-creator-section'>
       <nav className='header-nav'>
          <Link to='/'><img src={Logo} alt="Tik Earn Logo" className='logo' /></Link>
          <div className='fq-support-wrapper' >
          <Link to='/faqs' className='faq' id={splitLocation[1] === "faqs" ? "active" : ""}>FAQs</Link>
          <Link to='support' className='support' id={splitLocation[1] === "support" ? "active" : ""}>Support</Link>
          </div>
          <div className="dropdown"> 
          <Hamburger
            toggle={() => setOpen((prevOpen) => !prevOpen)}
            rounded
            toggled={isOpen}
          />
          <div className={isOpen ? "dropdown-content" : "setOpen"}>
            <a href="/" rel="noreferrer" className='phone-nav'>HOME</a>
            <a href="/faqs" rel="noreferrer" className='phone-nav'>FAQs</a>
            <a href="/support" rel="noreferrer" className='phone-nav'>SUPPORT</a>
            <a href="/allcreators" rel="noreferrer" className='phone-nav'>CREATORS</a>
          </div>
        </div>
        </nav>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/support' element={<Support />} />
        <Route path='/allcreators' element={<AllCreators />} />
        <Route path='*' element={<ErrorPage />}/>
        </Routes>
       </div>
        <footer>
          <div className="footer-logo-wrapper">
          <Link to='/'>
          <img src={Logo} alt="Tik Earn Logo" className='footer-logo' />
          </Link>
          <div className='social-media-icons'>
            <a href='https://twitter.com/' target='_blank' rel="noreferrer"> <FiTwitter className='socials' /></a>
            <a href='https://twitter.com/' target='_blank' rel="noreferrer"><AiOutlineInstagram className='socials'  /></a>
            <a href='https://twitter.com/' target='_blank' rel="noreferrer"><BiMessageAltDetail className='socials'  /></a>
          </div>

          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
         <p className='copywrite-tikearn'> &#169; 2022 TikEarn</p>
         <div style={{display: "flex", justifyContent: "space-between"}}>
          <Link to='/' className='footer-terms'>Terms & Conditions</Link>
          <Link to='/' className='footer-policy'>Privacy policy</Link>
         </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
