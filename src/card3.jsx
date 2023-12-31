import React from 'react';
import Product from './product';

const Card3 = () => {
    return (
        <div>
          <div className='border-2 w-60 h-96 shadow-xl'>
                <img src={require('./blackt.png')}></img>
                <p className='mx-2 my-4'>{Product.Names.name3}</p>
                <p className='mx-2 my-4'>{Product.Prices.price3}</p>
                <button className='hover:bg-emerald-500 w-24 mx-2 h-8 rounded-full transition delay-75 '>Add to cart</button>
            </div>  
        </div>
    );
};

export default Card3;