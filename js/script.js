// QuerySelector´s
const inputBill = document.querySelector(".bill");
const inputPeople = document.querySelector(".people");
const inputBtn = document.querySelectorAll(".button");
const amont = document.querySelector('.amont');
const amontTotal = document.querySelector('.total');
const customTip = document.querySelector('#custom');
const resetBtn = document.querySelector('.reset');

// Formaatação
inputBill.value = '0.0';
inputPeople.value = '1';
amont.innerHTML = '$'+ (0.0).toFixed(2);
amontTotal.innerHTML = '$'+ (0.0).toFixed(2);

// Variaveis ('ESCOPO GLOBAL')
let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

// AddEventListener´s
inputBill.addEventListener('input', inputBillFun);
inputPeople.addEventListener('input', inputPeopleFun);
customTip.addEventListener('input', tipInputFun);
resetBtn.addEventListener('click', reset)


// Funcões
inputBtn.forEach(function(val){
    val.addEventListener('click', handleClick)
})

function inputBillFun(){
    billValue = parseFloat(inputBill.value)
    calc()
}
function inputPeopleFun(){
    peopleValue = parseFloat(inputPeople.value)
    calc()
}
function tipInputFun(){
    tipValue = parseFloat(customTip.value / 100)

    inputBtn.forEach(function(val){
        val.classList.remove('active')
    })

    calc()
}
function handleClick(event){
    inputBtn.forEach(function(val){
        val.classList.remove('active')
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add('active')
            tipValue = parseFloat(val.innerHTML)/100
        }
    })

    calc()
}

function calc(){
    if(peopleValue >= 0 ){
        let tipAmont = (billValue + tipValue) / peopleValue
        let total = (billValue * tipValue) / peopleValue
        amont.innerHTML = '$'+ tipAmont.toFixed(2)
        amontTotal.innerHTML = '$'+ total.toFixed(2)
    }
}

function reset(){
    inputBill.value = '0.0';
    inputBillFun()
    inputPeople.value = '1';
    inputPeopleFun()
    customTip.value = ''
}
