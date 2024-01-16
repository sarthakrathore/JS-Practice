class User{
    constructor(email,password){
        this.email=email
        this.password=password 
    }
    get password(){
        return `${this._password}sarthak`
    }

    set password(value){
        this._password=value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
}
const sarthak= new User("sarthak@gmail.com","abc")
console.log(sarthak.password);
console.log(sarthak.email);
 