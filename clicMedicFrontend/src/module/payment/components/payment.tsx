import React from 'react';
import { PaymentMethods } from './payment-methods';
interface Props {
  amount: number;
}

export const Payment = ({ amount }: Props) => {
  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods />
      <button>${amount}</button>
    </div>
  );
};
