// Pauses the looping demo videos for visitors who prefer reduced motion (they keep the
// native controls to play on demand).
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('video[autoplay]').forEach(function (v) {
    v.removeAttribute('autoplay');
    v.pause();
    v.controls = true;
  });
}
