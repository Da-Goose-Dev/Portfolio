const form = document.getElementById("contact-form");
const forename = document.getElementById("user-forename");
const surname = document.getElementById("user-surname");
const email = document.getElementById("user-email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inptControl = element.parentElement;
  const errorDisplay = inptControl.querySelector(".error");

  errorDisplay.innerText = message;
  inptControl.classList.add("error");
  inptControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inptControl = element.parentElement;
  const errorDisplay = inptControl.querySelector(".error");

  errorDisplay.innerText = "";
  inptControl.classList.add("success");
  inptControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(string(email).toLowerCase());
};

const validateInputs = () => {
  //removes all whitespace from the value of the elements
  const fnameValue = forename.value.trim();
  const snameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const msgValue = message.value.trim();

  //validates the first name field and makes sure it has a value before allowing the form to submit
  if (fnameValue === "") {
    setError(forename, "*First name is required");
  } else {
    setSuccess(forename);
  }

  //validates the surname field and makes sure it has a value before allowing the form to submit
  if (snameValue === "") {
    setError(surname, "*Surname is required");
  } else {
    setSuccess(surname);
  }

  //validates the email field and makes sure it has a value before allowing the form to submit
  //and also checks against a RegEx to ensure it is a valid email address
  if (emailValue === "") {
    setError(email, "*Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "*Provide a valid email address");
  } else {
    setSuccess(email);
  }
  //validates the message field and makes sure it has a value before allowing the form to submit
  if (msgValue === "") {
    setError(message, "A message is required");
  } else {
    setSuccess(message);
  }
};
