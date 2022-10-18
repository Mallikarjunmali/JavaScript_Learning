// WAP Print numbers from 5 to  15 by incrementing 1:

for (let index = 5; index<15; index++) {
    console.log(index);
    
}

// WAP Print numbers from 50 to  40 by decrementing by1:

for (let index = 50; index>40; index--) {
    console.log(index);
    
}

//WAP to find first 10 even number
var count_even=0;
for (let index = 0; index<9; index++) {
    if (index%2==0){ 
        console.log(index);
        count_even=count_even+1;
        if(count_even=10){
            break;
        }
    }
    
    
}