const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const theme = document.body.getAttribute("data-theme");
  document.body.setAttribute(
    "data-theme",
    theme === "dark" ? "light" : "dark"
  );
});
