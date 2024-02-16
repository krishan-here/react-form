import { useState } from "react";
import logo from "../donation.png";
import Input from "./Input.jsx";

function Form() {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const [hasEdit, setHasEdit] = useState({
    name: false,
    email: false,
    amount: false,
  });

  const emailIsInvalid = hasEdit.email && !enteredValues.email.includes("@");
  const amountIsInvalid = hasEdit.amount && Number(enteredValues.amount) < 1000;

  function handleInputBlur(identifier) {
    setHasEdit((prevValues) => {
      return {
        ...prevValues,
        [identifier]: true,
      };
    });
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((currentEnteredValues) => {
      return {
        ...currentEnteredValues,
        [identifier]: value,
      };
    });

    setHasEdit((prevValues) => {
      return {
        ...prevValues,
        [identifier]: false,
      };
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // const fd = new FormData(event.target);
    // const data = Object.fromEntries(fd.entries());
    if (emailIsInvalid && amountIsInvalid) {
      return;
    }
    console.log(enteredValues);
  }

  return (
    <div className="form-container">
      <header className="form-header">
        <img src={logo} alt="donation logo" />
        <h1 className="poppins-light">Donation Form</h1>
        <h2 className="poppins-extralight">
          Thanks for donating to our cause.
        </h2>
      </header>

      <form onSubmit={handleFormSubmit}>
        <Input
          label="Name"
          id="name"
          type="text"
          name="name"
          value={enteredValues.name}
          onBlur={() => handleInputBlur("name")}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />

        <Input
          label="Email"
          id="email"
          type="text"
          name="email"
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange("email", e.target.value)}
          error={emailIsInvalid && "Please enter valid email address."}
        />

        <Input
          label="How much would you like to donate?"
          type="text"
          id="amount"
          name="amount"
          value={enteredValues.amount}
          onBlur={() => handleInputBlur("amount")}
          onChange={(e) => handleInputChange("amount", e.target.value)}
          error={amountIsInvalid && "Minimum donation should be 1000$"}
        />

        <div className="input-checkbox">
          <input type="checkbox" />
          <label htmlFor="">
            I agree to make a donation, and proceed to pay.
          </label>
        </div>

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
}

export default Form;
