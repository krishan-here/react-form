export function isEmailInvalid(email) {
  return !email.includes("@");
}

export function isNumberLessThanOther(number, otherNumber) {
  return Number(number) < Number(otherNumber);
}

export function isEmpty(value) {
  return value === "";
}
