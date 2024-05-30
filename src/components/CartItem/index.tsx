'use client';

import { motion } from "framer-motion";

import Image from "next/image";
import "./style.scss";


export default function CartItem({id, photo, name, price, quantity, handleAddItemToCart, decreaseQuantity, handleRemoveFromCart, variants, totalPerItem}: any){


    return (
        <>
            <motion.div className="item" key={id} variants={variants}>
                {window.innerWidth > 768 ? 
                    <svg onClick={ ()=> handleRemoveFromCart(id) } className="item__close" width="18" height="18" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="19" fill="black" /><path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" /></svg>
                    :
                    <span onClick={ ()=> handleRemoveFromCart(id) } className="item__close">X</span>
                }
                <div className="item__info">
                    <div className="item__info--image">
                        <Image src={photo} alt={name} width={0} height={0} style={{ width: 'auto', height: '100%' }} priority></Image>
                    </div>
                    <div className="item__info--title">{name}</div>
                    <div className="item__info--quantity">
                        <div className="item__info--quantity-text">Qtd:</div>
                        <div className="item__info--quantity-buttons">
                            <div className="item__info--quantity-buttons__minus" onClick={ ()=> decreaseQuantity(id) }>-</div>
                            <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0V11.5" stroke="#BFBFBF" strokeWidth="0.2"/></svg>
                            <div className="item__info--quantity-buttons__text">{quantity}</div>
                            <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0V11.5" stroke="#BFBFBF" strokeWidth="0.2"/></svg>
                            <div className="item__info--quantity-buttons__plus" onClick={ ()=> handleAddItemToCart(id, photo, name, price) }>+</div>
                        </div>
                        <div className="item__info--priceMob">R$ {totalPerItem}</div>
                    </div>
                    <div className="item__info--priceDesk">R$ {totalPerItem}</div>
                </div>
            </motion.div>
        </>
    );
}