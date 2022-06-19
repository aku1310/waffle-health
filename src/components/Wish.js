import React from 'react';
import { Link } from 'react-router-dom';

export const Wish = () => {
    return (
        <div className='page' id='wish-page'>
            <h2>What do YOU wish to do today?</h2>
            <div className='container' id='wish-container'>
                <div className='card'>
                    <Link to='/activities'>
                        <img src='https://cdn.discordapp.com/attachments/979642815648772106/988069241561448458/activiyt.png' alt='activities for mental and physical health'/>
                        <p>Activities</p>
                    </Link>
                </div>
                <div className='card'>
                    <Link to='/resources'>
                        <img src='https://cdn.discordapp.com/attachments/979642815648772106/988070246273392670/better.png' alt='Resources that help you feel better'/>
                        <p>Resources</p>
                    </Link>
                </div>
                <div className='card'>
                    <Link to='/quiz'>
                        <img src='https://cdn.discordapp.com/attachments/979642815648772106/988062766290075648/bulb.png' id='idea-waffle' alt='Fun quiz you can attempt'/>
                        <img src='https://cdn.discordapp.com/attachments/979642815648772106/988062765858033684/without_bulb.png' className='overlay' alt='Fun quiz you can attempt'/>
                        <p className='overlay'>Quiz</p>
                    </Link>
                </div>
            </div>
        </div>
    )
  }