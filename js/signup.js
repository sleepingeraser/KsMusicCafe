document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  alert(`Thank you, ${name}! Your account with ${email} has been created.`);
});
