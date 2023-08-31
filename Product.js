import React from 'react'
import"./Product.css";
import { useStateValue } from './StateProvider';

function formatPriceWithThousandSeparators(price) {
  return price.toLocaleString('en-IN');
}
function Product({ id,title,image,secondimage,bprice,price,rating}) {
  const [{ basket }, dispatch] =useStateValue();

  const formattedPrice = price.toLocaleString('en-IN');
  const addToBasket = () => {
    //dispatch the items into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
         id: id,
         title:title,
         image:image,
         secondimage:secondimage,
         bprice:bprice,
         price:price,
         rating:rating,
      }
    })
  }
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <div className="product__bprice">
              <p>{bprice}</p> 
            </div>
            <p className="product__price">
              
                <strong>₹{formattedPrice}</strong>
            </p>
            <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        </div>
        <img className="fimg" src={image}
        />
        <img className="simage" src={secondimage}
        />
        <button  onClick={addToBasket}>Add To Cart</button>
    </div>
  )
}

export default Product