const numberVar = document.getElementById('Number');
let previousStep = 1;
let nowStep = 1;
numberVar.innerHTML = nowStep;
function ButtonStuff() {
    let nextStep = nowStep + previousStep;
    numberVar.innerHTML = nextStep;
    previousStep = nowStep;
    nowStep = nextStep;
}