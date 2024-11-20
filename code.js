const numberVar = document.getElementById('Number');
let randoVar = 420;
numberVar.innerHTML = randoVar;
function ButtonStuff() {
    randoVar++;
    numberVar.innerHTML = randoVar;
}