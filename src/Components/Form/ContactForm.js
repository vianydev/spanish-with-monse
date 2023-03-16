import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import SelectInput from "./SelectInput";
import "./Form.css";

function ContactForm() {
  const [ input, setInput ] = useState({
    username: "",
    email: "",
    selectGoal: "",
  });

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [ name ]: value,
    }));
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
  // const addValidEmail = t("form.addValidEmail");
  const goal = t("form.goal");
  const addGoal = t("form.addGoal");
  const bookYourClass = t("buttons.bookYourClass");
  const errorRegister = t("form.errorRegister");

  // Set up Error and Input validation
  const [ error, setError ] = useState({
    username: "",
    email: "",
    selectGoal: "",
  });

  const validateInput = (e) => {
    let { name, value } = e.target;

    setError((prev) => {
      const stateObj = { ...prev, [ name ]: "" };
      const numbers = /[0-9]+/;

      switch (name) {
        case "username":
          if (!value) {
            stateObj[ name ] = addName;
          } else if (value.match(numbers)) {
            stateObj[ name ] = noNumbers;
          }
          break;

        case "email":
          if (!value || !value.includes("@") || !value.includes(".")) {
            stateObj[ name ] = addEmail;
          }
          break;

        case "selectGoal":
          if (value.includes("select")) {
            stateObj[ name ] = addGoal;
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleRegisterError = () => {
    const errorText = document.getElementById('error-popup');
    errorText.style.display = "flex";
  }

  const [ serverState, setServerState ] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  let navigate = useNavigate();

  const handleButton = (e) => { 
    e.preventDefault();
    const form = e.target;
    let { username, email, selectGoal } = input;
    
    if (username !== "" && email !== "" && selectGoal !== "" && selectGoal !== "select") {    
      setServerState({ submitting: true });
      fetch("https://formspree.io/f/xgebzrop", {
        method: "POST",
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {   
            handleServerResponse(true, "Thanks for joining! I'll send you more information about your free lesson soon!", form);
            navigate("/SignOut");
          } else {
            console.log('error aqui mero')
            console.log(data.errors[ 0 ].message)
            handleServerResponse(false, data.errors[ 0 ].message, form);
          }
        })
        .catch(e => {
          console.log(e)
          handleServerResponse(false, 'error', form);
        });
    } else if (username.includes("") || email.includes("") || selectGoal.includes("") || selectGoal.includes("select")) {
      handleRegisterError();
    }
  };

  return (
    <section>
      <form className="form"
        onSubmit={handleButton}
      >
        <Input
          id={name}
          inputTitle={name}
          inputType={"name"}
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
        />
        {error.email && <span className="err">{error.email}</span>}
        
        <SelectInput
          inputTitle={goal}
          inputType={"select"}
          inputName={"selectGoal"}
          onChangeInput={onInputChange}
          onBlurHere={validateInput}
          required
        />
        {error.selectGoal && <span className="err">{error.selectGoal}</span>}
        <div className="form-box btn-register-box">
          <button
            className="outline-purple"
            type="submit"
            name="submit"
            value="submit"
            disabled={serverState.submitting}
          >
            {bookYourClass}
          </button>
        </div>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
      <div id='error-popup'><p>{errorRegister}</p></div>
    </section>

  );
}

export default ContactForm;




