import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/">Signin</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
