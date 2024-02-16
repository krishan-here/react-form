import logo from "../donation.png";
import { useInput } from "../hooks/useInput.js";
import {
  isEmailInvalid,
  isEmpty,
  isNumberLessThanOther,
} from "../utils/validation.js";
import Input from "./Input.jsx";

function Form() {
  const {
    value: enteredEmail,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isEmpty(value) && isEmailInvalid(value));

  const {
    value: enteredName,
    handleInputBlur: handleNameBlur,
    handleInputChange: handleNameChange,
    hasError: nameHasError,
  } = useInput("", isEmpty);

  const {
    value: enteredAmout,
    handleInputBlur: handleAmountBlur,
    handleInputChange: handleAmountChange,
    hasError: amountHasError,
  } = useInput(
    "",
    (value) => isEmpty(value) && isNumberLessThanOther(value, 1000)
  );

  function handleFormSubmit(event) {
    event.preventDefault();
    // const fd = new FormData(event.target);
    // const data = Object.fromEntries(fd.entries());
    if (emailHasError || amountHasError || nameHasError) {
      return;
    }

    console.log(enteredName, enteredEmail, enteredAmout);
    console.log(emailHasError, nameHasError, amountHasError);
    console.log("Sending data...");
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
          value={enteredName}
          onBlur={handleNameBlur}
          onChange={(e) => handleNameChange(e.target.value)}
          error={nameHasError && "Please enter name."}
        />

        <Input
          label="Email"
          id="email"
          type="text"
          name="email"
          value={enteredEmail}
          onBlur={handleEmailBlur}
          onChange={(e) => handleEmailChange(e.target.value)}
          error={emailHasError && "Please enter valid email address."}
        />

        <Input
          label="How much would you like to donate?"
          type="text"
          id="amount"
          name="amount"
          value={enteredAmout}
          onBlur={handleAmountBlur}
          onChange={(e) => handleAmountChange(e.target.value)}
          error={amountHasError && "Minimum donation should be 1000$"}
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
