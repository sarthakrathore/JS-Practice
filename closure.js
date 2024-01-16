// const outer=function(){
//     var count=0
//     return function(){
//             count+=1
//             return count

//     }
// }()

// function inner(){
//     document.getElementById('demo').innerHTML=outer()
// }

// inner()


// function init(){
//     name="sarthak"
//     function displayName(){
//         console.log(`inner function ${name}`);
//     }
//     displayName()
// }
// init()
// console.log(`TOO outer ${name}`);


// const one=function(){ //IIFE closure
//     userName="vicky"
//     const two=function(){
//         console.log(userName);
//     }
//     ()
// }()


// const a1=()=>{ //Arrow function closure
//     age=22
//     const a2=()=>{
//         console.log(age);
//     }
//     a2()
// }
// a1()



// function outer(){
//     let userName="sarthak"
//     // console.log(secret); //variables not shared from inner func to outer func
//     function inner1(){
//         let secret="my123"
//         console.log(`Inner ${userName}`);

//     }
//     function inner2(){
//         console.log(`Inner ${userName}`);
//         // console.log(secret); //variables not shared between siblings

//     }
//     inner1()
//     inner2()
// }
// outer()


// console.log(`TOO outer ${userName}`);


// function goddid(){
//     var score=44
// }

// goddid()

// console.log(score);






// function makeFunc(){
//     const name="Edge"
//     function displayName(){
//         console.log(name);
//     }
//     return displayName
// }
// const myFunc=makeFunc()
// myFunc()

