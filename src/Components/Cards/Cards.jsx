import React from 'react'
import './Card.css'

function Cards(
   { image,
    productName,
    Price,}
) {
    return(
        <div className="productCard">
            <div className="image"><img src={image} alt='Product'/></div>
            <div className="Data">
                <h3>{productName}</h3>
                <h4>₹ {Price} </h4>
                <button className='carts'>Add To Cart</button>
            </div>
        </div>
    )

}
export default Cards;