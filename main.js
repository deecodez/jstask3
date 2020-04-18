function divider(num){
    let ans =[];
    for (let number =1; number<=num; number++){
    if (num % 2 === 0){
        ans.push("yu");
    } 
    if (num % 3 === 0){
        ans.push("gi");
    } 
    
    if (num % 5 === 0){
        ans.push("oh");
    }

     if (num % 2 ===0 && num % 3 === 0){
        ans.push("yu-gi");
    }
     if (num % 2 ===0 && num % 5 === 0){
        ans.push("yu-oh");
    }
     if (num % 3 ===0 && num % 5 === 0){
        ans.push("gi-oh");
    }
     if (num % 2 ===0 && num % 3 === 0 && num % 5 ===0){
        ans.push("yu-gi-oh");
    }
    return ans;
}
}



console.log(divider(4));
console.log(divider(6));
console.log(divider(30));
console.log(divider(10));