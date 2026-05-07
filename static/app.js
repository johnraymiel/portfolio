document.addEventListener("DOMContentLoaded", () => {
  // Load includes
  function loadInclude(id, file) {
    fetch(`../includes/${file}`)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;

        // Attach logout functionality after header loads
        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) {
          logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("role"); // clear fake session
            window.location.href = "../user/logout.html";
          });
        }
      })
      .catch(err => console.error(`Error loading ${file}:`, err));
  }

  if (document.getElementById("header-include")) loadInclude("header-include", "header.html");
  if (document.getElementById("footer-include")) loadInclude("footer-include", "footer.html");
  if (document.getElementById("body-include")) loadInclude("body.html", "body.html");
  if (document.getElementById("sidebar-include")) loadInclude("sidebar-include", "sidebar.html");

  // 🔒 Session protection
  const path = window.location.pathname;
  const role = localStorage.getItem("role");

  if (path.includes("/admin/") && role !== "admin") {
    alert("Access denied. Please log in as Admin.");
    window.location.href = "../login.html";
  }

  if (path.includes("/user/") && role !== "user" && !path.includes("logout.html")) {
    alert("Access denied. Please log in as User.");
    window.location.href = "../login.html";
  }
});
