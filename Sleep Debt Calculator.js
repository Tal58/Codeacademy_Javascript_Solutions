const getSleepHours = day => {
  if (day === 'monday') {
    return 8;}
  else if  (day === 'tuesday') {
    return 7;}
  else if (day === 'wednesday') {
    return 6;}
  else if (day === 'thursday') {
    return 8;}
  else if (day === 'friday') {
    return 5;}
  else if (day === 'saturday') {
    return 7;}
  else if (day === 'sunday') {
    return 8;}}

console.log(getSleepHours("sunday"))

const getActualSleepHours = () => { let sum = getSleepHours("monday") +
  getSleepHours("tuesday")+ getSleepHours("wednesday")+  getSleepHours("thursday")+  getSleepHours("friday")+  getSleepHours("saturday")+getSleepHours("sunday")
  return sum;}
console.log(getActualSleepHours())

const getIdealSleepHours = () =>{
  var idealHours = 8
  return idealHours * 7;
}

console.log(getIdealSleepHours())
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect amount of sleep");
  }if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
  }if (actualSleepHours < idealSleepHours) {
    console.log(`You need ${idealSleepHours-actualSleepHours} hours to get fit.`);
  }
}
calculateSleepDebt()

