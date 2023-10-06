import React from 'react';

const Nav = () => {
    return (
        <div className='font-mono text-lg font-semibold bg-gray-700 h-14 px-6 flex flex-nowrap items-center place-content-between ' >
            <div className=' rounded w-16 h-8 text-center text-white text-xl hover:bg-emerald-500'>Home</div>
            <div className='flex space-x-4  w-auto '>
                <div className='rounded w-32 h-8 text-center hover:bg-emerald-500  text-white'>About us</div>
                <div className='rounded w-28 h-8 text-center hover:bg-emerald-500 text-white'>Cart</div>
                <div className='rounded w-32 h-8 text-center  hover:bg-emerald-500 text-white'>Contact us</div>
            </div>
            
        </div>
    );
};

export default Nav;