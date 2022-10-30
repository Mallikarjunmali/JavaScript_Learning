const person={ 
    name:"Mohit",
    rollNo:1234

}
Object.freeze(person);

person.name="Mohit sharma";
person.street="Ac club";
console.log(person);

const arrayNumbers=[2,4,5,6,7];
Object.freeze(arrayNumbers);
arrayNumbers.push(99);
console.log(arrayNumbers);


const student={ 
    name:"Mohit",
    rollno:1234
}
const adress={ 
    city:"Pune",
    street:"AS CLUB"
}
let studentClone=Object.assign({}, student);
studentClone.name="Mohit sharma";
console.log(studentClone);
console.log(student);
let mergeOject=Object.assign({}, student, adress);
console.log(mergeOject);