import '@fontsource/material-icons';
import 'materialize-css';
import '../scss/style.scss';

import cardsData from './cardsData.js';
import extensionCardsData from './extensionCardsData.js';

const pseudoBody = document.getElementById('pseudo-body');
const wrapper = document.querySelector('.wrapper');
const cardsContainer = document.querySelector('.cards');

if (wrapper.classList.contains('page_index')) {
  for (let _elem in cardsData) {
    cardsContainer.innerHTML += `<div class="col s12 m6 l4">
    <div class="card site_card hoverable grey lighten-2 center">
      <div class="card-content">
        <div class="card_icon">
          <img
            src="${cardsData[_elem].img}"
            class="responsive-img"
          />
        </div>
        <p>${cardsData[_elem].name}</p>
      </div>
      <div class="card-action">
        <a
          data-base-href="${cardsData[_elem].link}"
          class="btn waves-effect waves-light my_btn go_button" target="_blank"
          >Перейти <i class="material-icons">arrow_forward</i></a
        >
      </div>
    </div>
</div>`;
  }
}

if (wrapper.classList.contains('page_extensions')) {
  for (let _elem in extensionCardsData) {
    cardsContainer.innerHTML += `<div class="col s12">
    <div class="card hoverable grey lighten-2">
      <div class="card-content">
        <div class="card_icon">
          <img
            src="${extensionCardsData[_elem].img}"
            class="responsive-img"
          />
        </div>
        <p class="name">${extensionCardsData[_elem].name}</p>
        <a
          href="${extensionCardsData[_elem].link}"
          class="btn waves-effect waves-light my_btn go_button" target="_blank"
          >Перейти <i class="material-icons">arrow_forward</i></a
        >
      </div>
    </div>
</div>`;
  }
}

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const footerLinks = document.querySelectorAll('footer a');
const themeSwitcher = document.getElementById('theme_switcher');
const searchInput = document.getElementById('search_input');
const searchLabel = document.getElementById('search_label');
const cards = document.querySelectorAll('.card');
const cardsLinks = document.querySelectorAll('.site_card .go_button');

function switchTheme() {
  pseudoBody.classList.toggle('dark');
  pseudoBody.classList.toggle('lighten-4');
  pseudoBody.classList.toggle('text-darken-4');
  pseudoBody.classList.toggle('darken-4');
  pseudoBody.classList.toggle('text-lighten-4');

  header.classList.toggle('lighten-2');
  header.classList.toggle('text-darken-4');
  header.classList.toggle('darken-2');
  header.classList.toggle('text-lighten-4');
  footer.classList.toggle('lighten-2');
  footer.classList.toggle('text-darken-4');
  footer.classList.toggle('darken-2');
  footer.classList.toggle('text-lighten-4');

  footerLinks.forEach(link => {
    link.classList.toggle('text-darken-3');
    link.classList.toggle('text-lighten-4');
  });

  if (wrapper.classList.contains('page_index')) {
    searchInput.classList.toggle('text-darken-4');
    searchInput.classList.toggle('text-lighten-4');
    searchLabel.classList.toggle('text-darken-4');
    searchLabel.classList.toggle('text-lighten-4');
  }

  cards.forEach(card => {
    card.classList.toggle('lighten-4');
    card.classList.toggle('darken-4');
  });

  if (pseudoBody.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

if (localStorage.getItem('theme') == 'dark') {
  themeSwitcher.setAttribute('checked', '');
  switchTheme();
} else {
  themeSwitcher.removeAttribute('checked');
}

if (wrapper.classList.contains('page_index')) {
  function refreshLinks() {
    if (/\S+/.test(searchInput.value)) {
      cardsLinks.forEach(link => {
        link.removeAttribute('disabled');
        link.href = link.dataset.baseHref + searchInput.value;
      });
    } else {
      cardsLinks.forEach(link => {
        link.setAttribute('disabled', true);
      });
    }
  }
  refreshLinks();
  searchInput.addEventListener('input', refreshLinks);
}

themeSwitcher.addEventListener('click', switchTheme);

/*
 * Короткое описание кода выше:
 * https://youtu.be/WghVAttehVQ
 */
