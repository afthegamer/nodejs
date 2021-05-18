const sayHello = () => {
    console.log("Hello")
}

const intervalId = setInterval(sayHello, 1000);

setTimeout(()=>{
    clearInterval(intervalId);
}, 3500);
