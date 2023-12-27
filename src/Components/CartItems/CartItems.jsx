import React, {useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_products, cartItems, removeFromCart,getTotalCartValue} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        {all_products.map((e) => {
  if (cartItems[e.id] > 0) {
    return (
      <div key={e.id}>
        <div className="cartitems-format cartitems-format-main">
          <img src={e.image} alt="" className="carticon-product-icon" />
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
          <p>${e.new_price * cartItems[e.id]}</p>
          <img className='cartitems-remove-icon' src={remove_icon} alt="" onClick={() => { removeFromCart(e.id) }} />
        </div>
        <hr />
      </div>
    );
  } else {
    return null;
  }
})}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>SubTotal</p>
                        <p>${getTotalCartValue()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shopping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartValue()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
                </div>
        </div>
                <div className="cartitems-promocode">
                    <p>If you have promo code , Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
    </div>
  )
}

export default CartItems