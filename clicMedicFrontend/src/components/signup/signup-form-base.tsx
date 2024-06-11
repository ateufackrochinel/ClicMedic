import './signup.css';
import { Form, FormikProps } from 'formik';
import { InputUI } from '../input';
export type SignUpType = {
  lastName: string;
  firstName: string;
  gender: string;
  email: string;
  socialHealthNumber: string;
};
export const SignUpFormBase = ({ handleSubmit }: FormikProps<SignUpType>) => {
  return (
    <div className="RegisterFormBase-container">
      <h2>Sign Up</h2>
      <Form className="RegisterFormBase-form" onSubmit={handleSubmit}>
        <InputUI placeholder="firstName" type="text" name="firstName" />
        <InputUI placeholder="lastName" type="text" name="lastName" />
        <InputUI placeholder="email" type="email" name="email" />
        <InputUI placeholder="gender" type="text" name="gender" />
        <InputUI
          placeholder="Social health number"
          type="text"
          name="socialHealthNumber"
        />
        <button className="RegisterFormBase-btn" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};
