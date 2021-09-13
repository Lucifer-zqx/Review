/* 
    游戏规则:一群人围成一圈,开始报数,每次报道该数的人淘汰,从下一个人继续报数,
    直到只剩一人,问剩下的人是谁,以及原先所在位置的下标

*/

function hackDrump(namelists,num){

    let namelist = [...namelists]
    //直达只剩一人
    while(namelist.length>1){
        for(let i = 0;i<num-1;i++){
            //未到num前的人,每次删除一个并加入到最后
            namelist.push(namelist.splice(0,1).toString())
        }
        //删除报到num的人
        namelist.splice(0,1)
    }
    console.log(namelist[0])  
    console.log(namelists.indexOf(namelist[0]))
}

const nameArray = ['xx','yy','zz','aa','bb','cc']
hackDrump(nameArray,4)