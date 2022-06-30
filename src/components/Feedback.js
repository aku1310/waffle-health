import emailjs from 'emailjs-com'
import React from 'react'

const Feedback = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('vangak', 'wafflefeedback', e.target, 'kv4kRuSad2AS8BmKK').then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <div className='page' id='feedback-page'>
        <div className='container'>
            <h2>Your opinion matters, as much as our waffles... so please let us know how to be butter</h2>
            <div id="form-section">
                <form onSubmit={sendEmail}>
                <label for="email">Enter your email:</label><br/>
                <input type="text" id="email" name="email"/><br/>

                <label for="feedback">Your precious feedback:</label><br/>
                <textarea type="text" id="feedback" name="message" height={800} ></textarea><br/>

                <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Feedback