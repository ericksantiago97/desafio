import Header from "@/components/Header";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import axios from 'axios';
import { useQuery } from "react-query";
import { useState } from "react";
import { it } from "node:test";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  photo: string;
  description: string;
}

const fetchProducts = async (): Promise<Product[]> => {
const { data } = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
  return data.products;
};

export default function AppContent() {
  const { data, error, isLoading } = useQuery<Product[]>('products', fetchProducts);
  const [ cart, setCart ] = useState<any>([])
  
  function handleAddItemToCart(id: number, photo: string, name: string, price: number){
    let quantity: number = 0
    const newCartItem = {id, photo, name, price, quantity}
    
    setCart((prevCart: any[]) => {
      const existingCartItem = prevCart.find(item => item.id === newCartItem.id);

      if (existingCartItem) {
        return prevCart.map(item =>
          item.id === newCartItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...newCartItem, quantity: 1 }];
      }
    })
  }

  function decreaseQuantity(itemId: number) {
    setCart((prevCart: any[]) => {
      const updatedCart = prevCart.map(product =>
        product.id === itemId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ).filter(product => product.quantity > 0);
      
      return updatedCart;
    });
  };

  function handleRemoveFromCart(itemId: number){
    const filteredCart = cart.filter( 
      ((cartItem: { id: number; }) => cartItem.id !== itemId)
    )
    setCart(filteredCart)
  }

  const calculateTotal = () => {
    return cart.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0);
  };

  
  return (
    <>
      <Header 
        cart={cart} 
        handleAddItemToCart={handleAddItemToCart} 
        decreaseQuantity={decreaseQuantity} 
        handleRemoveFromCart={handleRemoveFromCart} 
        calculateTotal={calculateTotal} 
      />
      <Products 
        products={data} 
        isLoading={isLoading} 
        error={error} 
        handleAddItemToCart={handleAddItemToCart} 
      />
      <Footer />
    </>
  );
}