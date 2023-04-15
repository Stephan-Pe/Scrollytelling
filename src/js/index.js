import { cardObserver } from "./modules/observer.js";
import { guitarComponent } from './modules/guitarComponent.js';
import { doSomethingOnScroll } from "./modules/scroll.js";
window.addEventListener('load', () => {
  const musicNotes = document.querySelectorAll('.music-notes');
  let containerHeight = document.querySelector('body').clientHeight;
  let width = window.innerWidth;

  // give the music notes unique sizes
  musicNotes.forEach(el => {
    let s = Math.floor(10 + Math.random() * 250); // 10–100
    let y = Math.floor(Math.floor(.04 * containerHeight) * Math.random() * containerHeight); // 10–100
    // 10–100 
    let x = Math.floor(.9 * Math.random() * width); // @ts-ignore
    el.style.fontSize = s + 'px';   // @ts-ignore
    el.style.left = x + 'px';   // @ts-ignore
    el.style.top = y + 'px';   // @ts-ignore
  });
  cardObserver();
  guitarComponent();
  doSomethingOnScroll();
});




