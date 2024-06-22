import { InputUI } from '../../../../components/input';
import { LoginType } from '../../types';
import './login.css';
import { Field, Form, FormikProps } from 'formik';

export const LoginFormBase = ({ handleSubmit }: FormikProps<LoginType>) => {
  return (
    <div className="LoginFormBase-container">
      <h2>Login</h2>
      <Form className="LoginFormBase-form" onSubmit={handleSubmit}>
        <InputUI
          labelname="Identifiant"
          placeholder="Numéro d'assurance maladie  ou Numéro d'employé"
          type="text"
          name="identifiant"
        />
        <InputUI placeholder="password" type="password" name="mdp" />
        <div
          role="group"
          aria-labelledby="my-radio-group"
          className="Login-checkBoxContainer"
        >
          <div>
            <Field type="radio" name="userType" value="patient" />
            <label>Patient</label>
          </div>
          <div>
            <Field type="radio" name="userType" value="medecin" />
            <label>Medecin</label>
          </div>
        </div>
        <button className="LoginFormBase-btn" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};
