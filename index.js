const toggleBtn = document.getElementById("toggleDark");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});