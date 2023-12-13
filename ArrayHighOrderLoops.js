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

myCoding.forEach((item) => {

    console.log(item.languageName);
    console.log(item.languageFileName);
    
});