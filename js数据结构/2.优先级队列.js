/* 
    1.队列使用数组模拟
    2.每个元素拥有优先级(数字越小，优先级越高)
*/

function ProprityQueue(){
    //创建一个拥有优先级的元素
    function ProprityElement(element,proprity){
        this.element = element
        this.proprity = proprity
    }

    //表示队列的数组
    this.queue = []

    ProprityQueue.prototype.enqueue= function(element,proprity){
        let proprityElement = new ProprityElement(element,proprity)
        if(this.queue.length === 0){
            this.queue.push(proprityElement)
        }else{
            for(let i =0;i<this.queue.length;i++){
                if(this.queue[i].proprity>proprityElement.proprity){
                    this.queue.splice(i,0,proprityElement)
                    break
                }
            }
        }
    }
}

//TEST
const myQueue = new ProprityQueue()
myQueue.enqueue('youngMan',100)
myQueue.enqueue('lady',10)
myQueue.enqueue('oldMan',1)
myQueue.enqueue('zqx',12)

console.log(myQueue)