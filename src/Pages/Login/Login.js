import { Link } from "react-router-dom";
import LoginForm from "../../Components/Form/LoginForm";

function Login({ loadUser, setIsLog, t }) {
  return (
    <section id="login">
      <div id="form" className="login">
        <h1>¡Hola!</h1>
        <h3>{t("login.title")}</h3>

        <LoginForm loadUser={loadUser} setIsLog={setIsLog} />

        <div className="login-link">
          <div style={{ display: "none" }}>
            <a href="#nav" onClick={() => console.log()}>
              {t("login.forgotPassword")}
            </a>
          </div>
          <div>
            {t("login.haveAccount")}
            <Link className="link-purple" to="/register">
              {t("buttons.register")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
