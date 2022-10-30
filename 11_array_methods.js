let array_of_numbers=[1,3,7,8,9,3,7];
array_of_numbers[4] =11;
console.log(array_of_numbers);

console.log(array_of_numbers.includes(7));
console.log(array_of_numbers.includes(9));

for (let index = 0; index < array_of_numbers.length; index++) {
    const element = array_of_numbers[index];
    console.log(element);
    
}

for (const index in array_of_numbers) {
    
        const element =array_of_numbers [index];
        
    }
    let total_elements=array_of_numbers.length-1;

    for (let index = total_elements; index >=0; index--) {
        const element =array_of_numbers [index];
        console.log(element);
        
    }


    console.log(total_elements);
    array_of_numbers.unshift(5);
    array_of_numbers.unshift(0,99,77,66);
    console.log(array_of_numbers);

    console.log("===============shift()==============");
    let array=(11, 22, 47, 81);
    console.log(array);
    array.shift();
    console.log(array);

    console.log("===============slice()==============");
    let array_of_numbers=[1,3,7,8,9,3,7];
    let slice_elements=array_of_numbers.slice(2);
    console.log(slice_elements);
    let sliced_values=array_of_numbers(1,4);
    console.log(sliced_values);

    console.log("===============splice()==============");
    let array_of_numbers=[1,3,7,8,9,3,7];
    console.log(array_of_numbers);
    let spliced_elements=array_of_numbers(4);
    console.log(splice_elements);
    console.log(array_of_numbers);







