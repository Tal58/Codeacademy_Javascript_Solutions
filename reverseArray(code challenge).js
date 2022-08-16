function reverseArray(arr){
    let newarr = [];
    for (const x of arr){
        newarr.unshift(x);
    }
    return newarr
  
}
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 