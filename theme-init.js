// Set the saved theme before first paint. Controls are managed by controls.js.
try {
  document.documentElement.dataset.theme = localStorage.getItem('nr-workspace-theme') === 'dark' ? 'dark' : 'light';
} catch {
  document.documentElement.dataset.theme = 'light';
}
