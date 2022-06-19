import React from 'react'

const Feedback = () => {
  return (
    <div className='page' id='feedback-page'>
        <div className='container'>
            <h2>Have an opinion on how we could help you better? Do let us know here!</h2>
            <div id="form-section">
                <form>
                <label for="email">Enter your email:</label><br/>
                <input type="text" id="email" name="email"/><br/>

                <label for="feedback">Your precious feedback:</label><br/>
                <textarea type="text" id="feedback" name="feedback" height={800} ></textarea><br/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Feedback