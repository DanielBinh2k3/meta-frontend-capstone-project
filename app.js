// Arrow Function
const logger = (log) =>{
    console.log(log);
}
logger('message');

const sum = (a, b) => a+b;
console.log(sum(2,3));
const object = (a, b) => ({a:a, b:b});
console.log(object(2,3));

// arrow function is not constructor --> cannot use with this.object
