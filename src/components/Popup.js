
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




function Popup(props) {

  

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


  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
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
          {props.children}
        </div> 
    </div>
  ) : "" ;
}

export default Popup;