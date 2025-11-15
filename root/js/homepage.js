document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video');

  videos.forEach(vid => {
    vid.addEventListener('mouseenter', () => {
      vid.currentTime = 0.5; 
      vid.play();
    });

    vid.addEventListener('mouseleave', () => {
      vid.pause();
      vid.currentTime = 0.5; 
    });
  });
});
    