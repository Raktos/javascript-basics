/**
 ** Created by Jason Ho on 10/13/2014.
 **/

"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var name = 'Jason';
    var i;
    var fruitListElem = document.getElementById('fruit-list');
    var fruitLi;
    var animalSound = document.getElementById('animal-sound');

    var msgElem = document.getElementById('message');
    msgElem.innerHTML = 'Hello ' + name;

    var fruits = ['apple', 'pear', 'banana', 'grapes'];

    for(i = 0; i < fruits.length; ++i) {
        console.log(fruits[i]);

        fruitLi = document.createElement('li');
        fruitLi.innerHTML = fruits[i];
        fruitListElem.appendChild(fruitLi);

    }

    var animalPic = document.getElementById('animal-picture');
    animalPic.addEventListener('click', function() {
        msgElem.innerHTML = 'meow';

        animalSound.play();
    });

    animalSound.addEventListener('ended', function() {
        msgElem.innerHTML = '&nbsp;';
    });

    window.setInterval(function() {
        document.getElementById('clock').innerHTML = new Date().toLocaleString();
    }, 1000);
});