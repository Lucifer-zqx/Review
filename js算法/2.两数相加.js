//两数相加

function bigNumberAdd(num1,num2){
    let result = ''  //保存结果
    let carry = false   //进位标志

    let num1Arr = num1.split("")
    let num2Arr = num2.split("")

    //当数据不为空，计算未完成继续计算
    while(num1Arr.length || num2Arr.length || carry){

        //undefiend也会被转成0
        carry += ~~num1Arr.pop() + ~~num2Arr.pop()

        result = carry % 10 + result
        carry = carry > 9
    }
    return result
}

console.log(bigNumberAdd("227","173"))