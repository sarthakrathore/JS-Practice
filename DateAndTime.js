// Dates ==> Date is an object
let myDate = new Date()
// console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString('en-IN'));
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myCreatedDate=new Date(2023,3,2)
// let myCreatedDate=new Date(2023,3,2,5,3)
// let myCreatedDate=new Date("2023-01-14")
let myCreatedDate=new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString('en-IN'));


let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:'long'
    
})
console.log(newDate);