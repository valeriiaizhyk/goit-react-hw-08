import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispath = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispath(logIn(values));
    actions.resetForm();
  };

  return (
    <div className={css.div}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field} />
          </label>
          <div className={css.wrapBtn}>
            <button type="submit" className={css.btn}>
              Log In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
