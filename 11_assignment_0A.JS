let bank_sbi={
    bank_name:"State Bank Of India",
    bank_branch:"Jath",
    branch_code:776034,
    IFSC_code:"SBI0000456"
}

let bank_location={
    street:"Sangli Road",
    city:"Jath",
    pin_code:416412,
    state:"Maharashtra"
}

let bank_sbi_details =Object.assign({},bank_sbi,bank_location)

console.log(`1. Using string template result ${bank_sbi_details}`); 

console.warn("====================== Using the  Object.assign () Method  =================================");
console.table(bank_sbi_details);

let bank_details={...bank_sbi,...bank_location}

console.warn("===================== Using the Spared Operator {...} ==================================");
console.table(bank_details);

let rate_of_interest ={ 
    home_lone_interest : "12.5%",
    personal_lone_interest: "13.5%",
    due_interest:"14%"
}
let bank_detail={...bank_sbi,...bank_location,...rate_of_interest}
console.warn("===================== Marge Step-1,Step-2,Step-4 Bank Details ==================================");
console.table(bank_details);

console.warn("===================== Traverse by using For in Loop the Bank Details ==================================");

    
for (const key in bank_details) {
    if (Object.hasOwnProperty.call(bank_details, key)) {
        const element = bank_details[key];
        console.log(`${key} : ${element}`);
    }
}