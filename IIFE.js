(function chai () {
    // named IIFE
    console.log("chai");
    
})();


const coffee=function(){
    console.log("coffee");
}();


((name)=>{
    // Unnamed IIFE
    console.log(`Drink water ${name}`);
})("sarthak")