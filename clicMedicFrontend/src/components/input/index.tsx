import './input.css';
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
    <div className="InputUI-wrapper">
      {labelname !== undefined && (
        <label className="InputUI-label" htmlFor={name}>
          {labelname}
        </label>
      )}
      <Field
        {...rest}
        id={name}
        className="InputUI-field"
        placeholder={placeholder}
        type={type}
        name={name}
      />
      <ErrorMessage name={name} component="div" className="errorMsg" />
    </div>
  );
};
