class MyPopup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  private connectedCallback() {
    this.render();
  }

  private getAllAttributes(): Attributes {
    return this.getAttributeNames().reduce(
      (obj, name) => ({
        ...obj,
        [name]: this.getAttribute(name),
      }),
      {}
    );
  }

  private closePopup() {
    document.body.classList.remove('locked')
    this.remove();
  }

  private enableClose() {
    const button = this.shadowRoot.querySelector('.popup__close')
    button.addEventListener('click', this.closePopup.bind(this))
  }

  render() {
    const { team1, team2, src1, src2, score, date } = this.getAllAttributes();
    
    this.shadowRoot.innerHTML =  `
      <style>
      @import "js/styles/popup.css"
      </style>
      <div class="popup">
        <div class="popup__content">
        <button class="popup__close">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 1L15 16" stroke="black" stroke-width="3" stroke-linejoin="round"/>
          <path d="M14.8699 1.45483L1.13865 15.4338" stroke="black" stroke-width="3" stroke-linejoin="round"/>
        </svg>
        </button>
          <h1 class="popup__title">
            Dota 2 
            <br>
            ${team1} vs ${team2}
          </h1>
          <h2 class="popup__subtitle">International 2022</h2>
          <div class="popup__teams">
            <div class="popup__team">
            <div><img src="${src1}" alt="Команда 1"></div>
            <div>${team1}</div>
            </div>
            <div class="popup__score">
            ${score}
            </div>
            <div class="popup__team">
            <div><img src="${src2}" alt="Команда 1"></div>
            <div>${team2}</div>
            </div>
          </div>
          <div class="popup__date">
            ${date}
          </div>
        </div>
      </div>
    `
    this.enableClose()
  }
}

customElements.define("my-popup", MyPopup);
