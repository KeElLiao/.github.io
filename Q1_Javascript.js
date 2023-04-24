function validateForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (username === "" || !/^[a-zA-Z0-9]+$/.test(username)) {
    console.log("Form submission failed: Invalid username");
    return false;
  }

  if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.log("Form submission failed: Invalid email");
    return false;
  }

  if (password === "" || password.length < 8) {
    console.log("Form submission failed: Invalid password");
    return false;
  }

  console.log("Form submitted successfully");
  return true;
}