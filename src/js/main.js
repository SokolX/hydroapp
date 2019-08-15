"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const key = new Date().toISOString().slice(0, 10);
const counter = document.querySelector('.glass__counter--js');
const addButton = document.querySelector('.glass__button--add-js');
const removeButton = document.querySelector('.glass__button--remove-js');



if (counter) {
  if (localStorage[key]) {
    counter.innerHTML = localStorage[key];
  } else {
    counter.innerHTML = 0;
  }


addButton.addEventListener('click', (e) => {

  counter.innerHTML = parseInt(counter.innerHTML) + 1;
  localStorage.setItem(key, counter.innerHTML);
  
});

removeButton.addEventListener('click', (e) => {

  if (parseInt(counter.innerHTML) > 0) {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    localStorage.setItem(key, counter.innerHTML);
  }

});
}
const dates = [];
for (let i = 0; i < 6; i++) {
  if (localStorage.key(i)) {
    dates.push(localStorage.key(i))
  }
}

const glasses = [];
for (let date of dates) {
  glasses.push(localStorage[date]);

}

if(localStorage.getItem.length !== 0) {
  history.innerHTML = '<ul class="history--list-js">';

  for (let i = 0; i < localStorage.length; i++) {
    const historyList = document.querySelector('.history--list-js');
    const date = localStorage.key(i);
    const counter = localStorage.getItem(date);
    historyList.innerHTML += `<li class="history__item">
    <h2>Date: ${date}</h2>
    <h2>Glass: ${counter}<h2>
    </li>`;
  }

} 

