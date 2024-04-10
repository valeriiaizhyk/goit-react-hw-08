import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispath = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispath(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
