let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;
if (age >18) {
  console.log(`You are adult and your race number is ${raceNumber}`);
}
else {console.log("Your are not adult")}

if ((age>18) && (registeredEarly===true)) {
  console.log("You will race at 9:30 AM.")
}
else if (age>18){
  console.log(`You did not register early, you will race at 11:00 AM and your race number is ${raceNumber}`)
}
else if (age <= 18) {
  console.log(`You will race at 12:30 PM and your race number is ${raceNumber}`)
}
