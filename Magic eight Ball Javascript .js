var userName = ""
userName ? console.log('Hello, Jane!'): console.log('Hello!');
var userQuestion = "What is your name?"
console.log("What is your name?")
var randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)
let eightBall = "";
if ((randomNumber >=0) && (randomNumber < 1)) {
  eightBall = 'It is certain'; }  
else if ((randomNumber >=1) && (randomNumber < 2))
  {eightBall = 'It is decidedly so';}
  
else if ((randomNumber >=2) && (randomNumber < 3))
  {eightBall = 'Reply hazy try again';}
  
else if ((randomNumber >=3) && (randomNumber < 4))
  {eightBall = 'Cannot predict now';}
else if ((randomNumber >=4) && (randomNumber < 5))
  {eightBall ='Do not count on it';}
else if ((randomNumber >=5) && (randomNumber < 6))
  {eightBall = 'My sources say no';}
  
else if ((randomNumber >=6) && (randomNumber < 7))
  {eightBall = 'Outlook not so good';}
else if ((randomNumber >=7) && (randomNumber < 8))
  {eightBall = 'Signs point to yes';}

console.log(`Mihail Tal was here number is ==>>${randomNumber} and the answer is ==>>${eightBall}`)
  console.log(eightBall)