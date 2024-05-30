'use client';
import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import CartItem from "../CartItem";
import "./style.scss";

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
  };
  
  const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.3,
            staggerDirection: 1
        }
    }
};

export default function Cart({cart, handleAddItemToCart, decreaseQuantity, handleRemoveFromCart, calculateTotal, widthCart, handleClick}:any){

    return (
        <>
            <motion.aside
            className="cart"
            initial={{ width: 0 }}
            animate={{
                width: widthCart,
                transition: { duration: 0.5 }
            }}
            exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.5 }
            }}
            >
                <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
                className="cart--motion">
                    <motion.div variants={itemVariants} className="cart__header">
                        <div className="cart__header--text">Carrinho de compras</div>
                        <div className="cart__header--close" onClick={handleClick}>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="19" cy="19" r="19" fill="black"/>
                                <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white"/>
                            </svg>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="cart__items">
                        {cart?.map((cartItem: any, index: any) => (
                            
                            <CartItem
                                id={cartItem.id} 
                                photo={cartItem.photo} 
                                name={cartItem.name} 
                                price={cartItem.price}
                                quantity={cartItem.quantity}
                                handleAddItemToCart={handleAddItemToCart}
                                decreaseQuantity={decreaseQuantity}
                                handleRemoveFromCart={handleRemoveFromCart}
                                variants={itemVariants}
                                totalPerItem = {cartItem.price * cartItem.quantity}
                            />
                        ))}
                    </motion.div>
                    <motion.div variants={itemVariants} className="cart__footer">
                        <div className="cart__footer--total">
                            <span className="cart__footer--total-text">Total:</span>
                            <span className="cart__footer--total-price">R${calculateTotal()}</span>
                        </div>
                        <div className="cart__footer--button">Finalizar Compra</div>
                    </motion.div>
                </motion.div>
            </motion.aside>
        </>
    );
}