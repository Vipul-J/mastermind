var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD,chE, correct = 0;
var questions = [
	
	["Evaluate : [{(125 * 33 / 11 + 2) * 34} / 493] * 1/2", "26", "13", "15", "21", "11","B"],

	["Evaluate : 0.07 * 0.28 / 0.02 + 0.48 - 2.48 / 0.04", "60.54", "12.2", "9.211", "31.12","11.12", "A"],

    ["Evaluate : [15% of 150] + 23 / 115", "12.344", "98.2", "22.7", "31","65", "C"],

    ["Simplify : 12 + 6 * 27 / 3 + 2 - 16 / 8 * 2", "54", "12", "64", "14","9", "C"],


];
function _(x) {
	return document.getElementById(x);
}
function renderQuestion() {
	test = _("test");
	if (pos >= questions.length) {
		test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	chE = questions[pos][5];
	test.innerHTML = "<h4>" + question + "</h4>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='E'> " + chE + "<br>";
	test.innerHTML += "<button class='btn btn-outline-info mt-3' onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
	choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[pos][6]) {
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);


