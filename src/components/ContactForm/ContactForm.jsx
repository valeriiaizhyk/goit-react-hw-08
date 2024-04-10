import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";
import { toast } from "react-toastify";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short user name!")
    .max(50, "User name too long!")
    .required("This is required!"),
  number: Yup.string()
    .min(3, "Too short user number!")
    .max(50, "User number too long!")
    .required("This is required!"),
});

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const selectContact = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    if (selectContact.find((contact) => contact.number === values.number)) {
      actions.resetForm();
      return toast(`This number ${values.number} is already exist`);
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.box}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name:
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.box}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number:
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
