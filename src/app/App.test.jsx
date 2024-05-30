import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('should add a product to the cart when the COMPRAR button is clicked', () => {
    render(<App />);
    const addToCartButton = screen.getAllByText(/COMPRAR/i)[0];
    fireEvent.click(addToCartButton);
    fireEvent.click(screen.getByText(/1/i));
    expect(screen.getByText(/Iphone 11 128 GB/i)).toBeInTheDocument();
    expect(screen.getByText(/5000.00/i)).toBeInTheDocument();
  });

  it('should increase the product quantity when the increase button is clicked', () => {
    render(<App />);
    const addToCartButton = screen.getAllByText(/COMPRAR/i)[0];
    fireEvent.click(addToCartButton);
    fireEvent.click(screen.getByText(/2/i));
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });

  it('should decrease the product quantity when the decrease button is clicked', () => {
    render(<App />);
    const addToCartButton = screen.getAllByText(/COMPRAR/i)[0];
    fireEvent.click(addToCartButton);
    fireEvent.click(screen.getByText(/3/i));
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);
    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });

  it('should remove the product from the cart when the quantity is decreased to zero', () => {
    render(<App />);
    const addToCartButton = screen.getAllByText(/COMPRAR/i)[0];
    fireEvent.click(addToCartButton);
    fireEvent.click(screen.getByText(/4/i));
    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);
    expect(screen.queryByText(/Iphone 11 128 GB/i)).not.toBeInTheDocument();
  });
});