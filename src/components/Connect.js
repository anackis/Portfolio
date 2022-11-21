import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import myimg from '../assets/img/aboutme/myimg.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Connect = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reser();
  };
 

	return (
		<section id="connect" className="connect">
      <div className="container">
        <div className="connect__wrapper">
          <div className="connect__imgarea">
            <img className="connect__img" src={myimg} alt="aboutme-img" />
          </div>
          <div className="connect__textarea">
            <h2 className="connect__title">Contacts</h2>
            <div className="connect__divider"></div>
            <div className="connect__links">
              <a href="https://github.com/anackis?tab=overview&from=2022-11-01&to=2022-11-11"><img src={navIcon2} alt="navIcon"/></a>
              <a href="https://www.linkedin.com/in/alex-anackis-9831371a8/"><img src={navIcon1} alt="navIcon" /></a>
              <a href="https://www.instagram.com/alex_anackis_/"><img src={navIcon3} alt="navIcon" /></a>
            </div>
                <form ref={form} onSubmit={sendEmail} className="form" action="#">
                  <div className="form__wrapper">
                    <div className="form-name form__box">
                      <input required name="name" id="name" type="text"/>
                      <label for="name">Your Name</label>
                    </div>
                    <div className="form-email form__box">
                      <input required name="email" id="email" type="email"/>
                      <label for="email">Your Email</label>
                    </div>
                    <div className="form-text form__box">
                      <textarea className="form__box-textarea" name="text" id="text" placeholder="Send me a message :)"></textarea>
                      <label for="text">Your massage</label>
                    </div>
                  </div>
                  <div className="form__policy">
                    <button type="submit" className="button">Send a message</button> 
                  </div>
                </form>
          </div>
        </div>
      </div>
    </section>
	)
}