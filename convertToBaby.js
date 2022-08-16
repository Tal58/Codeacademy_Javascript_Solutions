function convertToBaby(arr){
    let newarr = [];
    for (x of arr){
        newarr.push(`baby ${x}`);
    }
    return newarr
}
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 