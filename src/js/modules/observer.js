export function cardObserver() {
  const musicNotes = document.querySelectorAll('.music-notes');


  let cardObserver = new IntersectionObserver((entries) => {


    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `fadeScaleIn ${entry.target.dataset.delay} forwards ease-in`;
      }
      else {
        entry.target.style.animation = 'none';
      }
    });





  });
  musicNotes.forEach(musicNote => {
    cardObserver.observe(musicNote);
  });
}








