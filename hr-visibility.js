// Change this query if you prefer aspect ratio logic, e.g. '(max-aspect-ratio: 3/4)'
const mediaQuery = window.matchMedia('(max-width: 768px)');

function applyHRVisibility() {
  const hr = document.getElementById('mobile-hr');
  if (!hr) return;
  hr.style.display = mediaQuery.matches ? 'block' : 'none';
}

// Ensure it runs after DOM is ready (defer also helps)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyHRVisibility);
} else {
  applyHRVisibility();
}

// React to viewport changes
if (mediaQuery.addEventListener) {
  mediaQuery.addEventListener('change', applyHRVisibility);
} else {
  // Fallback for older browsers
  mediaQuery.addListener(applyHRVisibility);
}
window.addEventListener('resize', applyHRVisibility);
