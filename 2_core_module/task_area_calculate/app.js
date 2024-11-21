const area_calc = require('./area_calc');

const data=process.argv;
console.log(data);

switch(data[4]){
    case 'r':
        console.log(area_calc.rectangle(data[2],data[3]));
        break;
    case 't':
        console.log(area_calc.triangle(data[2],data[3]));
        break;
    default:
        console.log("Invalid");
}


