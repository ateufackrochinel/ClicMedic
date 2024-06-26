import './input.css';
import React from 'react';
import { ErrorMessage, Field, FieldAttributes } from 'formik';
interface Props {
  name: string;
  type: string;
  placeholder?: string;
  labelname?: string;
}
export const InputUI = ({
  name,
  type,
  placeholder,
  labelname,

  ...rest
}: FieldAttributes<Props>) => {
  return (
    <>
      {labelname !== undefined && <label>{labelname}</label>}
      <Field
        {...rest}
        className="InputUI-field"
        placeholder={placeholder}
        type={type}
        name={name}
      />
      <ErrorMessage name={name} component="div" className="errorMsg" />
    </>
  );
};
