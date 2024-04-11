import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div>
      <h1>Please log in</h1>
      <LoginForm />
      <Link to="/register" className={css.link}>
        Registration
      </Link>
    </div>
  );
}
