function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isLoggedIn", true);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials. Try admin/admin");
    }
  }
  