let name="sarthak"
let anotherName=name
console.log(anotherName);
anotherName="vicky"

console.log(anotherName);
console.log(name);


let user1={
    email:"sarthakrathore@gmail.com",
    upiId:"user1@ybl"
}

let user2=user1
// Object.freeze(user1)
user2.upiId="user2@okhdfc"

console.log(user2);
console.log(user1);
