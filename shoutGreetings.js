function shoutGreetings(arr) {
    newarr = [];
    for (const x of arr) {
        newarr.push(x.toUpperCase() + "!");                    
    }
    return newarr
}
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))