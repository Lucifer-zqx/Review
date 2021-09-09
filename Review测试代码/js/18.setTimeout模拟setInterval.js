function myInterval(fn,delay){
    //控制器
    let timer = {
        flag:true
    }

    function interval(){
        if(timer.flag){
            fn()
            setTimeout(interval, delay);
        }
    }
    setTimeout(interval, delay);
    return timer
}
let i = 0
function printer(){
    console.log(i++)
}
myInterval(printer,1000)