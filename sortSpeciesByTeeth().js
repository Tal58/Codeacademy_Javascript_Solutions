const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

function sortSpeciesByTeeth(arr){
    newarr = [];
    newarr2 = [];
    for (const x of arr){
       newarr.push(x.numTeeth);
    }
    newarr.sort();
    for (const x of newarr){
        for (const y of arr){
            if (y.numTeeth == x){
                newarr2.push(y);
            }

        }
    }
    return newarr2;
}

console.log(sortSpeciesByTeeth(speciesArray))