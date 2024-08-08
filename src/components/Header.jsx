import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='flex justify-between p-5'>
        <h4 className='text-2xl font-bold'>Online Shop</h4>
        <button className='border border-gray-200 px-2 py-1 rounded relative'>
        My Cart <span className='bg-red-500 text-sm text-white px-2 py-1 absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2'>1</span>
        </button>
        </div>
      
    </header>
  )
}

export default Header
