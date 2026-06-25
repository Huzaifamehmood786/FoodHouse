import { useState } from "react";
import { useCart } from "../context/CartContext";
import PageTransition from "../components/PageTransition";

export default function Checkout() {
  const { cart, total, increaseQty, decreaseQty } = useCart();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <PageTransition>
      <div className="checkout-container">
        <div className="checkout-box">
          <h2>💳 Secure Payment</h2>

          {/* ORDER SUMMARY */}
          <div className="summary">
            <h3>Order Summary</h3>

            {cart.map((item) => (
              <div key={item.id} className="row">
                <span>{item.name}</span>

                {/* QUANTITY BUTTONS */}
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>➖</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>➕</button>
                </div>

                <span>${item.price * item.qty}</span>
              </div>
            ))}

            <hr />

            <div className="row total">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          {/* PAYMENT FORM */}
          {!success && (
            <div className="card-form">
              <input placeholder="Card Holder Name" />
              <input placeholder="Card Number" />

              <div className="row-inputs">
                <input placeholder="MM/YY" />
                <input placeholder="CVC" />
              </div>

              <button
                className="pay-btn"
                onClick={handlePay}
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay Now 💳"}
              </button>
            </div>
          )}

          {/* SUCCESS */}
          {success && (
            <div className="success">
              <h3>🎉 Payment Successful!</h3>
              <p>Your order has been placed.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}