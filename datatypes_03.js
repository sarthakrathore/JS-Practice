// Primitive ==>call by value

// 7 types: string,symbol,null,number,boolean,bigint,undefined

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId);



const bigNumber= 6587698689958n



// Referenece Type(Non-Primitive type)

// Array,Objects,Functions


const heros= ["shaktiman","naagraj","krish"]
const superheros= ["ironman","spiderman","batman"]

const combinedHeros=[...heros,...superheros]
console.log(combinedHeros);




let myObj={
    name:"sarthak",
    age:22,
}



const myFunc= function(){

    console.log("Hello World");
}()


console.log(typeof bigNumber); 
