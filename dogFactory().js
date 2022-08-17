function dogFactory(name, breed, weight){
    newobj = {};
    newobj.name = name;
    newobj.breed = breed;
    newobj.weight = weight;
    return newobj;
}
console.log(dogFactory('Joe', 'Pug', 27))