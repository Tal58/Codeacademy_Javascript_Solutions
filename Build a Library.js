class Media{
  constructor(title){
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }
  get title(){
    return this._title
  }
  get isCheckedOut(){
    return this._isCheckedOut
  }
  // set isCheckedOut(checkIn){
  //    this._isCheckedOut = checkIn;
  // }
  get ratings(){
    return this._ratings
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut
    return this._isCheckedOut
  }
  getAverageRating(){
    return this._ratings.reduce(getSum, 0)/this._ratings.length
function getSum(total, num) {
  return total + num;
}
  }
  addRating(arr){
    this._ratings.push(arr)
  }
}

//Class Book

class Book extends Media {
  constructor(author, title, pages){
     super(title);
  this._author = author; 
  this._pages = pages;
  this._isCheckedOut = false;
  this._ratings = []
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
  }

//Class Movie

class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
console.log(historyOfEverything.title)
console.log(historyOfEverything.toggleCheckOutStatus())
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())
const speed = new Movie('Jan de Bont',"Speed",116)
console.log(speed.title)
console.log(speed.toggleCheckOutStatus())
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

