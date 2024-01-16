class Employee{

    constructor(name,age){
        this.name=name
        this.age=age
    }

    greet(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}


const user1=new Employee("sarthak",22)
console.log(user1.name);


