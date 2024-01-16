import React from 'react'
import './Home.scss'
import svg from '../assets/Netflix-logo.png'
import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={svg} alt="" />
        <div>
            <Link>TV Shows</Link>
            <Link>Movies</Link>
            <Link>Recently added</Link>
            <Link>My List</Link>
        </div>
        <ImSearch />
       
    </div>
  )
}

export default Navbar
