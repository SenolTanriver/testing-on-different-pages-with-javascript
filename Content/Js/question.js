function saveAnswer(event) {
    var answer = event.target.value;
    var questionNumber = document.querySelector('script').innerHTML;
    var storageName = questionNumber;
    localStorage.setItem(storageName, answer);
}

function loadAnswer() {
    var questionNumber = document.querySelector('script').innerHTML;
    var storageName = questionNumber;
    var answer = localStorage.getItem(storageName);
    if (answer != null) {
        document.getElementById(answer).checked = true;
    }
}
window.addEventListener("load", loadAnswer);

function displayTotalScore() {
    var totalScore = 0;

    for (var i = 1; i <= localStorage.length; i++) {
        var storageName = "question" + i;
        var answer = localStorage.getItem(storageName);
        if (answer == "yes") {
            totalScore += 20;
        }
    }
    document.getElementById('total-score').innerHTML ="Puan: " + totalScore;
}
window.addEventListener("load", displayTotalScore);


