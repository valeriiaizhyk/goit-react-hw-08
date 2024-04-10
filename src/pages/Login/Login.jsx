import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <h1>Please log in</h1>
      <LoginForm />
      <Link to="/register">Registration</Link>
    </div>
  );
}
