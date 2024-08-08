import React from 'react'

const CategoryBtn = ({category,current}) => {
  return (
    <button className={`border text-nowrap border-gray-200 px-2 py-1 rounded me-2 ${current && 'bg-black text-white'}`}>
      {category}
    </button>
  )
}

export default CategoryBtn
