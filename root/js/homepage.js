document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video');

  videos.forEach(vid => {
    vid.addEventListener('mouseenter', () => {
      vid.currentTime = 0.5; // start 0.5 seconds in
      vid.play();
    });

    vid.addEventListener('mouseleave', () => {
      vid.pause();
      vid.currentTime = 0.5; // reset to 0.5s instead of 0
    });
  });
});
    