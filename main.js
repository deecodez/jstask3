//check for the remainder

function divisible(num){
    //if it's divisible by 2, 3 and 5
    if (num % 2 ===0 && num % 3 === 0 && num % 5 ===0){
        return "yu-gi-oh"
    }
    //if it's divisble by 2 and 3 only
    else if (num % 2 ===0 && num % 3 === 0){
        return "yu-gi"
    } 
     //if it's divisble by 2 and 5 only
     else if (num % 2 ===0 && num % 5 === 0){
        return "yu-oh"
    }
    //if it's divisble by 3 and 5 only
    else if (num % 3 ===0 && num % 5 === 0){
        return "gi-oh"
    }
    //if it's divisble 2 only
    else if (num % 2 === 0){
        return "yu"
    }
    //if it's divisble 3 only
    else if (num % 3 === 0){
        return "gi"
    }
    //if it's divisble 5 only
    else if (num % 5 === 0){
        return "oh"
    }
    //if it's not divisible by any
    else{
        return num
    }
}

//Run everything
function calAll(val){
    let arr = [];
    for (let i = 0; i<=val; i++){
        arr.push(divisible(i))
    }
    console.log(arr)
}

calAll(100)
calAll(10)