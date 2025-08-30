import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeContainer from './pages/home_Container/HomeContainer';
import Bus from './pages/home_Container/bus/Bus';
import Details from './pages/home_Container/bus/Details';
import Checkout from './pages/home_Container/checkout/Checkout';
import About from './pages/home_Container/about/About';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
                <Route path="/" element={<HomeContainer/>}></Route>
                <Route path="/bus" element={<Bus/>}></Route>
                <Route path="/bus/bus-details" element={<Details/>}></Route>
                <Route path="/bus/bus-details/bus/bus-details/checkout" element={<Checkout/>}></Route>
                <Route path='/about' element = {<About />} />
          </Routes>
          {/* Footer */}
          {/* <About/> */}
          <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
