//I am aware how wet this code is. I was trying a different method to
//dynamically generate buttons, and it didn't work out the way I hoped.

var pickedButton; //Used below

//Start of the question bank. Playing with different ways of orgainizing things.
var tie = {
	question: "What does TIE stand for?",
	a: "This Infernal Empire",
	b: "Thermal Interference Engine",
	c: "Twin Ion Engine",
	d: "Turbo Impulse Engine",
	correct:"Twin Ion Engine",
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
	correct:"Wedge Antilles",
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
	correct: "Executor",
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
	a: "Darth Maul",
	b: "Yoko Ono",
	c: "Emperor Palpatine",
	d: "Darth Vader",
	correct: "Yoko Ono",
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
	correct: "Red Five",
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
	correct: "Otoh Gunga",
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
	correct: "Three",
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
	correct: "Order 66",
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
	correct: "Artoo and Threepio",
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
	correct: "Mace Windu",
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
	correct: "Lobot",
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
	correct: "Mace Windu",
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
	correct: "The Death Star",
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
	correct: "Bodhi Rook",
	answer: function(click){
		console.log(this.id);
		if(pickedButton=="b"){
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
	correct: "Green",
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
	correct: "Luke Skywalker",
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
	correct: "A-wings",
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
	correct: "Scarif",
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
	correct: "Wickett",
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
	correct: "FN-2187",
	answer: function(click){
		if(pickedButton=="a"){
			$("#gameplay").html("<h3>That's right!</h3>");
		} else {
			$("#gameplay").html("<h3>That's wrong. The correct answer is " + trooper.a + ".</h3>");
		}
	},
}; //End of question bank.

var number = 30;

var count = 0; //To go through the questions list.

var questionBank = [tie, pilot, ssd, sith, flight, gungan, ds, order, characters, blade, pa, jango, stardust, rogues, color, falcon, ships, plans, ewok, trooper];

var questions = []; //Empty for now

var nextUp;

 function follow(){
 	intervalId = setInterval(decrement, 1000);
 }

function decrement(){
	number--;
	$("#display").html("<h2>" + number + "</h2>");
	if(number===0){
		console.log("It's working! It's working!");
		stop();
		$("#gameplay").html("<h3>Time's up! The correct answer is "+questions[count].correct);
		setTimeout(newQuestion, 5000);
	}
}

function stop(){
	clearInterval(intervalId); 
}

//Reset function.
function reset(){
	questions = [];
	$("#gameplay").html("<h3>Click the button to begin.</h3><button type='start' class='btn btn-success h4' id='start'>Start</button>");
	$("#theme").attr("src","assets/sounds/MainTitle.mp3");
	picked();
	stop();
	number = 30;
	count = 0;
}

//This picks the what's in questions[].
function picked(){
	for (var i = 0; i< 19 ; i++) {
		var random = Math.floor(Math.random()*20);
		var pick = questionBank[random];
		if(questions.indexOf(pick)<0 && questions.length<10){
			questions.push(pick);
		};	
		console.log(questions);
	};
}

//I set this as a function and not a for loop to see other ways I might 
//orgainize things. It also allows me to call the function several times.
function setUp(){
	var spot =$("<div>");
	var asked = $("<h3>");
	var timer = $("<div>");
	timer.attr("id", "display");
	timer.append("<h2>" + number + "<h2>");
	follow();
	spot.append(timer);
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

function playGame(){
	var spot =$("<div>");
	var asked = $("<h3>");
	var timer = $("<div>");
	timer.attr("id", "display");
	timer.append("<h2>" + number + "<h2>");
	spot.append(timer);
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

function changeQuestion(){
	console.log(count);
	if (count===questions.length){
		$("#theme").attr("src","assets/sounds/MedalScene.mp3");
		$("#gameplay").html("<h3>Thanks for playing! Click the button to play again!</h3><button type='replay' class='btn btn-success h4' id= 'replay'>Play Again</button>");
		clearInterval(nextUp);
	}
}

function newQuestion(){
	nextUp = setTimeout(changeQuestion, 5000);
	count++;
	playGame();
	number=30;
	follow()
}

$(document).ready(function(){
	count=0;
	picked();
	$("#theme").attr("src","assets/sounds/MainTitle.mp3");
	$("#gameplay").html("<h3>Click the button to begin.</h3><button type='start' class='btn btn-success h4' id= 'start'>Start</button>");
	$(document).on("click", "#start", setUp);
	$(document).on("click", ".answers", function(){
		stop();
		pickedButton = $(this).attr("id");
		questions[count].answer();
		setTimeout(newQuestion, 5000);
	});
	
	$(document).on("click", "#replay", function(){
		reset();
	});
	
});

