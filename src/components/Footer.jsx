import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer className='bg-black text-white text-center mt-auto py-4'>
      @{date.getFullYear()} R&D Team All I Reserved For You.
    </footer>
  )
}

export default Footer
