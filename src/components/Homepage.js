import React from 'react';
import { Link } from 'react-router-dom';

export const Homepage = () => {
    return (
        <div className='page' id='home-page'>
            <Link to='/wish'><div id='hid'>.</div></Link>
        </div>
    )
  }