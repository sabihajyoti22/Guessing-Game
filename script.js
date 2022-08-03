var form = document.querySelector(".form-field")
var layoutBody = document.querySelector(".layout-body");
var inputNumber = document.querySelector("#guessing-number");
var checkButton = document.querySelector("#check");
var resultText = document.querySelector(".result-text");
var attemptText =document.querySelector(".remaining-attempts");
var randomText =document.querySelector(".random-number");
var won = 0;
var lost = 0;
var count = 0;

form.addEventListener("submit", (e)=>{
    count++;
    e.preventDefault();
    if(count >= 5){
        inputNumber.disabled = true;
        checkButton.disabled = true;
        resultText.innerHTML = ``;
        attemptText.innerHTML = `Attempts are over!!!`;
        randomText.innerHTML = ``;
    }else{
        if(checkResult(inputNumber.value)){
            won++;
            resultText.innerHTML = `You Have Won; Chance left: ${5-count}`;
            attemptText.innerHTML = `Won: ${won} Lost: ${lost}`;
        }else{
            lost++;
            resultText.innerHTML = `You Have lost; Chance left ${5-count}`;
            attemptText.innerHTML = `Won: ${won} Lost: ${lost}`;
        }
    }
    
})
function checkResult(num){
    var randomNumber = Math.floor(Math.random()*5)+1;
    if (num == randomNumber){
        randomText.innerHTML = `Random number was: ${randomNumber}`;
        return true;
    }
    else{
        randomText.innerHTML = `Random number was: ${randomNumber}`;
        return false;
    }
}
