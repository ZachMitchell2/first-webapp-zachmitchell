// quiz check
function checkAnswers() {

    let totalCorrect = 0;

    // check if answers are correct
    if (document.getElementById('q1a3').checked == true) {
        totalCorrect = totalCorrect + 1;
    };
    if (document.getElementById('q2a2').checked == true) {
        totalCorrect = totalCorrect + 1;
    };
    if (document.getElementById('q3a2').checked == true) {
        totalCorrect = totalCorrect + 1;
    };
    if (document.getElementById('q4a1').checked == true) {
        totalCorrect = totalCorrect + 1;
    };
    if (document.getElementById('q5a1').checked == true) {
        totalCorrect = totalCorrect + 1;
    };

    // print # correct out of 5
    document.getElementById("numCorrect").innerHTML = "You got " + totalCorrect + "\/5 correct!";

};

// dragging functions: I definitely needed W3Schools for this nonsense :(
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
};
function dragOver(event) {
    event.preventDefault();
};
function dragEnd(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
};

// automatically hides answers for flag quiz
// it thinks there's an issue here but there isn't really :)
document.getElementById("flagAnswers").style.visibility = "hidden";

// shows answers for flag quiz
function flagAnswers(){
    document.getElementById("flagAnswers").style.visibility = "visible";
};
