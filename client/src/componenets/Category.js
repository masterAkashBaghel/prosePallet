import React from 'react';
import data from './data';
import cats from '../Assets/cats.png'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';



const Category = () => {
  
  const navigaet = useNavigate();
  function creation(types)
  {
     
    navigaet(`/create?category=${types}`)
  }

  const toall =   ()=>{
    navigaet('/posts')
  }
  return (
    <div className='mt-20'>
      {/* main section */}
      <div className='flex flex-col items-center mt-10 pt-10 bg-[#BC382E]'>
        <h1 className='text-white text-4xl mt-10'>Publish your passions, your way</h1>
        <h2 className='text-xl text-white mt-2'>Create a unique and beautiful blog easily.</h2>
     <div>
     <button className='m-5 border p-3 bg-[#E4AEA8] hover:text-red-500 hover:scale-105 font-semibold' onClick={toall}>
          All Blogs
        </button>
        <button className='m-5 border p-3 bg-[#E4AEA8] hover:text-red-500 hover:scale-105 font-semibold' onClick={( )=>creation("all")}>
          Create Blog
        </button>
     </div>
        <div >
            <img src= {cats} alt='cats' loading='lazy' className=' h-[300px]'></img>
        </div>
      </div>

      {/* all categories */}
        <div className='bg-[#388D80] pb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-2   w-[80%] mx-auto'>
        {data.map((category) => (
          <div key={category.id} className='bg-gray-100 p-4 rounded-md hover:scale-105 transition  hello flex flex-col mt-10    items-center w-[90%] mx-[30px]'>
            <div className=' h-[40px] w-[40px] rounded-full bg-[#388D80]  flex justify-center items-center text-white'>
            {category.icon}
            </div>
            <h3 className='text-xl font-semibold'>{category.title}</h3>
            <p className='text-center'>{category.desc}</p>
            <p  onClick={()=>creation(category.title)} className=' text-blue-500 hover:scale-105 cursor-pointer' >
             
             Browse Posts</p>
          </div>
        ))}
      </div>
        </div>
         
        <div>
            <Footer/>
        </div>
    </div>
  );
};

export default Category;
