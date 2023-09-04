let inputPercent = document.querySelector(".tip-percentage").value;
let inputAmount = document.querySelector(".bill-amount").value;

let btnIncrease = document.querySelector(".increase");
let btnDecrease = document.querySelector(".decrease");

let countPeople = document.querySelector(".number-people");
let totalBill = document.querySelector(".total-bill");
let log = console.log;

let countTotal = 1;


let display = (percent, amount , numberPeople = 0)=>{
    let tipPercentage = percent/100 * amount;
    let outputTotal = amount + tipPercentage;
    let total = outputTotal / numberPeople
    totalBill.innerHTML =  `R ${total.toFixed(2)}`;
    countPeople.innerHTML = numberPeople
    clearInputValue();
}


// buttons that are clicked 
btnIncrease.onclick = ()=> {
    if(countTotal != 100){
        let decrease = 1;
        countTotal += decrease;
        display(eval(inputPercent ), eval(inputAmount ), countTotal)
    }
}

btnDecrease.onclick = ()=> {
    let decrease = 1;
    if(countTotal == 1) {
        countTotal = 1
     } else{
        countTotal -= decrease;
        display(eval(inputPercent ), eval(inputAmount ), countTotal);
    }
}

// clear values on the inputs

let clearInputValue = ()=>{
    inputAmount.innerHTML = "";
    inputPercent.value = "";
}