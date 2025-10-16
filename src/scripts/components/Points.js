export default class Points{
    constructor(element){
        this.element = element;

        this.init();
    }

    init(){
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

      for(let i=0; i<sections.length; i++){
        let section = sections[i];
        observer.observe(section);
      }

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

        // cibler le point associé
        const id = entry.target.getAttribute("id");
        const point = document.querySelector(`.point_${id}`);
        if (point) {
          point.classList.add("actif");
        }
      }
    });
  }

}