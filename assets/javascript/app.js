var pickedButton;

var tie = {
	question: "What does TIE stand for?",
	a: "This Infernal Empire",
	b: "Thermal Interference Engine",
	c: "Twin Ion Engine",
	d: "Turbo Impulse Engine",
	answer: function(click){
		if(pickedButton=="c"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + tie.c + ".</h3>");
		}
	},
};

var pilot = {
	question: "Who is the only pilot to survive flying against both Death Stars?",
	a: "Luke Skywalker",
	b: "Han Solo",
	c: "Lando Calrissian",
	d: "Wedge Antilles",
	answer: function(click){
		if(pickedButton=="d"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + pilot.d + ".</h3>");
		}
	},
};

var ssd = {
	question: "What is the name of Darth Vader's Super Star Destroyer?",
	a: "Executor",
	b: "Relentless",
	c: "Devastator",
	d: "Ravager",
	answer: function(click){
		if(pickedButton=="a"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + ssd.a + ".</h3>");
		}
	},
};

var sith = {
	question: "Who is NOT a Sith Lord?",
	a: "Darh Maul",
	b: "Yoko Ono",
	c: "Emperor Palpatine",
	d: "Wedge Antilles",
	answer: function(click){
		if(pickedButton=="b"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + sith.b + ".</h3>");
		}
	},
};

var flight = {
	question: "What was Luke Skywalker's call sign at the Battle of Yavin?",
	a: "Rogue One",
	b: "Blue Two",
	c: "Green Six",
	d: "Red Five",
	answer: function(click){
		if(pickedButton=="d"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + flight.d + ".</h3>");
		}
	},
};

var gungan = {
	question: "What is the name of the Gungan City Jar Jar was banished from?",
	a: "Bubble Town",
	b: "Otoh Gunga",
	c: "Otoh Raban",
	d: "Otoh Sancture",
	answer: function(click){
		if(pickedButton=="b"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + gungan.b + ".</h3>");
		}
	},
};

var ds = {
	question: "How many times does the orginal Death Star fire?",
	a: "One",
	b: "Five",
	c: "Three",
	d: "Seven",
	answer: function(click){
		if(pickedButton=="c"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + ds.c + ".</h3>");
		}
	},
};

var order = {
	question: "What was the 'kill the Jedi' order?",
	a: "Order 66",
	b: "Order 150",
	c: "Order 69",
	d: "Order 6",
	answer: function(click){
		if(pickedButton=="a"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + order.a + ".</h3>");
		}
	},
};

var characters = {
	question: "Which pair of characters is in every Star Wars movie?",
	a: "Luke Skywalker and Princess Leia",
	b: "Anakin 'Darth Vader' Skywalker and Obi-Wan Kenobi",
	c: "Chewbacca and Yoda",
	d: "Artoo and Threepio",
	answer: function(click){
		if(pickedButton=="d"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + characters.d + ".</h3>");
		}
	},
};

var blade = {
	question: "Which character has a purple lightsaber?",
	a: "Mace Windu",
	b: "Emperor Palpatine",
	c: "Obi-Wan Kenobi",
	d: "Qui-Gon Jinn",
	answer: function(click){
		if(pickedButton=="a"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + blade.a + ".</h3>");
		}
	},
};

var pa = {
	question: "Who was Lando Calrissian's assitant at Cloud City?",
	a: "Lorien",
	b: "Jrog Sacul",
	c: "Lobot",
	d: "Roons Sewell",
	answer: function(click){
		if(pickedButton=="c"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + pa.c + ".</h3>");
		}
	},
};

var jango = {
	question: "Which Jedi killed Jango Fett?",
	a: "Luke Skywalker",
	b: "Mace Windu",
	c: "Yoda",
	d: "Obi-Wan Kenobi",
	answer: function(click){
		if(pickedButton=="b"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + jango.b + ".</h3>");
		}
	},
};

var stardust = {
	question: "What was codenamed Project Stardust?",
	a: "The World Devastator",
	b: "The Super Star Destroyers",
	c: "The Starkiller",
	d: "The Death Star",
	answer: function(click){
		if(pickedButton=="d"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + stardust.d + ".</h3>");
		}
	},
};

var rogues = {
	question: "Who used the codename Rogue One?",
	a: "Wes Janson",
	b: "Bodhi Rook",
	c: "Zev Senesca",
	d: "Aril Nunb",
	answer: function(click){
		if(picked=="b"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + rogues.b + ".</h3>");
		}
	},
};

var color = {
	question: "What color is the lightsaber Luke Skywalker builds?",
	a: "Green",
	b: "Blue",
	c: "Yellow",
	d: "Red",
	answer: function(click){
		if(pickedButton=="a"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + color.a + ".</h3>");
		}
	},
};

var falcon = {
	question: "Who have we NOT seen flying the Falcon?",
	a: "Lando Calrissian",
	b: "Han Solo",
	c: "Luke Skywalker",
	d: "Leia Organa",
	answer: function(click){
		if(pickedButton=="c"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + falcon.c + ".</h3>");
		}
	},
};

var ships = {
	question: "Which type of fighters were NOT at the Battle of Yavin?",
	a: "X-wings",
	b: "TIE fighters",
	c: "Y-wings",
	d: "A-wings",
	answer: function(click){
		if(pickedButton=="d"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + ships.d + ".</h3>");
		}
	},
};

var plans = {
	question: "Where were the plans for the first Death Star located?",
	a: "Jakku",
	b: "Mustafar",
	c: "Scarif",
	d: "Jedha",
	answer: function(click){
		if(pickedButton=="c"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + plans.c + ".</h3>");
		}
	},
};

var ewok = {
	question: "Which Ewok did Princess Leia befriend?",
	a: "Logray",
	b: "Wickett",
	c: "Paploo",
	d: "Teebo",
	answer: function(click){
		if(pickedButton=="b"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + ewok.b + ".</h3>");
		}
	},
};

var trooper = {
	question: "What is Finn's stormtrooper number?",
	a: "FN-2187",
	b: "THX-1138",
	c: "TK-421",
	d: "BT-445",
	answer: function(click){
		if(pickedButton=="a"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + trooper.a + ".</h3>");
		}
	},
};

var count = 0;

var questionBank = [tie, pilot, ssd, sith, flight, gungan, ds, order, characters, blade, pa, jango, stardust, rogues, color, falcon, ships, plans, ewok, trooper];

var questions = [];

function reset(){
	questions = [];
	$("#gameplay").html("<h3>Click the button to begin.</h3><button type='start' class='btn btn-success h4' id='start'>Start</button>");
	picked();
}

function picked(){
	for (var i = 0; i< 19 ; i++) {
		var random = Math.floor(Math.random()*20);
		var pick = questionBank[random];
		if(questions.indexOf(pick)<0 && questions.length<10){
			questions.push(pick);
		};	
	};
}

function playGame(){
	var spot =$("<div>");
	var asked = $("<h3>");
	asked.append(questions[count].question);
	spot.append(asked);
	var choices =$("<div>");
	choices.append("<button class='btn-success answers' id='a'>" + questions[count].a+"</button>");
	choices.append("<button class = 'btn-success answers' id='b'>" + questions[count].b+"</button>");
	choices.append("<button class='btn-success answers' id='c'>" + questions[count].c+"</button>");
	choices.append("<button class='btn-success answers' id='d'>" + questions[count].d+"</button>");
	spot.append(choices);
	$("#gameplay").html(spot);
}

$(document).ready(function(){
	picked();
	$("#gameplay").html("<h3>Click the button to begin.</h3><button type='start' class='btn btn-success h4' id= 'start'>Start</button>");
	$(document).on("click", "#start", playGame);
	$(document).on("click", ".answers", function(){
		pickedButton = $(this).attr("id");
		questions[count].answer();
	});
	
});

