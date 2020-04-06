
let x = 5 
// if (x > 4) {console.log('true')}
// else {(console.log('false'))}

let y = x > 4 ? 'true' : 'false';
console.log(y)

function foo(x, y, z, d, ...args) {
    return console.log (x,y,z,d, args)
}

foo(1, 2, 3, 4, 5, 6, 7)

function asd(...args){
    console.log(args[5])
}

var arr = [1,2,3,4,5,6,7]

asd(...arr)

function top(...testing){
    console.log(testing[4]);
}

top(1, 'two', true, 'three', 'four')