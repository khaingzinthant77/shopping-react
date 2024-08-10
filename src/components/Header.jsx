import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
       
          <div className='flex justify-between p-5'>
          <Link to={"/"} className='text-2xl font-bold'>Online Shop</Link>
          <Link to={"/my-cart"} className='border border-gray-200 px-2 py-1 rounded relative'>
          My Cart <span className='bg-red-500 text-sm text-white px-2 py-1 absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2'>1</span>
          </Link>
          </div>
       
    </header>
  )
}

export default Header
