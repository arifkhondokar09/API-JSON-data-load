/* setTimeout(() => {
    console.log("hiii")
}, 3000);


let count= 10;
let timer = setInterval(() => {
    console.log("kirey");
    count--;
    if(count< 0){
        clearInterval(timer)
        console.log("gameOver")
    }
},2000); */





const intervalID= setInterval(() => {
    console.log("mama")
}, 2000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log("kaj ekhanei sesh")
    
},10000);

