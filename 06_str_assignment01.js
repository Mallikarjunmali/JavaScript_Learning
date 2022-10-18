// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
   console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
   //var myString = "Good Morning IT Champ";
   var vowelsLoweCase = "aeiou";
   var vowelUpperCase = "AEIOU";
   var vowelsCount=0;
   for (let index = 0; index < myString.length; index++) {
      var char =  myString.charAt(index);
      var isLowerAvailable =  vowelsLoweCase.includes(char);
      var isUpperAvailable =  vowelUpperCase.includes(char);
      if (isLowerAvailable || isUpperAvailable) {
           vowelsCount = vowelsCount + 1;
      }
   }
   console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");


console.log("===================================================");

//Write a function to count vowels from the given string "I love JavaScript"
console.log("Count of vowel using function");

    //Write a function to count total number of vowels

    function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("I Love JavaScript"));

console.log("===================================================");
    

//Write a function expression to sum all numbers from 1 to 10.
console.log("sum of number from 1 to 10 using function exp");
var sumNum=function(){
  var count=0;
  for (let index = 0; index <=10; index++) {
    count=count+index;
    
  }
  console.log(`Sum of number 1-10 is:${count}`);
}
sumNum();

console.log("===================================================");

//Write a function to get the sum of suare numbers from 1 to 5.
function sumOfSquare(){
  var sum=0;
  for (let index = 1; index <=5; index++) {


    sum=sum+(index*index);
    
  }console.log(sum);
}
sumOfSquare();

console.log("===================================================");

function evenPositionChar(str) {
  for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);

    if(index %2==0 && char!=(" "))
    {
      console.log(char);
    } 
  } 
  }
  evenPositionChar("Hard Work Always Pays Back");
  console.log("..................................................................");
  evenPositionChar("Soon I will be Angular IT Champ");

  console.log("===================================================");

  function oddPositionChar(str) {
    for (let index = 0; index < str.length; index++) {
      var char=str.charAt(index);
  
      if(index %2!=0 && char!=(" "))
      {
        console.log(char);
      } 
    } 
    }
    oddPositionChar("Hard Work Always Pays Back");
    console.log("..................................................................");
  
    oddPositionChar("Soon I will be Angular IT Champ")
    



    
