import React from 'react';


const Card = () => {
    return (
        <div> 
            <div className='border-2 w-60 h-96 shadow-xl'>
                 <img src={require('./blackt.png')}></img>
                 <p className='mx-2 my-4'>Card 1</p>
                 <p className='mx-2 my-4'>Info</p>
                 <button className='hover:bg-blue-500 w-28 mx-2 h-9 rounded-full transition delay-75'>Add to cart</button>
            </div>   
        </div>
    );
};

export default Card;