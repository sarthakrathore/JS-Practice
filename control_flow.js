// if

if (false) {

    console.log("print");
    
}



const month=2
switch (month) {
    case 1:

        console.log("jan");
        break;

    case 2:

        console.log("feb");
        break;

    case 3:

        console.log("mar");
        break;

    default:
        console.log("default");
        break;
}

const arr=[]

if (arr.length===0) {

    console.log("array is empty");
    
}

else{
    console.log("array is not empty");
}

const emptyobject={}

if (Object.keys(emptyobject).length===0)//return an array 
{

    console.log("object is empty");
    
}
else{
    console.log("object is not empty");
}

// falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN


// truthy values
// "0","false"," ",{},[],function(){}


// Nullish Coalescing Operators(??) ==>null,undefined

let val1
// val1=5??10
// val1=null??10
val1=undefined??10
console.log(val1);

let val2=null??4
console.log(val2);


// Ternary Operator

// condition ? true:false

const price=100

price>=170?console.log("true"):console.log("false");;