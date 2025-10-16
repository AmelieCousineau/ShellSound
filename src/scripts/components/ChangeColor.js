export default class ChangeColor{
    constructor(element){
        this.element = element;
        this.init();
    }

    init(){
        // Pour changer les images de la config selon la couleur
        const btnColors = document.querySelectorAll('.js-btnCouleur');
        for(let i=0; i<btnColors.length; i++){
            const btnColor = btnColors[i];
            btnColor.addEventListener('click', this.changeColor.bind(this));
        }
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