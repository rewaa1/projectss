import React from 'react';
import Product from './product';

const Card2 = () => {
    return (
        <div>
          <div className='border-2 w-60 h-96 shadow-xl'>
                <img src={require('./blackt.png')}></img>
                <p className='mx-2 my-4'>{Product.Names.name2}</p>
                <p className='mx-2 my-4'>{Product.Prices.price2}</p>
                <button className='hover:bg-emerald-500 w-28 mx-2 h-8 rounded-full transition delay-75'>Add to cart</button> 
            </div>  
        </div>
    );
};

export default Card2;