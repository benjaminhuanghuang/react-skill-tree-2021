const debounce = (func, delay)=>{
  let timeout;
  return ()=>{
    if(timeout){
      clearTimeout(timeout);
    }
    timeout = setTimeout(function(){
      func()
    }, delay)
  }
}


const log = debounce(()=> console.log('call'), 3000);

// - there is only 1 message printed
log();
log();
log();