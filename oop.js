const user={
    username:"sarthak",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        // console.log(`Username ${this.username}`);
        // return "Got user details from DB"
        console.log(this);
        // return this
    },

   
}


// console.log(user.username);
// console.log(user["signedIn"]);
// console.log(user["loginCount"]);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne=new Promise
// here new is a constructor function


function User(username,loginCount,isLoggedIn){

    this.myusername=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    // return this
}


const userOne=new User("sarthak",10,false)
const userTwo=new User("rathore",12,true)
// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.constructor);
// console.log(user.constructor);
// console.log(userTwo.constructor);
// console.log(Object.constructor);




