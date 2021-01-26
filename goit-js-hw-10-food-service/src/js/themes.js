const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const btnChangeTheme = document.querySelector('.theme-switch__toggle');
const savedTheme = localStorage.getItem('theme');

body.classList.add(Theme.LIGHT);

if (savedTheme === Theme.DARK) {
  body.classList.replace(Theme.LIGHT, Theme.DARK)
  btnChangeTheme.setAttribute('checked', 'checked');
} 

function changeTheme() {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK)
    localStorage.setItem('theme', body.getAttribute('class'));
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT)
    localStorage.setItem('theme', body.getAttribute('class'));
  }
}
btnChangeTheme.addEventListener('click', changeTheme);