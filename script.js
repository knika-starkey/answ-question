"use strict";
const questions = [
  "Що мені взяти з собою на ковзанку?",
  "Що мені покласти в холодильник?",
  "Що мені взяти із собою до школи?",
  "Що мені взяти із собою в басейн?",
];
const answers = ["ковзани", "яблука", "підручники", "рушник"];
function randomArrayValue(arr, n = 1) {
  let several = [];
  for (let i = 0; i < n; i++) {
    several.push(arr[getRandomInt(arr.length)]);
  }
  return several;
}
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
let q = randomArrayValue(questions);
let answ = randomArrayValue(answers, +prompt("Скільки відповідей?"));

document.write(`${q} : ${answ}`);
