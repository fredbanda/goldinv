// PaymentForm.tsx

import React from 'react';

const PaymentForm = () => {
    return (
        <div className="container mx-auto">
            <form>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" />
                </div>
                <div>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" />
                </div>
                <div>
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="text" id="expiryDate" name="expiryDate" />
                </div>
                <div>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" />
                </div>
                <div>
                    <label htmlFor="totalPayment">Total Payment</label>
                    <input type="text" id="totalPayment" name="totalPayment" />
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
}

export default PaymentForm;