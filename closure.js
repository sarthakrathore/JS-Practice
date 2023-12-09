const outer=function(){
    var count=0
    return function(){
            count+=1
            return count

    }
}()

function inner(){
    document.getElementById('demo').innerHTML=outer()
}

inner()


