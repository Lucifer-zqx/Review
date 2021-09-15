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
        return str
    }

    //insert方法
    LinkList.prototype.insert = function(position,data){
        //边界检查
        if(position<0 || position>this.length) return
        
        //新建节点
        let newNode = new LinkNode(data)
        if(position === 0){
            newNode.next = this.head
            this.head = newNode
        }else{
            let current = this.head
            while(--position){
                //让current指向要插入位置的前一个
                current =current.next
            }
            //插入节点
            newNode.next = current.next
            current.next = newNode
        }
        this.length++
       
    }

    //update方法
    LinkList.prototype.update = function(position,data){
        //边界检查
        if(position<0 || position>this.length) return

        //定位要修改的元素
        let current = this.head
        while(position--){
            current = current.next
        }
        current.data = data
    }

    //get方法
    LinkList.prototype.get = function(position){
        //边界检查
        if(position<0 || position>this.length) return

        //定位要返回的元素
        let current = this.head
        while(position--){
            current = current.next
        }
        return current.data
    }

    //indexOf方法
    LinkList.prototype.indexOf = function(data){
        //遍历全部链表
        let current = this.head
        let index = 0
        while(current){
            if(current.data === data){
                return index
            }else{
                index++
            }
            current = current.next
        }
        //出循环说明，列表中无此元素
        return -1
    }

    //removeAt方法
    LinkList.prototype.removeAt = function(position){
        let current = this.head
        let previous = null
        while(position--){
            previous = current
            current = current.next
        }
        //让前一个元素直接指向后一个
        if(position === -1){
            this.head = current.next
        }else{
            previous.next = current.next
        }

        //清除后一个元素的引用，防止内存泄露
        current.next = null
        
        //减少一个长度
        this.length--
        //返回被删除的元素
        return current
    }

    //remove方法
    LinkList.prototype.remove = function(data){
        let current = this.head
        let previous = this.head
        while(current.next){
            if(current.data === data){
                previous.next = current.next
                break
            }
            previous = current
            current =current.next
        }
        //让前一个元素直接指向后一个
        previous.next = current.next

        //清除后一个元素的引用，防止内存泄露
        current.next = null

        //返回被删除的元素
        return current
    }

}

let l = new LinkList()
l.append('zs')
l.append('li')
l.append('ww')
l.append('zl')
l.insert(2,'zqx')
console.log(l.toString())
console.log(l.length)
l.update(2,'zqx1')
console.log(l.toString())
console.log(l.get(2))
console.log(l.indexOf('zqx11'))

console.log('-------------')

console.log(l.toString())
console.log(l.removeAt(0))
console.log(l.toString())
