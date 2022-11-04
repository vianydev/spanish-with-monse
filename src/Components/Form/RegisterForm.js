import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import SelectInput from "./SelectInput";
import "./Form.css";

function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    goal: "",
  });

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  // Translations
  const { t } = useTranslation();
  const name = t("form.name");
  const namePlaceholder = t("form.namePlaceholder");
  const addName = t("form.errorName.addName");
  const noNumbers = t("form.errorName.noNumbers");
  const email = t("form.email");
  const emailPlaceholder = t("form.emailPlaceholder");
  const addEmail = t("form.addEmail");
  const addValidEmail = t("form.addValidEmail");
  const password = t("form.password");
  const passwordPlaceholder = t("form.passwordPlaceholder");
  const addPassword = t("form.addPassword");
  const useSixCharacters = t("form.useSixCharacters");
  const oneNumber = t("form.oneNumber");
  const goal = t("form.goal");
  const addGoal = t("form.addGoal");
  const createAccount = t("buttons.createAccount");
  const errorRegister = t("form.errorRegister");

  // Set up Error and Input validation
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    goal: "",
  });

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      const numbers = /[0-9]+/;

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = addName;
          } else if (value.match(numbers)) {
            stateObj[name] = noNumbers;
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = addEmail;
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = addPassword;
          }
          break;

        case "goal":
          if (!value) {
            stateObj[name] = addGoal;
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const validateForm = () => {
    const numbers = /[0-9]/;

    setError((prev) => {
      const stateObj = { ...prev };
      const { username, email, password, goal } = input;

      const validName = () => {
        if (!username) {
          stateObj.username = addName;
        }
      };
      const validEmail = () => {
        if (!email.includes("@") || !email.includes(".")) {
          stateObj.email = addValidEmail;
        }
      };
      const validPassword = () => {
        if (password.length < 6) {
          stateObj.password = useSixCharacters;
        } else if (!password.match(numbers)) {
          stateObj.password = oneNumber;
        }
      };
      const validGoal = () => {
        if (!goal) {
          stateObj.goal = addGoal;
        }
      };
      validName();
      validEmail();
      validPassword();
      validGoal();

      return stateObj;
    });
  };

  const handleRegisterError = () => {
    const errorText = document.getElementById('error-popup');
    errorText.style.display = "flex"; 
  }

  let navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();
    validateForm(e);
    const numbers = /[0-9]+/; //regex
    const { username, email, password, goal } = input;

    if (error.username || !username) {
      return;
    } else if (error.email) {
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      return;
    } else if (error.password) {
      return;
    } else if (password.length < 6 || !password) {
      return;
    } else if (!password.match(numbers)) {
      return;
    } else if (error.goal || !goal) {
      return;
    } else {
      fetch("https://swmonse-server.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          goal: goal,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            navigate("/login");
          } else {
            // console.log(user);
            handleRegisterError();
          }
        });
    }
  };

  return (
    <section>
        <form className="form">
            <Input
                inputTitle={name}
                inputType={"text"}
                inputName={"username"}
                inputPlaceholder={namePlaceholder}
                onChangeInput={onInputChange}
                onBlurHere={validateInput}
                required
            />
            {error.username && <span className="err">{error.username}</span>}

            <Input
                inputTitle={email}
                inputType={"email"}
                inputName={"email"}
                inputPlaceholder={emailPlaceholder}
                onChangeInput={onInputChange}
                onBlurHere={validateInput}
                required
            />
            {error.email && <span className="err">{error.email}</span>}
            <Input
                inputTitle={password}
                inputType={"password"}
                inputName={"password"}
                inputPlaceholder={passwordPlaceholder}
                onChangeInput={onInputChange}
                onBlurHere={validateInput}
                autocomplete={"off"}
                required
            />
            {error.password && <span className="err">{error.password}</span>}
            <SelectInput
                inputTitle={goal}
                inputType={"select"}
                inputName={"goal"}
                onChangeInput={onInputChange}
                onBlurHere={validateInput}
                required
            />
            {error.goal && <span className="err">{error.goal}</span>}

            <div className="form-box btn-register-box">
                <button
                    className="outline-purple"
                    type="submit"
                    name="submit"
                    value="submit"
                    onClick={handleButton}
                >
                    {createAccount}
                </button>
            </div>
        </form>
          <div id='error-popup'><p>{errorRegister}</p></div>
    </section>
    
  );
}

export default RegisterForm;
