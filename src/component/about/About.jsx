import React from "react";
import "./About.css";
import { LuFolderArchive } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import aboutMe from "../../assets/aboutMe.jpg";
const About = () => {
  return (
    <section id="about">
    
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container container__about">
        <div className="about__me">
          <div className="about_me-image">
            <img src={aboutMe} alt="" srcset="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <LuFolderArchive className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Qualification</h5>
              <small>Pursuing BCA degree under MAKAUT</small>
            </article>
          </div>

          <p>Hello, I'm <b>Pratim Bera</b>, I have a great passion for web development. My goal is to become a skilled Frontent Web Developer, and I'm excited to embark on this journey for crafting visually appealing and user-friendley websites with responsive design. With a commitment to continuous learning and creative approach to design. I am ready to bring your web projects to life.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
