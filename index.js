let a = 6
let b = 5
if (a > b) {console.log(a)}
else if (a < b) {console.log(b)}
else {console.log('a = b')};


// const x = { isHavingFun: true}
// const y = { isHavingFun: true}
// console.log (x === y) - false
// console.log (x == y) - false  This is because javascript assigns 

const x = { isHavingFun: true}
const y = x
console.log (x === y)
console.log (x == y)

const dex = true
if (dex){
    console.log ("too fast")
}
else console.log ("too slow");

const person = 'Mary Jane';
switch (person) {
  case 'Jane':
    console.log('Hi Jane');
    break;
  case 'John':
    console.log('Hi John');
    break;
  case 'Joe':
    console.log('Hi Joe');
    break;
  case 'Mary':
    console.log('Hi Mary');
    break;
  case 'Mary Jane':
    console.log('Hi MJ');
    break;
  default:
    console.log('Hi');  //The Default is useful in case there is no case matching the input, as it will show a response even if there is no matching case
    break;
}

