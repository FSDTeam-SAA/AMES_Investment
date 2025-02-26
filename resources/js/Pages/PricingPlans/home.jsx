import { useState } from 'react';

const CheckoutButton = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await fetch('/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            window.location.href = 'https://billing.stripe.com/p/session/test_YWNjdF8xR3kxaUZBbHF2S3B4SkN1LF9ScHpQMlcxMk41bGQ0RDV3MmtpWnlJN3J5dHYycVcy0100N3pOY8bK'; // Redirect to Stripe Checkout
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleCheckout} disabled={loading}>
            {loading ? 'Redirecting...' : 'Checkout'}
        </button>
    );
};

export default CheckoutButton;
