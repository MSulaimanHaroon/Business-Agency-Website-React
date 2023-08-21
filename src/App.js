import React from 'react';
import './app.css';
import Header from './components/Header';
import Games from './components/Games';
import Blog from './components/Blog';
import Technologies from './components/Technologies';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

function App() {

  return (
    <>
    <ParallaxProvider>
      <Header />
      <AboutUs/>
      <Technologies/>
      <Games/>
      <Blog/>
      <Contact />  
      
      <Footer/>
      
      </ParallaxProvider>
    </>
  );
}

export default App;
