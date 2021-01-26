import cardsTemplate from '../templates/menu-cards.hbs';
import menuCards from '../menu.json'


const markup = cardsTemplate(menuCards)

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup)
