import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <div className={css.div}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className={css.form}>
          <label className={css.label}>
            Username
            <Field type="text" name="name" className={css.field} />
          </label>
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
              Register
            </button>
          </div>
        </Form>
      </Formik>
      <Link to="/login" className={css.link}>
        Log in
      </Link>
    </div>
  );
}
