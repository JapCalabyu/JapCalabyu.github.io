const toggle = document.getElementById('theme-toggle');

if (toggle) {
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved or system theme on load
  const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
  document.body.setAttribute('data-theme', initialTheme);

  toggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}
