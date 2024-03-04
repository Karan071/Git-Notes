let name = {
    firstName : `Karan`,
    lastName : `Chourasia`,
    printName : function () { 
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
name.printName();

const name2 = {
    firstName: `Mahendra`,
    lastName: `Dhoni`
}

//function borrowing
//callf method 
name.printName.call(name2);