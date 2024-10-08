import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom';

const ProductCard = ({product:{id,title,price,image,rating:{rate}}}) => {
    const current_rate = rate.toFixed();
  return (
    <Link to={`/product-detail/${id}`} className='border border-gray-200 flex flex-col p-3 gap-3  mb-3'>
        <div className='flex flex-col w-100 items-center'>
            <img src={image} alt="" className='h-40'/>
        </div>
        <p className='font-bold clamp-2'>{title}</p>
        <Rating rate={current_rate}/>
      <div className='flex justify-between w-full align-center'>
       <p>${price}</p>
       <button className='border border-gray-200 px-2 text-nowrap py-1 rounded'>Add Cart</button>
      </div>
    </Link>
  )
}

export default ProductCard
