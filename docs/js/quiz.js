let questions = {
    TFQ: [
        {
            question: "Shen is best champion",
            correctanswer: true
        },
        {
            question: "Annie is over 18",
            correctanswer: false
        },
        {
            question: "Ranged top is cringe",
            correctanswer: true
        },
        {
            question: "Jax has the highest base movementspeed",
            correctanswer: false
        },
        {
            question: "Camille is 70 years old",
            correctanswer: false
        },
        {
            question: "Cho'Gath has higher AD growth per level than Renekton",
            correctanswer: true
        }
    ]
}
i = 0;
var points = 0;


function quiz() {
    const Truebutton = document.getElementById("true");
    const Falsebutton = document.getElementById("false");
    Truebutton.addEventListener('click', clicktrue);
    Falsebutton.addEventListener('click', clickfalse);

}

function showquestion(){
    let question = document.getElementById('showquestion');
        question.textContent = questions.TFQ[i].question;

        console.log(questions.TFQ[i]);
}

function clicktrue() {

    answer = true;
    if (answer === questions.TFQ[i].correctanswer) {
        points++;
    }
    let showpoints = document.getElementById('points');
    showpoints.textContent = "points: " + points;
    i++;
    showquestion();
}
function clickfalse() {
    answer = false;
    if (answer === questions.TFQ[i].correctanswer) {
        points++;
    }
    let showpoints = document.getElementById('points');
    showpoints.textContent = "points: " + points;

    i++;
    showquestion();
}
quiz();
showquestion();
