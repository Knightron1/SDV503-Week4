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
    console.log('Hi');  //The Default is useful in case there is no value matching the input, as it will show a response even if there is no matching case
    break;
}

// const foo = -3;
// switch (foo) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log('I like this number');
//     break;
//   case -1:
//   case -2:
//   case -3:
//   case -4:
//     console.log('I love this number');
//     break;
//   default:
//      console.log('I don\'t like this number.');
// }

const foo = 1;
let output = '';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'How ';
    output += 'Old ';
  case 2:
    output += 'Are ';
  case 3:
    output += 'You';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += 'Old?';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}   

const year = 1990
switch (year) {
    case 1990: {
        let year = 1990;
        console.log(2020-year)
    }
    break;
    case 1991: {
        let year = 1991;
        console.log(2020-year)
    }
    break;
    case 1992: {
        let year = 1992;
        console.log(2020-year)
    }
    break;
    case 1993: {
        let year = 1993;
        console.log(2020-year)
    }
    break;
    case 1994: {
        let year = 1994;
        console.log(2020-year)
    }
    break;
    case 1995: {
        let year = 1995;
        console.log(2020-year)
    }
}
console.log(2020-year)