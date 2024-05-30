'use client';

import Skeleton from 'react-loading-skeleton'

import ProductCard from '../ProductCard';

import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import "./style.scss";

export default function Products({products, error, isLoading, handleAddItemToCart}: any){
    if (isLoading) {
        return  <div className="products">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div className="products__item" key={i}>
                            <div className="products__item--image">
                                    <Skeleton height={138} width={111} />
                            </div>
                            <div className="products__item--info">
                                <div className="products__item--info__name"><Skeleton height={15} width={125} /><Skeleton height={15} width={125} /></div>
                                &nbsp;&nbsp; <Skeleton height={25} width={50} />
                            </div>
                            <div className="products__item--description"><Skeleton height={10} width={170} /><Skeleton height={10} width={150} /></div>
                        </div>
                    ))}
                </div>
    }

    if (error) {
        return <div>An error occurred</div>;
    }

    return (
        <div className="products">
            {products?.map((product: any, index: any) => (
                <ProductCard 
                    id={product.id} 
                    photo={product.photo} 
                    name={product.name} 
                    price={product.price} 
                    description={product.description} 
                    handleAddItemToCart={handleAddItemToCart}
                />
            
            ))}
        </div>
    );
}