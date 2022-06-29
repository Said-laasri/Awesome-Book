const mainPage = document.querySelector('.bookDisplay');
const addPage = document.querySelector('.bookAdding');
const contactPage = document.querySelector('.contact');
const first = document.querySelector('.firstPage');
const seconde = document.querySelector('.secondePage');
const tirth = document.querySelector('.tirthPage');

first.addEventListener('click', () => {
  addPage.style.display = 'none';
  contactPage.style.display = 'none';
  mainPage.style.display = 'flex';
});

seconde.addEventListener('click', () => {
  addPage.style.display = 'flex';
  contactPage.style.display = 'none';
  mainPage.style.display = 'none';
});

tirth.addEventListener('click', () => {
  addPage.style.display = 'none';
  contactPage.style.display = 'flex';
  mainPage.style.display = 'none';
});