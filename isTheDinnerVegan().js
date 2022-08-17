function isTheDinnerVegan(arr){
    counter = 0
    for (const x of arr){
        if (x.source =="plant"){
            counter++;
        }
    }
    return (arr.length == counter) ? true:false;

}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))