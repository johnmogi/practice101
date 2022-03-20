
let a = 0;
let b = 7;

function testError(a,b){

    try{
    return (a / b);
    
    }catch(err){
        console.log(err);
    }
}

const c = testError(a,b)
console.log(c);