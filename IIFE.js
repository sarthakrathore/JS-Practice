(function chai () {
    // named IIFE
    console.log("chai");
    
})();


const coffee=function(){
    // named IIFE
    console.log("coffee");
}();


((name)=>{
    // Unnamed IIFE
    console.log(`Drink water ${name}`);
})("sarthak")
