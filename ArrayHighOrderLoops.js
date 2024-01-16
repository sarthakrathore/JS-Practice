// // forof loop doent work for objects so we use forin loop instaed 
// // We cannot use forin loop for maps

// const arr=[1,2,3,4,5]

// // for (const num of arr) {

// //     console.log(num);
    
// // }

// for( i in arr){
//     console.log(i);
// }
// for( i in arr){
//     console.log(arr[i]); //to get values using forin
// }


// // Maps
const map=new Map()
map.set(1,"jan")
map.set(2,"feb")
map.set(3,"mar")

// for (const [key,value] of map) {

//     console.log(key,"-",value);
    
    
// }


// for (const key in map) {

//     console.log(key);
  
// }


const coding=['js','ruby','java','python','cpp']
//callback function doesnt have name 
// coding.forEach(code => {


//     console.log(code);
    

    
// });


// coding.forEach((item,index,arr) => {


//     console.log(item,index,arr);
    
// });



const myCoding=[  //IMP Example
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'python',
        languageFileName:'py'
    },
    {
        languageName:'Ruby',
        languageFileName:'R'
    },
]

// myCoding.forEach((item) => {

//     console.log(item.languageName);
//     console.log(item.languageFileName);
   
    
// });

// for (const iterator of myCoding) {

//     console.log(iterator);
    
// }

// myCoding.map((item)=>{
//     console.log(item);
// })

// for (let index = 0; index < myCoding.length; index++) {
//     const element = myCoding[index];
//     console.log(element);
    
// }

// for (const key in myCoding) {
//     console.log(key, myCoding[key]); // Logs both key and value
// }


const obj={
    cities:['ngp','agra'],
    players:['virat','rohit'],
    numbers:[1,2],
}

// for (let index = 0; index < obj.length; index++) {
//     const element = obj[index];
//     console.log(element);
    
// }


// for (const key in obj) {

//     console.log(key,obj[key]);
// }

// for (const iterator of obj.cities) {
//     console.log(iterator);
    
// }


// obj.forEach(element => {

//     console.log(element);
    
// });


const cities=['ngp','agra','hyd']

// for (let index = 0; index < cities.length; index++) {
//     const element = cities[index];
//     console.log(element);
    
// }

// for (const iterator of cities) {

//     console.log(iterator);
    
// }

// for (const key in cities) {
//     console.log(`${key},${cities[key]}`);
// }


// cities.forEach(element => {

//     console.log(element);
    
// });

// cities.map((element)=>{
//     console.log(element);
// })

// cities.filter((Element)=>{
//     console.log(Element);
// })

// cities.reduce((Element)=>{
//     console.log(Element);
// },'hyd')


const user={
    userName:"sarthak",
    age:22,
    isAlive:true
}

// for (const key in user) {
//    console.log(`${key},${user[key]}`);
// }



const numbers=[1,2,3,4,5,6,7,8,9,10,11]

const m=numbers.map((item)=> item*item)
console.log(m);

numbers.forEach((item)=>{
    console.log(item*item);
})


const f=numbers.filter((item)=>item>5)
console.log(f);

const r=numbers.reduce((acc,num)=>acc+num,0)
console.log(r);