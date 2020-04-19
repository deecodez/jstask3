// find the range of the val e.g range(10) [1,2,3,4,5,6,7,8,9,10]

function range(val){
    let arr =[];
    for (let i = 1; i <= val; i++){
        arr.push(i)
    }
    return arr
}


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
    let newArr = [];
    for (let i = 0; i<=range(val).length; i++){
        newArr.push(divisible(i))
    }
    console.log(newArr)
}
calAll(100)
calAll(10)