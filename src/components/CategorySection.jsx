import React from 'react'
import CategoryBtn from './CategoryBtn';

const CategorySection = () => {
    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
      ];
  return (
    <section className='px-5'>
        <p className='text-sm text-gray-500 mb-2'>Product Category</p>
        <div className='flex overflow-scroll cat_container'>
        <CategoryBtn category={'All'} current={true}/>
      {
        categories.map((category)=>{
            return <CategoryBtn category={category} key={category} current={false}/>
        })
      }
        </div>
        
    </section>
  )
}

export default CategorySection
