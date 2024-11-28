// import {ReactDom} from 'react-dom'
// import button from './Button'

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = "<button>Click Me</button>";
  }

  connectedCallback() {
    const button = document.querySelector("button");
    button.innerHTML = this.getAttribute("value");
    // ReactDom.render(<button></button>, this.shadowRoot)
  }
  static get observedAttributes() {}

  attributeChangedCallback() {}

  disConnectedCalback() {}
}

customElements.define("my-button", MyButton);
