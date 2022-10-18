var square=function(arg1){ 
    console.log(arg1* arg1);
}
console.log("square of value 5 :");
square(5)
console.log("square of value 6 :");
square(6);
console.log("square of value 25");
square(25);
console.log("square of value 100");
square(100);

console.log("=====================================");

console.log("Function Type;");
console.log(typeof square);

console.log("===================");

 var test =function(arg1,arg2,result){ 
    console.log("Area of triangle");
    result=1/2*arg1*arg2;
    return result;

}
var area_of_traingle=test(45,34);
console.log(area_of_traingle);
console.log("================================");

var test=function(arg1,arg2,result){ 
    console.log("area_of_rectangle");
    result=arg1*arg2;
    return result;

}
var area_of_rectangle=test(499,917);
console.log(area_of_rectangle);
console.log("=============================");

var swap_values=function(arg1,arg2){ 
    var temp;
    console.log("values_before_swapping");
    console.log("",arg1,arg2);
    temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("values_after_swapping");
    console.log("",arg1,arg2);
    

}
swap_values('Virat','Anushka');
swap_values(1000,2000);

console.log("=======================");

var stringuse="Javascript is the most popular language"
console.log('Total characters Available inThe string:');
var length=stringuse.length;
console.log(length);



console.log('The Index of character S:');
console.log(stringuse.indexOf('s'));

console.log("===============================");

console.log('The Index of string of language:');
console.log(stringuse.indexOf('lang'));

console.log("==============================");




 console.log('last character string:');
 console.log(stringuse.charAt (stringuse.length-1));

console.log("===========================");

console.log('Thirdlast character of string:');
console.log(stringuse.charAt(stringuse.length-3));



 