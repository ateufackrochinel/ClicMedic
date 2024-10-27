import React from 'react';
interface Props {
  paymentMethods?: { provider: string; label: string }[];
}
export const PaymentMethods = ({ paymentMethods }: Props) => {
  return (
    <div>
      {paymentMethods?.map((method) => (
        <label key={method.provider}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.provider === 'cash'}
          />
          <span>{method.label}</span>
        </label>
      ))}
    </div>
  );
};
