const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

function squareNums(num){
    let newarr = [];
    newarr = num.map(toSquare)
    return newarr;
}
console.log(squareNums(numbers));