import ComponentFactory from './ComponentFactory';
import Icons from "./utils/Icons";

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    Icons.load();

    new ComponentFactory();

    document.querySelector('.js-toggle').addEventListener('click', this.onToggleNav);

    // Pour gérer le clic des points
    const points = document.querySelectorAll('.js-point');
    for(let i=0; i<points.length; i++){
      const point = points[i];
      point.addEventListener('click', this.rendreActif);
    }

    // Pour gérer à quelle section on est et gérer le actif du menu de point
    const sections = document.querySelectorAll(".js-section"); 
      const observer = new IntersectionObserver(this.onIntersect.bind(this), {
        root: null,
        threshold: 0.6 // la section doit être au moins à 60% visible
      });

    sections.forEach(section => observer.observe(section));

    // Pour changer les images de la config selon la couleur
    const btnColors = document.querySelectorAll('.js-btnCouleur');
    for(let i=0; i<btnColors.length; i++){
      const btnColor = btnColors[i];
      btnColor.addEventListener('click', this.changeColor);
    }
  }

  onToggleNav(){
    document.querySelector('.header').classList.toggle('nav-is-active');
  }

  rendreActif(ev){
    let e = ev.currentTarget;
    let points = document.querySelectorAll(".point");

    for(let i=0; i<points.length; i++){
      let point = points[i];
      point.classList.remove('actif');
    }

    e.classList.add('actif');
  }

  removeActif(){
    let points = document.querySelectorAll(".point");

    for(let i=0; i<points.length; i++){
      let point = points[i];
      point.classList.remove('actif');
    }
  }

  onIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // retirer "actif" de tous les points
        document.querySelectorAll(".point").forEach(point => {
          point.classList.remove("actif");
        });

        // cibler le point associé (via un data-attribute par ex.)
        const id = entry.target.getAttribute("id"); // ex: "hero"
        const point = document.querySelector(`.point_${id}`);
        if (point) {
          point.classList.add("actif");
        }
      }
    });
  }

  changeColor(ev){
    let e = ev.currentTarget;
    const btnColors = document.querySelectorAll('.js-btnCouleur');

    for(let i=0; i<btnColors.length; i++){
      const btnColor = btnColors[i];
      btnColor.classList.remove('actif');
    }

    e.classList.add('actif');

    for(let i=0; i<3; i++){
      document.querySelector(`.js-configImg${i+1}`).src = `assets/images/${e.dataset.color}${i+1}.jpg`;
    }
  }
}
new Main();
