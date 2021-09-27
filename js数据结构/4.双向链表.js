/**
 * 双向链表
 * 
 */

function DoublyList(){
    this.head = null
    this.tail = null
    this.length = 0

    //Node
    function LinkNode(data){
        this.pre = null
        this.data = data
        this.next = null
    }

    //append方法
    DoublyList.prototype.append = function(data){
        //创建新节点
        let newNode = new LinkNode(data)

        if(!this.length){
            //将首尾指针指向这个新元素
            this.head = newNode
            this.tail = newNode
        }else{
            //添加到链表的末尾，所以我们只需要留意tail指针
            newNode.pre = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
    }

    //toString(前向变量/后向遍历)
    DoublyList.prototype.toString= function(flag=true){
        if(flag){
            //前=>后遍历
            let current = this.head
            let str = ''
            while(current){
                str += current.data+'-'
                current = current.next
            }
            return str.slice(0,-1)
        }else{
            //后=>前遍历
            let current = this.tail
            let str = ''
            while(current){
                str += current.data+'-'
                current= current.pre
            }
            return str.slice(0,-1)
        }
    }

    //insert
    DoublyList.prototype.insert = function (position,data){
        if(position<0 || position>this.length) return '非法参数'

        let newNode = new LinkNode(data)
        if(position === 0){
            this.head.pre = newNode
            newNode.next = this.head
            this.head = newNode
        }else{
            //找出位置
            let current = this.head
            while(--position){
                current = current.next
            }

            newNode.next = current.next
            current.next = newNode
            newNode.pre = current
            newNode.next.pre = newNode
        }

        this.length++
    }

    //get
    DoublyList.prototype.get = function(position){
        if(position<0||position>=this.length) return null
        let current = this.head
        if(position!==0){
            while(position--){
                current = current.next
            }
        }
        return current.data
    }

    //indexOf
    DoublyList.prototype.indexOf = function(data){
        let current = this.head
        let index = 0
        while(current){
            if(current.data === data){
                return index
            }
            index++
            current =current.next
        }
        return -1
    }

    //removeAt
    DoublyList.prototype.removeAt = function(position){
        if(position<0 || position>=this.length) return null
        let current = this.head
        if(position === 0){
            this.head = this.head.next
            this.head.pre = null
        }else{
            while(position--){
                current = current.next
            }
            current.pre.next = current.next
            current.next.pre = current.pre
        }
        this.length--
        return current.data
    }


    //remove
    DoublyList.prototype.remove = function(data){
        return this.removeAt(this.indexOf(data))
    }

    //isEmpty
    DoublyList.prototype.isEmpty = function(){
        return this.length===0?true:false
    }

    //size
    DoublyList.prototype.size = function(){
        return this.length
    }

}

let d = new DoublyList()
d.append('1')
d.append('3')
d.append('2')
console.log(d.toString())
console.log(d.toString(false))
d.insert(1,'打乱')
console.log(d.toString())
console.log('----------------')
console.log(d.get(0))
console.log(d.get(-1))
console.log(d.indexOf('11'))

console.log('----------------')
console.log(d.removeAt(0))
console.log(d.toString())
console.log(d.remove('打乱'))
console.log(d.toString())

console.log('----------------')
console.log(d.size())
console.log(d.isEmpty())
