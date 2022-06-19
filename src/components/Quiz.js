import React from 'react'

export const Quiz = () => {
  return (
    <div className='page' id='quiz-page'>
    <h2>Need a distraction? Here are some fun quizzes we think you ought to enjoy!</h2>
    <div className='container'>
        <div className='card'>
            <a href='https://www.buzzfeed.com/morgansloss1/most-misspelled-words-in-college-quiz'>
                <img src='https://cdn.discordapp.com/attachments/979642815648772106/988069241762746388/dance_and_music.png' alt='Some music to help your mood'/>
                <p>Quiz 1</p>
            </a>
        </div>
        <div className='card'>
            <a href='https://www.buzzfeed.com/dinahligons16/pick-some-snacks-and-well-tell-you-peoples-first-e3dnfi0shi'>
            <img src='https://cdn.discordapp.com/attachments/979642815648772106/988069241762746388/dance_and_music.png' alt='Some music to help your mood'/>
            <p>Quiz 2</p>
            </a>
        </div>
    </div>
</div>
  )
}