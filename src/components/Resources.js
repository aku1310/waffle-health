import React from 'react'

export const Resources = () => {
  return (
    <div className='page' id='resource-page'>
        <h2>Had a stressful day? Here are some resources you can use to refresh your mind.</h2>
        <div className='container'>
            <div className='card'>
                <a href='https://youtu.be/TcNrj7H7E4k'>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988069241762746388/dance_and_music.png' alt='Some music to help your mood'/>
                    <p>Music</p>
                </a>
            </div>
            <div className='card'>
                <a href='https://open.spotify.com/show/3bDIT3GVMOB7hTJJfdH0kO%22%3E'>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988077660565536889/humm.png' id='notes' alt='Some podcasts to help you waste time'/>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988077660984983582/buzz.png' id='notes' className='overlay' alt='Some podcasts to help you waste time'/>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988073457168314438/dj_waffle.png' id='dj-waffle' className='double-overlay' alt='Some podcasts to help you waste time'/>
                    <p className='double-overlay'>Podcast</p>
                </a>
            </div>
            <div className='card'>
                <a href='#'>
                    <img src='https://cdn.discordapp.com/attachments/979642815648772106/988072179012886538/cat_waffle_vangak.png' alt='psst... cat porn'/>
                    <p>Cat Pics</p>
                </a>
            </div>
        </div>
    </div>
  )
}
