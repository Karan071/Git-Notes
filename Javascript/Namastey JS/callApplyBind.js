let name = {
    firstName : `Karan`,
    lastName : `Chourasia`,
};

let printName =  function (hometown, state) { 
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}
printName.call(name,"Delhi","New Delhi");

const name2 = {
    firstName: `Mahendra`,
    lastName: `Dhoni`
}

//function borrowing -> borrowing functions other objects
//call method 
printName.call(name2,"Andheri","Mumbai");

//Apply method
//->alomost like apply method we pass the parameters in arraylist
printName.apply(name2, ["Mumbai","Maharashtra" ]);


//bind method  -> gives you a copy that can be invoked later
let printMyName = printName.bind(name2, "Dehradun", "Uttarakhand");
console.log(printMyName);
printMyName();