import React from 'react'
import "./Subtotal.css"
import CurrencyFormate from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { Link, useNavigate } from "react-router-dom";


function Subtotal() {
  const [{basket},dispatch]= useStateValue();
  const Navigate = useNavigate();
  return (
    <div className="subtotal">

      <CurrencyFormate
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order Contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e =>Navigate('/Payment') } className="checkout__button">Proceed to checkout</button>
    </div>
  );
}

export default Subtotal
