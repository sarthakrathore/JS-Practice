const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// const myNewObject=Object.create(null) //we can also create a object using this way

const chai={
    name:"ginger chai",
    price:250,
    isAvaliable:true,

    oredrChai:function(){
        console.log("chai nhi bani");
    }

}
// chai.name="milk tea"
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai) ) {

    if (typeof value!='function') {

        console.log(`${key}:${value}`);
        
    }
 
}