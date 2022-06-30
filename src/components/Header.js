import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div class="header">
        <nav>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/activities'>activities</Link></li>
                <li><Link to = '/resources'>resources</Link></li>
                <li><Link to = '/quiz'>quiz</Link></li>
                <li><Link to = '/feedback'>feedback</Link></li>
            </ul>
        </nav>
    </div> 
  )
}
