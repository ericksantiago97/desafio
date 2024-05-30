'use client';

import AddCartButton from "../AddCartButton";
import "./style.scss";

export default function Header({cart, handleAddItemToCart, decreaseQuantity, handleRemoveFromCart, calculateTotal}:any){
    return (
        <div className="header">
            <p className="header__title"><span className="header__title__bold">MKS</span> Sistemas</p>
            <AddCartButton 
                cart={cart} 
                handleAddItemToCart={handleAddItemToCart} 
                decreaseQuantity={decreaseQuantity} 
                handleRemoveFromCart={handleRemoveFromCart} 
                calculateTotal={calculateTotal} 
            />
        </div>
    );
}