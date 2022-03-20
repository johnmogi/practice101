const mainArr = [1,2]
const arr = [];

const inc = (i=0)=> {
    console.log(i);
    arr.push(i)
    
}
if ( arr.length < mainArr.length){
    inc(arr.length)
}

console.log(arr);