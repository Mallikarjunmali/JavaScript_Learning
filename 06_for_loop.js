//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);
//console.log(6);


//console.log(10);

for (var test = 1; test<=10; test++) {
    console.log(test);
    
}

//0 2 4 6 8 10
for (let index = 0; index<=10; index=index+2) {
    console.log(index);
    
}

//Infanite loop
for (let index = 50; index>40; index--) {
    console.log(index);
    
}

//Wap to find firsr 43 even number
var count_even=0;

for (let index = 0; index<1000; index++) {
    if (index%2==0){
        console.log(index);
        count_even=count_even+1;
        if (count_even=43) { 
            break;
        }

    }
    
}

    
