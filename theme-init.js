(() => {
  let theme = 'light';
  try { if (localStorage.getItem('nr-workspace-theme') === 'dark') theme = 'dark'; } catch {}
  document.documentElement.dataset.theme = theme;
})();
