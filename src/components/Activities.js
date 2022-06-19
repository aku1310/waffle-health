import React from 'react'

export const Activities = () => {
  return (
    <div className='page' id='activity-page'>
        <h2>Here are some activities we suggest you try for bettering your mental and physical being</h2>
        <div className='container'>
            <div className='card'>
                <a href='https://youtube.com/playlist?list=PLAFs3kxY4h1_b4_ZuA2nq23bzIrxb71sf'>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988068726563807252/tm.png' alt='Work those muscles'/>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988068726362484736/without_tm.png' className='overlay' id='run-waffle' alt='Work those muscles'/>
                    <p className='overlay'>Workout</p>
                </a>
            </div>
            <div className='card'>
                <a href='https://youtu.be/inpok4MKVLM'>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988059327246000158/med2.png' id='sage-waffle' alt='Pretend not to sleep'/>
                    <p>Meditation</p>
                </a>
            </div>
            <div className='card'>
                <a href='https://youtu.be/A0pkEgZiRG4'>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988096538960097390/med.png' id='med-waffle' alt='Stretch your joints'/>
                    <p>Yoga</p>
                </a>
            </div>
        </div>
    </div>
  )
}
