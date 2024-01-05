const f= document.querySelector('form')

f.addEventListener('submit',function(e){
    e.preventDefault()

    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const r=document.querySelector('#results')

    if(h==='' || h<0 || isNaN(h)){
        r.innerHTML=`<h1>Please give valid height</h1>` 
    }
    else if(w==='' || w<0 || isNaN(w)){
        r.innerHTML=`Please give valid weight` 
    }
    else{
        const bmi=(w/((h*h)/10000)).toFixed(2)
        
        
        if (bmi<=18.5) {

            r.innerHTML=`<h1 style="color:red"> You are underweight<span>.Your BMI is:${bmi}</span></h1>`

            
        } 
        else if (bmi>18.5 && bmi<=24.9) {
    
            r.innerHTML=`<h1 style="color:green"> Congratulations!!!You are Healthy<span>.Your BMI is:${bmi}</span></h1>`
            
        }
        else if (bmi>24.9 && bmi<29.9) {
    
            r.innerHTML=`<h1 style="color:red"> You are overweight<span>.Your BMI is:${bmi}</span></h1>`
            
        }
        else{
            r.innerHTML=`<h1 style="color:red"> You are obese<span>.Your BMI is:${bmi}</span></h1>`
        }
    
    }
    
    

})

