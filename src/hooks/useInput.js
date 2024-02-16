import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [hasEdit, setHasEdit] = useState(false);

  const isInValid = validationFn && validationFn(enteredValue);

  function handleInputBlur() {
    setHasEdit(true);
  }

  function handleInputChange(value) {
    setEnteredValue(value);
    setHasEdit(false);
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: hasEdit && isInValid,
  };
}
