// Rest operators returns array

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,6000));





const user=new Object({username:"sarthak",price:199})
const handleObject=(anyobject)=>{

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject(user)


// const arr= new Array([1,2,3,4,5])
const arr=[1,2,3,4,5]
const handleArray=(anyarray)=>{

    return anyarray[2]
    
}

console.log(handleArray(arr));

  