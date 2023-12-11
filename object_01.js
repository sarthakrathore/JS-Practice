// object literals ==>not singleton

 
const mySym= Symbol("key1") //Symbol declaration

const jsUser={
    name:"sarthak",
    "full name":"sarthak rathore",
    [mySym]:"myKey1",
    age:22,
    location:"hyd",
    email:"sarthak@google.com",
    isLoggedIn:false,
    lastLoggedIn:["Mon","Tue"],
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.name="vicky"
console.log(jsUser.name);
jsUser["name"]="bittu"
console.log(jsUser["name"]);

jsUser.email="sarthak@chatgpt.com"
// Object.freeze(jsUser) //freezes object
jsUser.email="sarthak@microsoft.com"
console.log(jsUser);


jsUser.greeting= function(){

    console.log("hello js user");
}

jsUser.greetingTwo= function(){

    console.log(`Hello jsuser,${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));