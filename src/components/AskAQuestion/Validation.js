export function validateEmail(email) {
  const allowedEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return allowedEmail.test(email);
}

export function validatePassword(password) {
  const allowedPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return allowedPassword.test(password);
}
