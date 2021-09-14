/**
 * 链表
 * 
 */

function LinkList(){
    //链表的节点
    function LinkNode(data){
        this.data = data
        this.next = null
    }
    //链表的头结点
    this.head = null
    //链表的长度
    this.length = 0


    //追加元素方法
    LinkList.prototype.append = function(data){
        //根据数据构建链表的节点
        let linkNode = new LinkNode(data)
        if(!this.length){
            //头指针指向头节点
            this.head = linkNode
        }else{
           //创建遍历指针current(从头节点开始)
           let current = this.head
            while(current.next){
                current = current.next
            }
            //出循环时说明，遍历指针已经指向最后一个元素
            current.next = linkNode
        }
        //链表长度+1
        this.length++
    }

    //toString方法
    LinkList.prototype.toString =function(){
        let current = this.head
        let str = ''
        while(current){
            str += current.data + '-'
            current = current.next
        }
        str = str.slice(0,-1)
        console.log(str)
    }

}

let l = new LinkList()
l.append('zs')
l.append('li')
l.append('ww')
l.append('zl')
l.toString()

