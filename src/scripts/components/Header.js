export default class Header{
    constructor(element){
        this.element = element;

        this.init();
    }

    init(){
        console.log('Initialisation de ma composante Header');

        document.querySelector('.js-toggle').addEventListener('click', this.onToggleNav.bind(this));
    
        const menuItems = document.querySelectorAll('.js-menu-item');
        for(let i=0; i<menuItems.length; i++){
            let menuItem = menuItems[i];
            menuItem.addEventListener('click', this.removeMenu.bind(this));
        }
    }

    onToggleNav(){
    this.element.classList.toggle('nav-is-active');
  }

  removeMenu(){
    this.element.classList.remove('nav-is-active');
  }
}