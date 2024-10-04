'use client'

import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const { Button } = require("../button")

function AddToCartButton({productItem}){
 

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart); // Assuming your cart is stored in Redux state
  
    // Add to cart function
    function handleAddToCart() {
      dispatch(addToCart(productItem)); // Only dispatch once with the product item
    }
  
    // Remove from cart function
    function handleRemoveFromCart() {
      dispatch(removeFromCart(productItem?.id)); // Remove by product ID
    }


    return (
        <div className="mt-8 max-w-md">
     <Button
        type="button"
        onClick={() =>
          cart?.cartItems.some(item => item.id === productItem.id)
            ? handleRemoveFromCart()
            : handleAddToCart()
        }
      >
        {cart?.cartItems.some(item => item.id === productItem.id)
          ? "Remove from cart"
          : "Add to cart"}
      </Button>


        </div>
    )
}

export default AddToCartButton;