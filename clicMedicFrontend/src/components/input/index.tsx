import './input.css';
import React from 'react';
import { ErrorMessage, Field, FieldAttributes } from 'formik';
interface Props {
  name: string;
  type: string;
  placeholder?: string;
}
export const InputUI = ({
  name,
  type,
  placeholder,
  ...rest
}: FieldAttributes<Props>) => {
  return (
    <>
      <Field
        {...rest}
        className="InputUI-field"
        placeholder={placeholder}
        type={type}
        name={name}
      />
      <ErrorMessage name={name} component="div" />
    </>
  );
};
