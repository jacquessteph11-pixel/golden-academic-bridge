// --- Role-Based Local Login System ---

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("login-message");

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Match credentials
  const foundUser = users.find(user => user.username === username && user.password === password);

  if (foundUser) {
    // Save the logged-in user
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

    message.style.color = "green";
    message.textContent = "✅ Login successful! Redirecting...";

    setTimeout(() => {
      // Redirect based on role
      if (foundUser.role === "student") {
        window.location.href = "student_dashboard.html";
      } else if (foundUser.role === "teacher") {
        window.location.href = "teacher_dashboard.html";
      } else if (foundUser.role === "admin") {
        window.location.href = "admin_dashboard.html";
      } else {
        window.location.href = "dashboard.html";
      }
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "❌ Invalid username or password. Try again.";
  }
});
