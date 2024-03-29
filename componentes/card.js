class FreeFireCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["rgb", "img", "movil", "titulo", "precio", "coleccion", "contenido", "alturaimg", "href"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "img") {
      this.img = newVal;
      const pcImage = this.shadowRoot.querySelector(".pc");
      if (pcImage) {
        pcImage.src = this.img;
      }
    }
    if (attr === "movil") {
      this.movil = newVal;
      const movilImage = this.shadowRoot.querySelector(".movil");
      if (movilImage) {
        movilImage.src = this.movil;
      }
    }
    if (attr === "rgb") {
      this.rgb = newVal;
    }
    if (attr === "titulo") {
      this.title = newVal;
      const h2Element = this.shadowRoot.querySelector("h2");
      if (h2Element) {
        h2Element.textContent = this.title;
      }
    }
    if (attr === "precio") {
      this.precio = newVal;
    }
    if (attr === "coleccion") {
      this.coleccion = newVal;
    }
    if (attr === "contenido") {
      this.contenido = newVal;
    }
    if (attr === "alturaimg") {
      this.alturaImg = newVal + 'px'; 
      const pcImage = this.shadowRoot.querySelector(".pc");
      if (pcImage) {
        pcImage.style.height = this.alturaImg;
      }
    }
    if (attr === "href") {
      this.href = newVal;
      const vinculo = this.shadowRoot.querySelector("#btn");
      if (vinculo) {
        vinculo.href = this.href;
      }
    }
  }
  
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <main class="${this.rgb}">
    <div class="container">
    <section class="imgBox">
    <img class="pc" src="${this.img}" style="height:${this.alturaImg}"/>
    <img class="movil" src="${this.movil}" />
    </section>
    <section class="details">
    <div class="content">
    <h2>${this.title}<br><span>${
      this.coleccion
    }</span></h2>
    <p>${this.contenido.substring(0, 100) + "..."}</p>
    <img class="fCard2" src="./img/fCard.png">
    <div class="container-btn"><a  id="link"  href="${this.href}" style="text-decoration: none;"><button id="btn"><slot name="text-link"> Ver mas</slot></button></a></div>
    </div>
    </section>
    </div>
    </main>
    ${this.getStyles()};
    `;
    return template;
  }
  getStyles() {
    
    return `
    <style>
    :host {
      --primary-background: #171717;
      --width: 500px;
      --height: 300px;
      --btn-padding: 7px 13px;
      --btn-color: #fff;
      --btn-font-size: 12px;
      /* PC */
      --img-pc: 85%;
      --img-pc-top:65px;
      /* Movil */
      --img-movil: 100%;
      --margin-movil: -25%;
      --rgb-movil-top: 0%;
        }
        .container {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: var(--width);
            height: var(--height);
            background-color: transparent;
            border-radius: 10px;
            overflow: hidden;
            transform-style: preserve-3d;
            perspective: 1000px;
          }
          .container .imgBox {
            position: relative;
            display: flex;
            justify-content: center;
            width: 50%;
            height: 100%;
            background-color: var(--primary-background);
            border-radius: 10px 0 0 10px;
          }
          .container .imgBox:before {
            position: absolute;
            top: 20px;
            left: 45px;
            font-size: 5em;
            letter-spacing: 15px;
            font-weight: 800;
            color: #fff;
            content: 'Free';
            opacity: 0.1;
            font-family: free-fire;
          }
      .container .imgBox img.pc {
          position: relative;
          top: var(--img-pc-top);
          left: -20px;
          width: auto;
          height: var(--img-pc);
          transform: translateZ(20px);
        }
        .container .details {
          display: flex;
          justify-content: center;
          align-items: end;
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 15px;
          background-color: #fff;
          border-radius: 0 10px 10px 0;
          
        }
        .container .details:before {
          position: absolute;
          top: 20px;
          right: 55px;
          font-size: 5em;
          letter-spacing: 15px;
          font-weight: 800;
          color: #000;
          content: 'Fire';
          opacity: 0.1;
          font-family: free-fire;
        }
        .container .details h2 {
          font-size: 2.3em;
          line-height: 0.7em;
          color: #444;
          font-family: free-fire;
          margin-bottom:5px
          
        }
      .container .details h2 span {
          font-size: 0.5em;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #999;
          font-family: Arial, Helvetica, sans-serif;
          font-weight:bold;
        }
        .container .details p {
          max-width: 100%;
          color: #333;
          font-size: 16px;
          transform: translateZ(30px);
          margin-bottom:15px
      }
      .container-btn{
        position: relative
      }
      .container .details a button {
          float: right;
          padding: var(--btn-padding);
          font-size: var(--btn-font-size);
          color: var(--btn-color);
          letter-spacing: 1px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 15px;
          background-color: gray;
          cursor: pointer;
          border: none;
      }
      .container img.fCard {
        width: 180px;
    height: fit-content;
    position: absolute;
    top: 35px;
    left: -50px;
      }
      .container img.fCard2 {
        width: 320px;
        height: fit-content;
        position: absolute;
        bottom: -62px;
        right: -77px;
        opacity: 0.1;
    }
    .rgb::after {
        content:"";
        background: linear-gradient(45deg,
        #ff0000 0%, 
        #ff9a00 10%,
        #d0de21 20%,
        #4fdc4a 30%, 
        #3fdad8 40%,
        #2fc9e2 50%, 
        #1c7fee 60%, 
        #5f15f2 70%, 
        #ba0cf8 80%, 
        #fb07d9 90%, 
        #ff0000 100%  )
        repeat 0% 0% / 300% 100%;
        position: absolute;
        inset: -3px;
        border-radius: 10px;
        filter: blur(8px);
        z-index: -1;
        animation: rgb 6s linear infinite;
        width: var(--width);
        height: var(--height);
          margin:0 auto;
          top:1%
    
      }
      @keyframes rgb {
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
      }
      .movil{
        display:none;
      }
      @media (max-width: 600px) {
          .container {
              height: 550px;
              width: 350px;
          }
          
          .container .imgBox {
              width: 100%;
              box-sizing: border-box;
              height: auto;
              text-align: center;
              border-radius: 10px 10px 0 0;
              background: linear-gradient(#000 0%, #000000c9 70%, #1d1d1d 100%);
          }
          .container .imgBox img {
              left: initial;
              width: 100%;
              height: auto;
              transform: rotate(0deg);
          }

          .container .details {
            display: flex;
            justify-content: center;
            align-items: center;
              width: 100%;
              height: auto;
              padding: 30px 20px 0 20px;
              border-radius: 0 0 10px 10px;
          }

          .container .details p {
              max-width: 100%;
              margin-left: 0;
          }
          .container .imgBox img.pc, .container .imgBox:before, .container .details:before, .fCard {
            display:none
        }
        .movil{
            display:block;
            margin-bottom:var(--margin-movil);
            height:var(--img-movil);

          }
          .container .imgBox{
            padding: 10px 10px 0px
          }
          .rgb::after {
            top: var(--rgb-movil-top); 
            width: 350px;
        height: 550px;
          margin:0 auto;
          }
          .container img.fCard2 {
            width: 239px;
            height: fit-content;
            position: absolute;
            bottom: -44px;
            right: 182px;
            opacity: 0.1;
            transform: rotate(61deg);
        } 
      }
      </style>
        `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
     // Obtener referencia al botón y al enlace
  const btn = this.shadowRoot.querySelector("#btn");
  const link = this.shadowRoot.querySelector(".link");

  // Configurar el enlace del botón
  btn.addEventListener("click", () => {
    window.location.href = btn.href;
  });
  }
}
customElements.define("mlz-ff", FreeFireCard);
