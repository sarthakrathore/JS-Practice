const user={

    username:"sarthak",
    price:999,

    welcomeMessage:function(){

        console.log(`Hi ${this.username} welcome to the website.`);
        console.log(this);

    }
}


// user.welcomeMessage()
// user.username="vicky"
// user.welcomeMessage()

console.log(this);
