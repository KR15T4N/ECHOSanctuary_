function validateForm() {

  // CLEAR ALL
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("birthError").innerHTML = "";
  document.getElementById("sexError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("userError").innerHTML = "";
  document.getElementById("passError").innerHTML = "";
  document.getElementById("confirmError").innerHTML = "";
  document.getElementById("selectError").innerHTML = "";
  document.getElementById("checkError").innerHTML = "";
  document.getElementById("heardError").innerHTML = "";
  document.getElementById("successMessage").innerHTML = "";

  let isValid = true;

  let name = document.getElementById("fullname").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").innerHTML = "Name must be at least 2 characters.";
    isValid = false;
  }

  let email = document.getElementById("email").value;
  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").innerHTML = "Enter a valid email.";
    isValid = false;
  }

  let username = document.getElementById("username").value;
  let pattern = /^[a-zA-Z0-9]+$/;

  if (username.length < 8 || username.length > 20) {
    document.getElementById("userError").innerHTML = "Username must be 8–20 characters.";
    isValid = false;
  } else if (!pattern.test(username)) {
    document.getElementById("userError").innerHTML = "Only letters and numbers allowed.";
    isValid = false;
  }

  let password = document.getElementById("password").value;

  if (password.length < 10) {
    document.getElementById("passError").innerHTML = "At least 10 characters.";
    isValid = false;
  }
  if (!/[A-Z]/.test(password)) {
    document.getElementById("passError").innerHTML += "<br>Need uppercase.";
    isValid = false;
  }
  if (!/[a-z]/.test(password)) {
    document.getElementById("passError").innerHTML += "<br>Need lowercase.";
    isValid = false;
  }
  if (!/[0-9]/.test(password)) {
    document.getElementById("passError").innerHTML += "<br>Need number.";
    isValid = false;
  }

  let confirm = document.getElementById("confirm").value;
  if (password !== confirm) {
    document.getElementById("confirmError").innerHTML = "Passwords do not match.";
    isValid = false;
  }

  let sex = document.getElementsByName("sex");
  let selected = false;
  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) selected = true;
  }
  if (!selected) {
    document.getElementById("sexError").innerHTML = "Select one.";
    isValid = false;
  }

  let checks = document.getElementsByName("struggle");
  let checked = false;
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) checked = true;
  }
  if (!checked) {
    document.getElementById("checkError").innerHTML = "Select at least one.";
    isValid = false;
  }

  let select = document.getElementById("expression").value;
  if (select === "") {
    document.getElementById("selectError").innerHTML = "Choose an option.";
    isValid = false;
  }

  let heard = document.getElementsByName("heard");
  let heardSelected = false;
  for (let i = 0; i < heard.length; i++) {
    if (heard[i].checked) heardSelected = true;
  }
  if (!heardSelected) {
    document.getElementById("heardError").innerHTML = "Select one.";
    isValid = false;
  }

  if (isValid) {
  document.getElementById("successMessage").innerHTML = "Welcome to EchoSanctuary!";

  // redirect after short delay (so user sees message)
  setTimeout(function() {
    window.location.href = "home.html";
  }, 1500);
  }

  return isValid;
}
