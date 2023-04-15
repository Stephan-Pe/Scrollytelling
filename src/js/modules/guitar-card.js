class GuitarCard extends HTMLElement {
  set guitar(guitar) {
    this.innerHTML = `
    <div class="card" data-src="item${guitar.id}">
      <div class="card__title">
        <h2 class="music-title" data-delay=".8s" style="z-index:10;font-family: 'Rampart One';">${guitar.title}</h2>
      </div>
      <div class="card__image" data-delay="1.2s">
          <img src="${guitar.image}" alt="${guitar.alt}" title="${guitar.alt}">
      </div>
  </div>

    `;
  }
}
customElements.define('guitar-card', GuitarCard);