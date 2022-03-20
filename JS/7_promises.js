// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise?retiredLocale=he
a = () =>{
    setTimeout(() => {
      console.log('a');  
    }, 2000);
}

const b = new Promise()

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });