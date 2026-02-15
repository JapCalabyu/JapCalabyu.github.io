const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  document.body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});
