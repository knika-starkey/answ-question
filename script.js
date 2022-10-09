"use strict";
const questions = [
  "Що мені взяти з собою на ковзанку?",
  "Що мені покласти в холодильник?",
  "Що мені взяти із собою до школи?",
  "Що мені взяти із собою в басейн?",
];
const answers = ["ковзани", "яблука", "підручники", "рушник"];
function randomArrayValue(arr) {
  return arr[getRandomInt(arr.length)];
}
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
let q = randomArrayValue(questions);
let answ = randomArrayValue(answers);

document.write(`${q} : ${answ}`);
