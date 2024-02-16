import { useState } from "react";
import logo from "../donation.png";

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
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={enteredValues.name}
            onBlur={() => handleInputBlur("name")}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={enteredValues.email}
            onBlur={() => handleInputBlur("email")}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {emailIsInvalid && (
            <p className="error-text">Please enter valid email address.</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="amount">How much would you like to donate?</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={enteredValues.amount}
            onBlur={() => handleInputBlur("amount")}
            onChange={(e) => handleInputChange("amount", e.target.value)}
          />
          {amountIsInvalid && (
            <p className="error-text">Minimum donation should be 1000$</p>
          )}
        </div>

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
