/* 
    1.队列使用数组模拟
    2.每个元素拥有优先级(数字越小，优先级越高)
*/

function ProprityQueue(){
    //创建一个拥有优先级的元素
    function ProprityElement(element,proprity){
        this.element = element
        this.proprity = proprity
        this.toString = function(){
            return this.element + ' ' + this.proprity
        }
    }

    //表示队列的数组
    this.queue = []

    ProprityQueue.prototype.enqueue= function(element,proprity,queue){
        let proprityElement = new ProprityElement(element,proprity)
        if(queue.length === 0){
            queue.push(proprityElement)
        }else{
            for(let i =0;i<queue.length;i++){
                if(queue[i].proprity>proprityElement.proprity){
                    queue.splice(i,0,proprityElement)
                    break
                }
            }
        }
    }
}

//TEST
const myQueue = new ProprityQueue()
myQueue.enqueue('youngMan',100,myQueue.queue)
myQueue.enqueue('lady',10,myQueue.queue)
myQueue.enqueue('oldMan',1,myQueue.queue)
myQueue.enqueue('zqx',12,myQueue.queue)

console.log(myQueue.queue.toString())