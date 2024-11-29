import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='Header bg-black p-2 text-gray-300 text-center'>
        SinUp To Get 20% OFF On Your First Order 
      </div>
      <div className="nav">
        <div className="leftside "><ul className='flex gap-10  '>
       <span>LOGO</span>
       <li>Shop</li> 
       <li>Sale</li> 
       <li>Collection</li> 
       <li>Categories</li> 
       </ul>
        </div>
        {/* ri8 side */}
        <div className="RightSide"></div>
      </div>
    </div>
  )
}
