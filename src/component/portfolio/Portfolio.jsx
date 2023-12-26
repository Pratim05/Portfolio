import React from 'react'
import './Porfolio.css'

import Img1 from '../../assets/Project1.png'
import Img2 from '../../assets/Project2.png'
import Img3 from '../../assets/Project3.png'
import Img4 from '../../assets/Project4.png'

const Portfolio = () => {
  return (
    <section>
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={Img1} alt="OES" />
          </div>
          <h3>Online Examination System</h3>
          <div className="description">Developed a robust Online Examination System using MERN stack. Featuring user authentication, instant result, proper security and warnings , attractive User-Interface for both Student and Teacher </div>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Pratim05/onlineexamsystem.github.io" className="btn" target='_blank'>Github</a>
          <a href="https://online-exam-system-bl45.onrender.com/" className="btn btn-primary" target='_blank'>Live View</a>
          </div>
        </article>
 
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={Img4} alt="FRF" />
          </div>
          <h3>Food Recipe Finder</h3>
          <div className="description">I spearheaded the development of a dynamic MERN stack-based Food Recipe App. This project redefines the culinary experience by seamlessly integrating user-friendly recipe search, dynamic category management, and secure authentication.  </div>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Pratim05/food-recipe-finder" className="btn" target='_blank'>Github</a>
          <a href="https://food-recipe-finder.onrender.com/" className="btn btn-primary" target='_blank'>Live View</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={Img2} alt="TTT" />
          </div>
          <h3>Tic Tac Toe</h3>
          <div className="description">
            Created a classic Tic Tac Toe game using JavaScript, providing an interactive and enjoiable gaming experience. one player can take his turn, and game check for wins and ties, Check it Out for Some Nostalgic fun.
          </div>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Pratim05/TicTacToe" className="btn" target='_blank'>Github</a>
          <a href="https://pratim-tictactoe.netlify.app/" className="btn btn-primary" target='_blank'>Play Now</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={Img3} alt="TL" />
          </div>
          <h3>TODO List</h3>
          <div className="description">
            Designed and developed a sleek ToDo list application using JavaScript and Bootstrap. Easily add, remove tasks with title and description with user friendly interfces.
          </div>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Pratim05/todolist.github.io" className="btn" target='_blank'>Github</a>
          <a href="https://pratim05.github.io/todolist.github.io/" className="btn btn-primary" target='_blank'>Live View</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio