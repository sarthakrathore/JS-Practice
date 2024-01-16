// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data); 
// })
// .catch((error)=>{
//     console.log("this is error",error.message);
// })
// .finally(()=>{
//     console.log("this should be printed nonetheless");
// })



fetch('https://api.github.com/users/sarthakrathore')
.then((resposne)=>{
    return resposne.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})