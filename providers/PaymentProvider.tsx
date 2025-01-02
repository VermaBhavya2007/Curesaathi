'use client';

import { createContext, useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

interface PaymentContextType {
  initiatePayment: (amount: number) => Promise<void>;
  isProcessing: boolean;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const initiatePayment = async (amount: number) => {
    setIsProcessing(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Create payment intent via API
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret);
      if (result.error) throw result.error;

    } catch (error) {
      console.error('Payment failed:', error);
      throw error;
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <PaymentContext.Provider value={{ initiatePayment, isProcessing }}>
      {children}
    </PaymentContext.Provider>
  );
}

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) throw new Error('usePayment must be used within PaymentProvider');
  return context;
};