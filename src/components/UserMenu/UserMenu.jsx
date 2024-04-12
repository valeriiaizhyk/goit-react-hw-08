import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.div}>
      <p className={css.text}>Welcome, {user.name} </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}
