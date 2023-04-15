import './guitar-card.js';
import './info-card.js';
import { fetchData, API_URL } from './fetchData.js';


let globalData = {};
export async function guitarComponent() {
  try {
    globalData = await fetchData(API_URL);
    let guitarData = globalData.guitars;
    const APP = document.getElementById('app');
    guitarData.forEach(guitar => {
      const el = document.createElement('guitar-card');
      el.guitar = guitar;
      if (APP) APP.appendChild(el);
    });
    const titles = document.querySelectorAll('.music-title');
    let titleObserver = new IntersectionObserver((entries) => {


      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `fadeScaleIn ${entry.target.dataset.delay} forwards ease-in`;
        }
        else {
          entry.target.style.animation = 'none';
        }
      });

    });
    titles.forEach(title => {
      titleObserver.observe(title);
    });
    const images = document.querySelectorAll('.card__image');
    let imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `fadeIn ${entry.target.dataset.delay} forwards ease-in`;
        }
        else {
          entry.target.style.animation = 'none';
        }
      });

    });
    images.forEach(image => {
      imageObserver.observe(image);
    });
    const infoElements = document.querySelectorAll('[data-src]');
    let info = globalData.info;
    let infoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.dataset.src == 'item6') {
          let wrapper = entry.target;

          const el = document.createElement('info-card');
          el.info = info;
          el.classList.toggle('active');
          el.style.animation = `foldDown .8s forwards .8s ease`;

          if (wrapper) wrapper.appendChild(el);
          infoObserver.unobserve(entry.target);
        }

      });
    }, { rootMargin: "0px 0px -400px 0px" });
    infoElements.forEach(element => {
      infoObserver.observe(element);
    });
  } catch (error) {
    console.log(error);
  }
}
