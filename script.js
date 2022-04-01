const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tips = document.querySelectorAll(".tips");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const resetBtn = document.querySelector(".reset");
const plus1 = document.querySelector(".icon1");
const plus2=document.querySelector(".icon4");
const minus1=document.querySelector(".icon");
const minus2=document.querySelector(".icon3");
const tipCustom = document.querySelector(".tip-custom");
const error = document.querySelector(".error");
const error1 = document.querySelector(".error1");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
resetBtn.addEventListener("click", reset);
plus1.addEventListener("click",p1);
plus2.addEventListener("click",p2);
minus1.addEventListener("click",m1);
minus2.addEventListener("click",m2);
tipCustom.addEventListener("input", tipInputFun);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0;

function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}

function tipInputFun() {
  tipValue = parseFloat(tipCustom.value);

  if (tipValue < 1) {
    error1.style.display = "flex";
    tipCustom.style.border = "thick solid red";
  } else {
    error1.style.display = "none";
    tipCustom.style.border = "none";
    tipValue=tipValue/100;
    calculateTip();
  }
}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);

  if (peopleValue < 1) {
    error.style.display = "flex";
    peopleInput.style.border = "thick solid red";
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
    calculateTip();
  }
}



function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  billInput.value = "0.0";
  billInputFun();
  peopleInput.value = "1";
  peopleInputFun();
  tipCustom.value = "";
}

function p1(){
    peopleInput.value=parseInt(peopleInput.value)+1;
}

function p2(){
    tipCustom.value=parseInt(tipCustom.value)+1;
}

function m1(){
    peopleInput.value=parseInt(peopleInput.value)-1;
    if(peopleInput.value<1)
    peopleInput.value=1;
}

function m2(){
    tipCustom.value=parseInt(tipCustom.value)-1;
    if(tipCustom.value<1)
    tipCustom.value=1;
}