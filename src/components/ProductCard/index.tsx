'use client';

import Image from "next/image";
import "./style.scss";

export default function ProductCard({id, photo, name, price, description, handleAddItemToCart}: any){
    return (
        <div className="productCard" key={id}>
            <div className="productCard__image">
                <Image src={photo} alt={name} width={150} height={150} priority></Image>
            </div>
            <div className="productCard__info">
                <div className="productCard__info--name">{name}</div>
                <div className="productCard__info--price">R${price}</div>
            </div>
            <div className="productCard__description">{description}</div>
            <div className="productCard__footer" onClick={ ()=> handleAddItemToCart(id, photo, name, price) }>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path opacity="0.737212" d="M1 4.375H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                &nbsp; COMPRAR
            </div>
        </div>
    );
}