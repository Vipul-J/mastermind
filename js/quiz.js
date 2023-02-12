var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
	// Bleaching action of chlorine is by
	["Bleaching action of chlorine is by :", "oxidation", "reduction", "decomposition", "hydrolysis", "C"],

	// "Gases of the same volume at the same temperature and pressure have the same number of molecules" Which of the following is this rule?
	["Gases of the same volume at the same temperature and pressure have the same number of molecules, Which of the following is this rule?", "Boyles law", "Charless law", "Volume rules of Gelusak", "Rule of Avogadros hypothesis", "D"],

	// Which one of the following is not an ape?
	["Which one of the following is not an ape?", "Gorilla", "Gibbon", "Langur", "none of these", "C"],

	// Name the vitamin which is not found in any non-vegetarian food?
	["Name the vitamin which is not found in any non-vegetarian food?", "Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K", "C"],

	// Which type of plastics can be recycled?
	[" Which type of plastics can be recycled?", "Thermoplastics", "Polythene(PE)", "Polyvinyl Chloride(PVC)", "Polypropylene(PP)", "A"],

	// What is the chemical name of baking soda? 
	["What is the chemical name of baking soda? ", " Sodium bicarbonate", " Sodium Hydroxide", " Calcium carbonate", " Sulphur Soda", "A"],

	// Which is the purest form of carbon?
	["Which is the purest form of carbon?", "Graphite", "Sodium Nitrate", "Methane", "Athens", "A"],

	// Nucleus of an atom contains
	["Nucleus of an atom contains :", "Electrons", "Protons", "Electrons and protons", "Protons and neutrons", "D"],

	// Who invented periodic table?
	// ["", "Dmitri Mendeleev ", "David Joseph", "Binky Martin", "Newton", "A"],

	// Which gases cause acid rain?
	["Which gases cause acid rain?", "Sulphur dioxide, Nitrogen oxides", "Hydrogen", "Carbon - di - oxide", "Helium", "A"],

	// Which metal is used in the making of microchips? 
	["Which metal is used in the making of microchips? ", "Silicon", "Iron", "Copper", "Tustin", "A"],

	// Where are located Ajanta and Ellora Caves.
	[" Where are located Ajanta and Ellora Caves.", "Odisha", "Telangana", "Maharashtra", "Karnataka", "C"],

	// The Battle of Plassey was fought in
	["The Battle of Plassey was fought in", "1757", "1782", "1748", "1764", "A"],

	// Tripitakas are sacred books of
	["Tripitakas are sacred books of", "Buddhists", "Hindus", "Jains", "None of the above", "A"],

	// Pulakesin II was the most famous ruler of
	["Pulakesin II was the most famous ruler of", "Chalukyas", "Cholas", "Pallavas", "Satavahanas", "A"],

	// Which of the following dynasty was ruling in India, when Alexander invaded India?
	["Which of the following dynasty was ruling in India, when Alexander invaded India?", "Nanda Dynasty", "Shunga Dynasty", "Maurya Dynasty", "Shishunaga Dynasty", "A"],

	// Prime Minister Narendra Modi inaugurated the Centre for Brain Research (CBR) in which state/UT?
	["Prime Minister Narendra Modi inaugurated the Centre for Brain Research (CBR) in which state/UT?", "Karnataka", "Gujarat", "Telangana", "Kerala", "A"],

	//. Which body has replaced Medical Council of India?
	["Which body has replaced Medical Council of India?", "Medical Body of India", "Medical Confederation of India", "Indian Medical Council", "National Medical Commission", "D"],

	// Indian Army has recently gifted a set of ten ventilators to which country?
	["Indian Army has recently gifted a set of ten ventilators to which country?", "Sri Lanka", "Bangladesh", "Nepal", "Myanmar", "C"],

	// If Suresh borrows Rs.36000 from Mahesh at rate of interest 6% S.I at the end of four years. How much has to pay along with Principal amount?
	["If Suresh borrows Rs.36000 from Mahesh at rate of interest 6% S.I at the end of four years. How much has to pay along with Principal amount?", "12560", "12960", "13500", "14500", "B"],

	// The eighth term in this series 2,6,18,54, _ _ _ _ _
	["The eighth term in this series 2,6,18,54, _ _ _ _ _", "4122", "4374", "5643", "7434", "B"],

	//1,8, 15, 24, ? , 48
	["1,8, 15, 24, ? , 48", "37", "44", "35", "42", "C"],

	//3*[40-3(6+4)]÷2+9=?
	["3*[40-3(6+4)]÷2+9=?", "24", "16.5", "15.5", "21", "A"],

	// Solve for x : 2x+y=8	     y=-6
	["Solve for x : 2x+y=8	     y=-6", "1", "7", "4", "16", "B"],

	// When a point is observed, the angle formed by the line of sight with the horizontal level where the point being viewed is above the horizontal plane is known as:
	["When a point is observed, the angle formed by the line of sight with the horizontal level where the point being viewed is above the horizontal plane is known as:", "Angle of Depression", "Angle of Elevation", "Angle of Triangle", "None of these", "B"],

	// How many gold won by India in Commonwealth game 2022.
	["How many gold won by India in Commonwealth game 2022.", "23", "22", "16", "18", "B"],

	// In the 2022 FIFA world cup who won the silver Boot?
	["In the 2022 FIFA world cup who won the silver Boot?", "Cristiano Ronaldo", "Kylian Mbappe", "Lionel Messi", "Thomas Mulles", "C"],

	// Which team won the t20 men"s world cup 2022?
	["Which team won the t20 mens world cup 2022?", "Pakistan", "India", "England", "Australia", "C"],

	// The Probability of an event can"t be ________
	["The Probability of an event cant be ________", "Negative", "Positive", "Both A & B", "None of these", "A"],

	// In a Lottery, these are 10 prizes and 20 banks What is probability of getting prize?
	["In a Lottery, these are 10 prizes and 20 banks What is probability of getting prize?", "1 / 10", "1 / 3", "½", "1", "B"],

	// Sin A=?/?
	[" Sin A=?/?", "Opposite side / hypotenuse", "Adjacent side / hypotenuse", "Opposite side / adjacent", "Hypotenuse side / hypotenuse", "A"],

	// Which was the largest empire in India?
	["Which was the largest empire in India?", "Mughal Empire", "Kushan Empire", "Maratha Empire", "Maurya Empire", "D"],

	// World AIDS day is being celebrated on which date?
	["World AIDS day is being celebrated on which date?", "December 4th", "December 5th", "December 1st", "December 2nd", "C"],

	// President of which country will be the chief guest at Republic Day celebrations in India 2023?
	["President of which country will be the chief guest at Republic Day celebrations in India 2023?", "Japan", "China", "Egypt", "Oman", "C"],

	// The suitable crop for black soil is 
	["The suitable crop for black soil is ", "Paddy", "Wheat", "Cotton", "Kidney beans", "C"],

	// The southernmost point of peninsular India, that is, Kanyakumari, is
	["The southernmost point of peninsular India, that is, Kanyakumari, is", "North of Tropic of Cancer", "South of the Equator", "South of the Capricorn", "North of the Equator", "D"],

	// The India"s highest annual rainfall is reported at
	// ["", "Namchi, Sikkim", "Churu, Rajasthan", "Mawsynram, Meghalaya", "Chamba, Himachal Pradesh", "C"],

	// The state having a largest area of forest cover in India is
	["The state having a largest area of forest cover in India is", "Arunachal Pradesh", "Haryana", "Madhya Pradesh", "Assam", "C"],

	// Which one of the following correctly represents the SI unit of resistivity?
	["Which one of the following correctly represents the SI unit of resistivity?", "Ω", "Ω / m", "Ω cm", "Ω m", "D"],

	// In SONAR which kind of wave is used
	["In SONAR which kind of wave is used", "Infrasonic", "Ultrasonic ", "Radio", "Audible sound", "B"],

	// What type of lens is used in a magnifying glass
	["What type of lens is used in a magnifying glass", "Concave", "Plano - concave", "Convex", "None of the above", "C"],

	// The theory of relativity is presented by which scientist
	["The theory of relativity is presented by which scientist", "Albert Einstein", "Isaac Newton", "Stephen Hawking", "Marie Curie", "A"],
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
	test.innerHTML = "<h4>" + question + "</h4>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br>";
	test.innerHTML += "<button class='btn btn-outline-info mt-3' onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
	choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[pos][5]) {
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);