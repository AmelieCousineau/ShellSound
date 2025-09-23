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
    document.querySelector(".point_hero").addEventListener('click', this.rendreActif);
    document.querySelector(".point_spec").addEventListener('click', this.rendreActif);
    document.querySelector(".point_config").addEventListener('click', this.rendreActif);
    document.querySelector(".point_avis").addEventListener('click', this.rendreActif);
    document.querySelector(".point_appli").addEventListener('click', this.rendreActif);

    // Pour gérer à quelle section on est et gérer le actif du menu de point
    const sections = document.querySelectorAll(".js-section"); 
      const observer = new IntersectionObserver(this.onIntersect.bind(this), {
        root: null,
        threshold: 0.6 // la section doit être au moins à 60% visible
      });

    sections.forEach(section => observer.observe(section));

    document.querySelector('.js-btnBleu').addEventListener('click', this.configBleu);
    document.querySelector('.js-btnRouge').addEventListener('click', this.configRouge);
    document.querySelector('.js-btnMauve').addEventListener('click', this.configMauve);
    document.querySelector('.js-btnVert').addEventListener('click', this.configVert);
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

  configBleu(ev){
    let e = ev.currentTarget;
    let btnCouleurs = document.querySelectorAll('.js-btnCouleur');

    for(let i=0; i<btnCouleurs.length; i++){
      let btnCouleur = btnCouleurs[i];
      btnCouleur.classList.remove('actif');
    }

    document.querySelector('.js-configImg1').src = 'assets/images/bleuGlacial1.jpg';
    document.querySelector('.js-configImg2').src = 'assets/images/bleuGlacial2.jpg';
    document.querySelector('.js-configImg3').src = 'assets/images/bleuGlacial3.jpg';
    document.querySelector('.js-titleColor').innerText = 'Bleu glacial';
    e.classList.add('actif');
  }

  configRouge(ev){
    let e = ev.currentTarget;
    let btnCouleurs = document.querySelectorAll('.js-btnCouleur');

    for(let i=0; i<btnCouleurs.length; i++){
      let btnCouleur = btnCouleurs[i];
      btnCouleur.classList.remove('actif');
    }

    document.querySelector('.js-configImg1').src = 'assets/images/rougeSaumon1.jpg';
    document.querySelector('.js-configImg2').src = 'assets/images/rougeSaumon2.jpg';
    document.querySelector('.js-configImg3').src = 'assets/images/rougeSaumon3.jpg';
    document.querySelector('.js-titleColor').innerText = 'Rouge saumon';
    e.classList.add('actif');
  }

  configMauve(ev){
    let e = ev.currentTarget;
    let btnCouleurs = document.querySelectorAll('.js-btnCouleur');

    for(let i=0; i<btnCouleurs.length; i++){
      let btnCouleur = btnCouleurs[i];
      btnCouleur.classList.remove('actif');
    }

    document.querySelector('.js-configImg1').src = 'assets/images/lavande1.jpg';
    document.querySelector('.js-configImg2').src = 'assets/images/lavande2.jpg';
    document.querySelector('.js-configImg3').src = 'assets/images/lavande3.jpg';
    document.querySelector('.js-titleColor').innerText = 'Lavande';
    e.classList.add('actif');
  }

  configVert(ev){
    let e = ev.currentTarget;
    let btnCouleurs = document.querySelectorAll('.js-btnCouleur');

    for(let i=0; i<btnCouleurs.length; i++){
      let btnCouleur = btnCouleurs[i];
      btnCouleur.classList.remove('actif');
    }

    document.querySelector('.js-configImg1').src = 'assets/images/vertPastel1.jpg';
    document.querySelector('.js-configImg2').src = 'assets/images/vertPastel2.jpg';
    document.querySelector('.js-configImg3').src = 'assets/images/vertPastel3.jpg';
    document.querySelector('.js-titleColor').innerText = 'Vert pastel';
    e.classList.add('actif');
  }
}
new Main();
