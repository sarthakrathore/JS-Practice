const myArr=[0,1,2,3,4,5]
console.table(myArr)
console.log(myArr[3])


const myArr2=new Array(6,7,8,9)
console.table(myArr2)
console.log(myArr2.includes(7))   // Gives boolean value
console.log(myArr2.indexOf(7))



const newArr= myArr.join()
console.log(myArr);
console.log(newArr);





//slice and splice


console.log("A",myArr)

const myn1= myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr)


const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr)


 