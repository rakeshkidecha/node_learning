const calculator = require('./calculator');
const data = process.argv;
// console.log(data);

switch(data[4]){
    case '+':
        console.log(calculator.sum(parseInt(data[2]),parseInt(data[3])));
        break;
    case '-':
        console.log(calculator.sub(data[2],data[3]));
        break;
    case '*':
        console.log(calculator.multi(data[2],data[3]));
        break;
    case '/':
        console.log(calculator.div(data[2],data[3]));
        break;
    case '%':
        console.log(calculator.mod(data[2],data[3]));
        break;
    default:    
        console.log("invalid")
}
