/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
randNum = getRandomInt(who.length);
let whoRand = who[randNum];

randNum = getRandomInt(when.length);
let whenRand = when[randNum];

let randNum = getRandomInt(action.length);
let actionRand = action[randNum];

randNum = getRandomInt(what.length);
let whatRand = what[randNum];

let output = whoRand + " " + whenRand + " " + actionRand + " " + whatRand;
console.log(output);
document.getElementById("excuse").innerHTML = output;
function printArray(array) {
  console.log(array);
}
