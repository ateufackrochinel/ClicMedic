import { useEffect, useState } from 'react';

export type LocalPaymentMethod = {
  provider: string;
  label: string;
};
const localPayment: LocalPaymentMethod[] = [
  { provider: 'cash', label: 'Pay in cash' },
];
export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    []
  );
  useEffect(() => {
    if (localPayment.length > 0) {
      setPaymentMethods(localPayment);
    } else {
      setPaymentMethods([]);
    }
  }, []);
  return {
    paymentMethods,
  };
};
