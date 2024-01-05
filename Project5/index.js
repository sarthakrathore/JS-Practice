const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for (let i = 0; i <6; i++) {

        color+=hex[Math.floor(Math.random()*16)]
            
    }

    return color
}

let intervalId
const startChangingColor= function(){

   

    intervalId=setInterval(() => {

        document.body.style.backgroundColor=randomColor() 
    }, 1000);

}

const stopChangingColor=function(){

    clearInterval(intervalId)
    console.log("Stopped");
}

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)