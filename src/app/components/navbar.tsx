import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='sm:flex flex-col md:flex xl:flex flex-row'>
      <div className='Header bg-black p-2 text-gray-300 text-center'>
        SignUp To Get 20% OFF On Your First Order 
      </div>
      <div className="nav bg-slate-600 sm:bg-blue-300 lg:bg-green-300 xl:bg-red md:first-letter:bg-slate-500">
        <div className="leftside ">
        <ul className='flex gap-[500px] f'>

         <li className='m-10 text-3xl font-extrabold shadow-xl '>LOGO</li>
       <span className='flex mt-10 font-semibold gap-28 text-2xl'>
       <li>Shop</li> 
       <li>Sale</li> 
       <li>Collection</li> 
       <li>Categories</li> 
       </span>
       </ul>
        </div>

        {/* ri8 side */}
        <div className="RightSide"></div>
      </div>
    </div>
    </div>
  )

}
