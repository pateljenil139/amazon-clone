// CheckoutProduct.js

import React, { useEffect } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { db } from './firebase'; // Import your Firebase configuration

function formatPriceWithThousandSeparators(price) {
    return price.toLocaleString('en-IN');
}

function CheckoutProduct({ id, image, secondimage, title, price, rating, bprice, hideButton, user }) {
    const [{ basket }, dispatch] = useStateValue();
    const formattedPrice = formatPriceWithThousandSeparators(price);

    useEffect(() => {
        // Update the user's cart in Firebase Firestore whenever the basket changes
        if (user) {
            db.collection('users').doc(user.uid).collection('cart').doc(id).set({
                image,
                secondimage,
                title,
                price,
                rating,
                bprice,
            });
        }
    }, [basket, id, user]);

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });

        // If user is authenticated, also remove the item from Firestore
        if (user) {
            db.collection('users').doc(user.uid).collection('cart').doc(id).delete();
        }
    };

    return (
        <div className='checkoutProduct'>
            {image ? (
                <img className='checkoutProduct__image' src={image} alt={title} />
            ) : (
                secondimage && !image && (
                    <img className='checkoutProduct__image' src={secondimage} alt={title} />
                )
            )}

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{formattedPrice}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    );
}

export default CheckoutProduct;
