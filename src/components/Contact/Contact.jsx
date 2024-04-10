import css from "./Contact.module.css";
import { BiSolidGroup } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleContactDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div className={css.box}>
        <p className={css.text}>
          <BiSolidGroup className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <BiPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleContactDelete}>
        Delete
      </button>
    </div>
  );
};
