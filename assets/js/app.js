/** trivia game pseudo


make objects for each question, probably using key 
pairs for question and answer


make a start game button that disappears once pressed

start button press starts first function

the first function displays object 1, and begins first timer
display the countdown timer in seconds
if the timer gets below 5 seconds, change timer color to red  

if correct answer is selected and the timer has not run out, 
object is hidden again, and player is displayed a positive
message. 

else if the wrong answer is picked, a negative message displays

else the timer runs out, and a negative message displays 

the player moves to next question automatically after positive 
or negative message **/

var questionsAndAnswers = [
	{
	'question1': 'Which final fantasy debuted in 1997?', 
	'answer1X': 'Final Fantsasy VII',
	'answer2': 'Final Fantasy VIII',
	'answer3': 'Final Fantasy Tactics',
	'answer4': 'Final Fantasy V'
	},
	{
	'question1': 'What SNES game was ported from japan in 1994', 
	'answer1X': 'Mother II',
	'answer2': 'Legend of Mana',
	'answer3': 'Secret of Gaia',
	'answer4': 'Harvest Moon'
	},
	{
	'question1': 'Which of the following was an Easter Egg from "Halo: Combat Evolved Anniversary Edition"?', 
	'answer1X': 'Troll Meme In Pillar of Autumn Message board',
	'answer2': 'Grunt headshots make screaming noise',
	'answer3': 'Elites hugged each other at end',
	'answer4': 'Chief curses if his gun is jammed'
	},
	{
	'question': 'What do you get from the secret gnome house in year 1 of Harvest Moon?', 
	'answer1': 'Golden Hoe',
	'answer2X': 'Golden Sickle',
	'answer3': 'Golden Axe',
	'answer4': 'Golden Sprinkler'
	},
	{
	'question': 'How many flutes do you need to skip to work 8 from world 1 in Super Mario Brothers 3?', 
	'answer1': '1',
	'answer2X': '2',
	'answer3': '3',
	'answer4': '4'
	},
	{
	'question': 'Who is Links Nemesis?', 
	'answer1': 'Ganon',
	'answer2': 'Bowser',
	'answer3': 'Final Fantasy Tactics',
	'answer4': 'Final Fantasy V'
	}
];

$question = $('.question');
$answer1 = $('answer1');
$answer2 = $('answer2');
$answer3 = $('answer3');
$answer4 = $('answer4');
$score = $('.score')

counter = 0;
score = 0;

$('.answer4').append(questionsAndAnswers[0].Answer4);
console.log(questionsAndAnswers[0].answer4);


trekApp.init = function() {
  var selection = questionsAndAnswers[0];
  type = selection["answer"];
  $question.html(questionsAndAnswers["question1"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}



function displayScore(){



};

function calculateScore(){

};

function startGame(displayQuestion){

	$("#start").click();
	displayscore();
	displayquestion();


};

