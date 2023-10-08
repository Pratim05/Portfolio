import React from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <>

            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>
           
            <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#4db5ff',
      color: '#fff',
      fontFamily : 'sans-serif'
    }, 
  }}

/>

    
    
    
    </>
  )
}

export default App