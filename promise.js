// const promiseOne=new Promise(function(resolve,reject){

//     setTimeout(function() {

//         console.log("Async task is complete");
//         resolve()
        
//     }, 2000);

// })


// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })




// new Promise(function(resolve,reject){

//     setTimeout(() => {

//         console.log("Async task 2");
//         resolve()
        
//     },2000);
// }).then(function(){
//     console.log("new promise 2")
// })



// const promiseThree=new Promise((resolve,reject)=>{

//     setTimeout(() => {

//         resolve({username:'sarthak',email:'sarthak@gmail.com'})
        
//     }, 2000);

// })


// promiseThree.then((user)=>{

//     console.log(user);

// })



// const promiseFour=new Promise(function(resolve,reject){

//     setTimeout(() => {
//         let error=true
//         if(!error){
//             resolve({firstname:'sarthak',lastname:'rathore'})
//         }
//         else{
//             reject('ERROR .Something went Wrong')
//         }
//     }, 2000);

// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.firstname

// })
// .then((firstname)=>{

//     console.log(firstname);

// })
// .catch((error)=>{

//     console.log(error);

// })
// .finally(()=>{

//     console.log("The promnise is either resolved or rejected");

// })




// const promiseFive=new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         let error=true
//         if(!error){
//             resolve({course:'JS',id:'123'})
//         }
//         else{
//             reject('ERROR:JS went wrong')
//         }
//     }, 2000);

// })

// async function consumePromiseFive(){
//     // const response=await promiseFive
//     // console.log(response);

//     try {

//     const response=await promiseFive
//     console.log(response);

        
//     } catch (error) {
//         console.log(error);
        
//     }
// }


// consumePromiseFive()



// async function fetchAllUsers(){
//    try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data);

//    } catch (error) {

//     console.log("could not fetch data",error);
    
//    }

// }

// fetchAllUsers()




fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{

    return response.json()

})
.then((data)=>{
    console.log(data);
})

.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("this is the finally statement");
})