var quote= `     Hey you are doing good,keep it up.      `
console.log(quote);
console.log(`========================`);
console.log(`string length`);
console.log(quote.length);
console.log(`========================`);
console.log(`The total no. of extra spaces available in the string:-`);
var r1=quote.split(` `).length-1;
console.log(r1);
console.log(`========================`);

var result=quote.trim();
console.log(`After spaces removed:-`);
console.log(result);
console.log(`========================`);

console.log(result.length);

console.log(`========================`);

var r3=result.split('').length-1;
console.log(`The spaces removed`);
console.log(r3);
console.log(`========================`);

var string=`Hey you are good,keep it up`;
var r4=string.slice(1,string.length-1);
console.log(r4);
console.log(`First character after trim:-H 
last character after trim:-p `
);
console.log(`===========================`);
var r5=result.split(' ').length;
console.log(`Total words available:-`,r5);
console.log(`===========================`);
console.log(`is string ends with "up":- `);
console.log(result.includes('good'));
console.log(`===========================`);
var r6=result.substring(22);
console.log(`String after substring from index 22:- `,r6);
console.log(`===========================`);
console.log(`is string ends word "Hey":- `);
console.log(result.includes ('Hey'));