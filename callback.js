function one(ek){
    console.log("one");
    ek()
}
function two(doo){
    console.log("two");
    doo()
}

function three(tin) {
    console.log("Three");
    tin()
    
}


one(function(){
    two(function(){
        three(function(){

        })
    })
})