// ----------------TASK 1----------------
let userAge = parseInt(prompt("How old are you?", ""));

if (userAge >= 18 && userAge <= 45) {
  alert("You have passed!!!");
} else {
  alert("Sorry, you aren't old enough!");
}


// ----------------TASK 2----------------
let a = parseInt(prompt("Write your first number?", ""));
let b = parseInt(prompt("Write your second number?", ""));

if (a > 3 && 12 > a && b >= 5 && 13 > b) {
  alert("Correct!");
} else {
  alert("Wrong!");
}


// ----------------TASK 3----------------
let userName = prompt("Input your name:", "");
let depositAmount = parseInt(prompt("Input your deposit amount in hryvnia:", ""));
let depositDuration = parseInt(prompt("Input the duration of your deposit in months:", ""));
let interest;

if (depositDuration < 6) {
  interest = 15;
} else if (depositDuration >= 6 && depositDuration <= 9) {
  interest = 16;
} else if (depositDuration > 9 && depositDuration <= 17) {
  interest = 17;
}

let interestRate = interest / 100;
let earnings = depositAmount * interestRate * (depositDuration / 12);

let message =
  "Dear " +
  userName +
  ", You have deposited " +
  depositAmount +
  " hryvnias, under " +
  interest +
  "% per annum, for the term of " +
  depositDuration +
  " month. During this term, you will earn " +
  earnings +
  " hryvnias. ";
document.getElementById("task-3").innerHTML = message;
