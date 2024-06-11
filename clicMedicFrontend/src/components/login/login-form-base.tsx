import './login.css';
import { Form, FormikProps } from 'formik';
import { InputUI } from '../input';
export type LoginType = {
  email: string;
  password: string;
};
export const LoginFormBase = ({ handleSubmit }: FormikProps<LoginType>) => {
  return (
    <div className="LoginFormBase-container">
      <h2>Login</h2>
      <Form className="LoginFormBase-form" onSubmit={handleSubmit}>
        <InputUI placeholder="email" type="email" name="email" />
        <InputUI placeholder="password" type="password" name="password" />
        <button className="LoginFormBase-btn" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};
