// --- Local Signup System ---

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("new-username").value.trim();
  const password = document.getElementById("new-password").value.trim();
  const role = document.getElementById("new-role").value.trim();
  const message = document.getElementById("signup-message");

  if (!username || !password || !role) {
    message.style.color = "red";
    message.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  // Retrieve existing users (if any)
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if username already exists
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    message.style.color = "red";
    message.textContent = "❌ Username already exists. Please choose another.";
    return;
  }

  // Add the new user
  users.push({ username, password, role });
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.textContent = "✅ Signup successful! Redirecting to login...";

  // Redirect to login page
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
