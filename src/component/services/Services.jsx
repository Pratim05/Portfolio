import React from 'react'
import './Services.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services' >
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
           <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
               <BsPatchCheckFill className='service__list-icon'/>
               <p>HTML & CSS Responsive Web Design</p>
            </li>
            <li>
               <BsPatchCheckFill className='service__list-icon'/>
               <p>Developing and maintaining the user interface</p>
            </li>
            <li>
               <BsPatchCheckFill className='service__list-icon'/>
               <p>Implementing design on mobile websites</p>
            </li>
            <li>
               <BsPatchCheckFill className='service__list-icon'/>
               <p>Creating tools that improve site interaction regardless of the browser</p>
            </li>
            <li>
               <BsPatchCheckFill className='service__list-icon'/>
               <p>React JS Development</p>
            </li>
          </ul>
        </article>
      </div>

    </section >
  )
}

export default Services