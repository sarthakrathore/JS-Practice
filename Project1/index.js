const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
// const allcookie=document.cookie="name=sarthak;expire=18/12/2023;path='https://www.youtube.com'"
// console.log(allcookie);

buttons.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        // if(e.target.id==="grey"){
        //     body.style.backgroundColor=e.target.id
        // }

        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor=e.target.id
                break;

            case "white":
                body.style.backgroundColor=e.target.id
                break;

            case "blue":
                body.style.backgroundColor=e.target.id
                break;

            case "yellow":
                body.style.backgroundColor=e.target.id
                break;

            case "purple":
                body.style.backgroundColor=e.target.id
                break;
        
            default:
                body.append("ERROR!")
                break;
        }
    })
})
