// let myName="sarthak         "
// console.log(myName.length);

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.sarthak=function(){
    console.log("sarthak is present in all objects");
}

// heroPower.sarthak()
// myHeros.sarthak()

// myHeros.prototype.heysarthak = function(){
//   ;
// }


Array.prototype.heysarthak=function(){

    console.log("sarthak says hello")

}

// myHeros.heysarthak()
// heroPower.heysarthak() 
// prototype is not shared from array to object


const user={
    name:'chai',
    email:"chai@google.com"
}

const teacher={
    makeVideo:true
}


const teachingSupport={
    isAvaillable:false
}


const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:teachingSupport
}
teacher.__proto__=user




// modern syntax
Object.setPrototypeOf(teachingSupport,teacher)


// question

let str="sarthak        "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True lenghth is ${this.trim().length}`);
}

str.truelength()