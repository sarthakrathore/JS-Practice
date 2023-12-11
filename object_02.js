const redditUser=new Object()  //singleton object
redditUser.id="123abc"
redditUser.name="newPotato"
redditUser.isLoggedIn=false


const redditUser1=redditUser

console.log(redditUser===redditUser1);
console.log(redditUser1.name);
console.log(redditUser.name);


// console.log(redditUser);

// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"sarthak",
//             lastname:"rathore"
//         }
//     }
// }

// console.log(regularUser.fullname?.userfullname.firstname);


// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
 
// // const obj3={obj1,obj2}
// // const obj3=Object.assign({},obj1,obj2) //param1 is target and rest param is source
// const obj3={...obj1,...obj2}
// // console.log(obj3);
// // console.log(obj1===obj3);


// const users=[ //genereally used when data comes from database
//     {
//         id:1,
//         email:"1@gmail.com",
//     },
//     {
//         id:2,
//         email:"2@gmail.com",
//     },
//     {
//         id:3,
//         email:"3@gmail.com",
//     }
// ]

// users.forEach((element) => {

//     console.log(element.id);
//     console.log(element.email);
    
    
// });

// // users[1].email
// console.log(redditUser);
// console.log(Object.keys(redditUser)); //return datatype is array
// console.log(Object.values(redditUser)); //return datatype is array
// console.log(Object.entries(redditUser)); //return datatype is array

// console.log(redditUser.hasOwnProperty('isLoggedIn')); //return datatype is array


