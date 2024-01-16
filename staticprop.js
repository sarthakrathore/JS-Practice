class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){//static does not allow to create new ids by user
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const sarthak=new User("sarthak")
// console.log(sarthak.createId())


const iphone= new Teacher("iphone","iphone@apple.com")
iphone.logMe();
