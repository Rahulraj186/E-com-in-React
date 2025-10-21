import React from 'react'

const Navbar = () => {
  return (
    <div className='p-4 flex justify-between items-center fixed left-10 right-10 top-10 z-10 rounded-md bg-white/20 backdrop-blur-lg shadow-md'>
      <div className='flex  gap-4'>
        <a href="">Home</a>
        <a href="">About</a>
        <input type="text" placeholder='search for names..' className='border border-slate-800 bg-white rounded-2 h-10' />
      </div>
      <div>
        <button>Cart</button>
      </div>



    </div>
  )
}

export default Navbar