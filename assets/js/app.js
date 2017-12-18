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

var el = document.querySelector('#domNode .el');

var domNode = anime({
  targets: el,
  translateX: 250
});

var CSStransforms = anime({
  targets: '#CSStransforms .el',
  translateX: 250,
  scale: 2,
  rotate: '1turn'
});