function dogFactory(name, breed, weight){
    newobj = {};
    newobj.name = name;
    newobj.breed = breed;
    newobj.weight = weight;
    return newobj;
}
console.log(dogFactory('Joe', 'Pug', 27))

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats(num) {
          if (num > 0){
            return console.log(this._weight +=1);}
        },
        print(){
          console.log(`${this.name}, ${this.breed}, ${this.weight}, ${this.bark()}`);
        }
    }
}

let rex = dogFactory('Rex', 'Labrador', 25);
rex.print();
rex.eatTooManyTreats(1);