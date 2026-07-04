function setThemeColor(isDark) {
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  themeMeta.setAttribute(
    "content",
    isDark ? "#000000" : "#ffffff"
  );
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

setThemeColor(prefersDark);

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    setThemeColor(e.matches);
  });