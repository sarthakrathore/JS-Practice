// function first(){
//     name="sarthak"
//     age=22
//     console.log(name);
//     console.log(age);


// }

// first()
// console.log(name);
// console.log(age);


// const two=function(){
//     console.log("two");
// }()



// const three=()=>{
//     console.log("three");

// }

// three()


const add=(num1,num2)=>{

    if(typeof (num1 && num2 ===Number)){
        console.log(num1+num2);
    }
    else{
        console.log("Invalid datatype");
    }

    console.log(num1+num2);
    return num1+num2 

}

const a=add(3,4)
console.log("Result:",a);