import React, { useState } from 'react'

const Cart = () => {

    const [cart, setCart] = useState([]);

    const productsList = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Headphone", price: 20000 },
        { id: 3, name: "Smartphone", price: 30000 },
        { id: 4, name: "Keyboard", price: 1500 },
    ];

    const addTocart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, qty: 1 }]
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => {
            prevCart.map((item) =>
                item.id === id ? { ...item, qty: item.qty - 1 } : item
            ).filter((item) => item.qty > 0)

        })
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


    return (
        <div className='p-6 max-w-xl mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>🛍️ Shopping Cart</h1>

            {/*Product List*/}
            <h2 className='text-xl mb-2'>Products</h2>
            <ul className='space-y-2'>
                {productsList.map((product) => (
                    <li key={product.id} className='flex justify-between items-center border p-2 rounded'>
                        <span>{product.name} - ₹{product.price}</span>
                        <button
                            className='bg-green-500 text-white px-3 py-1 rounded'
                            onClick={() => addTocart(product)}>
                            Add
                        </button>
                    </li>
                ))}
            </ul>

            {/*Cart Section */}
            <h2 className='text-xl mt-6 mb-2'>Your Cart</h2>
            {cart.length === 0 ? (
                <p className='text-gray-500'>Cart is empty.</p>
            ) : (
                <ul className='space-y-2'>
                    {cart.map((item) => (
                        <li key={item.id} className='flex justify-between items-center border p-2 rounded'>
                            <span>
                                {item.name} (x{item.qty}) - ₹{item.price * item.qty}
                            </span>
                            <div className='space-x-2'>
                                <button
                                    className='bg-red-500 text-white px-3 py-1 rounded'
                                    onClick={() => removeFromCart(item.id)}>
                                    -
                                </button>
                                <button
                                    className='bg-red-500 text-white px-3 py-1 rounded'
                                    onClick={() => addTocart(item)}>
                                    +
                                </button>
                            </div>

                        </li>
                    ))}

                </ul>
            )}
            {/* Total */}
            <div className="mt-4 text-lg font-semibold">
                Total: ₹{total}
            </div>
        </div>
    )
}

export default Cart
