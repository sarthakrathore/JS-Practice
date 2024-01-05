let color
const randomColor=function(){

    const hex="0123456789ABCDEF"
    color='#'
    for (let i = 0; i <6; i++) {

        color+=hex[Math.floor(Math.random()*10)]
            
    }
    console.log(typeof color);
 
    return color
    
}

let intervalId
const startChangingColor= function(){

   
if (!intervalId) {
    

    intervalId=setInterval(() => {

        document.body.style.backgroundColor=randomColor() 

    }, 1000);

}

}

const stopChangingColor=function(){

    clearInterval(intervalId)
    intervalId=null
    
    if (color=="red" || color=="blue" ||color=="green" ||color=="yellow" ||color=="lime" ||color=="purple") {

        document.querySelector('#result').innerHTML="Yay . You Won!!! "
        
    }

    else{

        document.querySelector('#result').innerHTML="Sorry! You Lost."
        document.querySelector('#para').innerHTML="Click on start to try again"

    }
    console.log("Stopped");
}

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)