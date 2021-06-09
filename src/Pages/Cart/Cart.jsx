import React from 'react'
import './Cart.css'
import {AiFillDelete} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';

function Cart() {
    let bikeImage = "https://favbikes.netlify.app/static/media/2.4beaf17c.webp ";
    const SubTotal = 500000;
    const delivery = 20000;
    const payable = SubTotal+delivery ;
    return (
        <div className="checkout">
            <h1>Shoping Cart</h1>
            <div className="cart-container">
                <div className="productsInCart">
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                <div className="productadded"><img src={bikeImage} alt="" /> <h3 className="ProductNameInCart">YAMAHA MT15</h3> <h4 className="priceofproductIncart"> ₹ 1,65,000</h4> <button className="deleteButton"><AiFillDelete/></button> </div>
                </div>
                <div className="amountPayable">
                    <h1>Total</h1>
                        <div className="total">
                            <div className="payable"><h3>Sub total </h3><h3>₹ {SubTotal}</h3></div>
                            <div className="payable"><h3>Delivery </h3> ₹ {delivery}</div>
                            <div className="payable"><h3>Total </h3> ₹ {payable}</div>
                        </div>
                        <button className="payButoon">Proceed to Pay</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
