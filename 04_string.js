var greet="Good morning";
console.log(greet);

 var count =greet.length;
console.log(count);
console.log(greet.length);

 var sonali =greet.charAt(8);
 console.log(sonali);
 console.log(greet.charAt(8));

var char= greet.indexOf("o");
console.log(greet.indexOf("o"));

console.log("===========concat======================");

var f_name="virat";
var l_name="kohli";
var result=f_name.concat(l_name);
console.log(result);

console.log("================replace============");
var greet="Good morning bro and sis";
var replacedemo=greet.replace("Morning", "Evening");
console.log(replacedemo);


console.log("==========toUpperCase & toLowerCase==========");
replacedemo.toUpperCase()
console.log(replacedemo.toUpperCase());
console.log(replacedemo.toLowerCase());

console.log("============trim========");
var greet="   Good morning bro and sis   ";  
console.log(greet.length);
var trim_result=greet.trim();
console.log(trim_result.length);

console.log("======includes===============");
var greet=" Good morning bro and sis"
console.log(greet.includes("bro"));

console.log("===========substring==========");
var greet=" Good morning bro and sis"
console.log(greet.substring(8));
console.log(greet.substring(13,17));

console.log("===========slice==========");
console.log(greet.slice(13));
console.log(greet.slice(13,17));

console.log("===========split==========");
var studentlist="sunil,anil,anita,teja,asha";
var split_result=studentlist.split("|");
console.log(split_result);

console.log("=============string template=========");
var imp_quote=`"Do or Die" this attitude is important for this training`;
console.log(imp_quote);

console.log("=======================");
var f_name="virat";
var l_name="kohili";
console.log(`First name=${f_name} and Last name=${l_name}`);