class InfoCard extends HTMLElement {
  set info(info) {
    this.innerHTML = `
    <div class="subcard">
      <div>
          <h3>${info.title1}</h3>
            <p>${info.paragraph1}</p>
            <p>${info.paragraph2}</p>
            <p>${info.paragraph3}</p>
            <p>${info.paragraph4}</p>
      </div>
      <div>
          <h3>${info.title2}</h3>
          <p>${info.paragraph5}</p>
          <p>${info.paragraph6}</p>
          <p>${info.paragraph7}</p>
          <p>${info.paragraph8}</p>
          <p>${info.paragraph9}</p>
          <p>${info.paragraph10}</p>
          <p>${info.paragraph11}</p>
          <p>${info.paragraph12}</p>
          <p>${info.paragraph13}</p>
          <p>${info.paragraph14}</p>
      </div>
    </div>
    `;
  }
}
customElements.define('info-card', InfoCard);