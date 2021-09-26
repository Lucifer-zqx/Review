function LinkList(){
    this.head = null
    function Node(data){
        this.data = data
        this.next = null
    }
    LinkList.prototype.append = function(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }
}

function reverseLinkList(head){
    // 判断下变量边界问题
    if (!head || !head.next) return head;
    // 初始设置为空，因为第一个节点反转后就是尾部，尾部节点指向 null
    let pre = null;
    let current = head;
    let next;
    // 判断当前节点是否为空
    // 不为空就先获取当前节点的下一节点
    // 然后把当前节点的 next 设为上一个节点
    // 然后把 current 设为下一个节点，pre 设为当前节点
    while(current) {
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}

let ll = new LinkList()
ll.append(0)
ll.append(1)
console.log(reverseLinkList(ll.head))