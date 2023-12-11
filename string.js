const name="sarthak"
const repoCount=10

// console.log(name+repoCount+"Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


const surname=new String("rathore-singh")


console.log(surname[1]);
console.log(surname.__proto__);


console.log(surname.length);
console.log(surname.toUpperCase());
console.log(surname.charAt(2));
console.log(surname.indexOf("h"));

const newString=surname.substring(0,4) //start band end parameters
console.log(newString);
const newString1=surname.substr(0,5) //index and length as parameters
console.log(newString1);

const anotherString= surname.slice(0,9)
console.log(anotherString);

// cannot give neagtive values in substring method

const newtrim="        this is it               "
console.log(newtrim);
console.log(newtrim.trim());



const url="https://sarthak.com/sarthak%20rathore"

console.log(url.replace('%20','-'));

console.log(surname.split('-')); //returns array