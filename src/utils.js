console.log('util is running');

const square = (x) =>  x * x;

const add = (a,b) => a+b;

const subtract = (a,b) => a -b;

//Assim ou  pode colocar export na frente do método
export { square , add, subtract as default};