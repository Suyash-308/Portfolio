
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("dark-mode");

  // Change icon
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
};

// ===============================
// DISPLAY PROJECTS
// ===============================
function displayProjects() {
  const projects = document.getElementById("projects-div");
  const skills = document.getElementById("skills-div");

  projects.style.display = "grid";
  skills.style.display = "none";

  projects.classList.add("fade-in");
  skills.classList.remove("fade-in");
}

// ===============================
// DISPLAY SKILLS
// ===============================
function displaySkills() {
  const projects = document.getElementById("projects-div");
  const skills = document.getElementById("skills-div");

  projects.style.display = "none";
  skills.style.display = "block";

  skills.classList.add("fade-in");
  projects.classList.remove("fade-in");
}

// ===============================
// FADE ANIMATION
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    .fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
});
