const numberVar = document.getElementById('Number');
let previousStep = 1;
let nowStep = 1;
numberVar.innerHTML = nowStep;
function ButtonStuff() {
    let nextStep = nowStep + previousStep;
    numberVar.innerHTML = nextStep;
    previousStep = nowStep;
    nowStep = nextStep;
    if (nextStep % 2 == 0) {
        document.getElementById("thangy").innerHTML = "THINGY!";
    }
    else if (nextStep % 3 == 0) {
        document.getElementById("thangy").innerHTML = "THAAAAANGY!";
    }
    else {
        document.getElementById("thangy").innerHTML = "thingy";
    }
}