// const coding=['js','ruby','java','python','cpp']

// const values=coding.forEach(element => {

//     console.log(element);
//     // return element //foreach doesnt return anything and this is a problem with foreach loop
    
// });
// console.log(values);


// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const myNum=numbers.filter((num)=>{ //returns array

//    return num>4

// })
// console.log(myNum);



// Map method

// used because foreach doesnt 'return' 

// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNum.map((num)=>{

//    return num+10
   
// })

// console.log(newNum);


// Reduce method
// can be used in shopping carts to add item prices

// const myNums=[1,2,3]

// const myTotal=myNums.reduce((acc,currval)=>{

//    console.log(`acc "${acc} and currval: ${currval}`);

//    return acc+currval

// },0 ) //initial value
// console.log(myTotal);



const shoppingCart=[
   {
      itemname:"JS basic course",
      price:599
   },
   {
      itemname:"c++ course",
      price:1599
   },
   {
      itemname:"Mobile Dev course",
      price:2599
   },
   {
      itemname:"Data Science",
      price:12599
   },
]


const add=shoppingCart.reduce((acc,item)=>{

   if(typeof (item.price===Number)){

      return  acc+ item.price

   }

   else{

      console.log("ERROR");
   }

  

},0)

console.log(add);






