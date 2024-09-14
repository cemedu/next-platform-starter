import Script from 'next/script';

function PayImport() {
    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />
        </>
    );
}

export default PayImport;