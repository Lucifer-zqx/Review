/**
 *
 *  二叉搜索树
 */

function BinarySearchTree(){
    
    //treeNode
    function Node(key){
        this.key = key
        this.left = null
        this.right = null
    }

    //root
    this.root = null

    //插入节点
    BinarySearchTree.prototype.insert = function(key){
        //封装内部代码，不提供给用户使用
        function insertNode(relativeRoot,newNode){
            if(relativeRoot.key > newNode.key){
                //插入的节点比相对根小，放入左侧
                if(relativeRoot.left == null){
                    relativeRoot.left = newNode
                }else{
                    //递归调用自身插入
                    insertNode(relativeRoot.left,newNode)
                }
            }else{
                //插入的节点比相对根大，放入右侧
                if(relativeRoot.right == null){
                    relativeRoot.right = newNode
                }else{
                    //递归调用自身插入
                    insertNode(relativeRoot.right,newNode)
                }
            }
        }

        //插入代码
        let newNode = new Node(key)
        if(this.root == null){
            this.root = newNode
        }else{
            insertNode(this.root,newNode)
        }
    }

    //先序遍历
    BinarySearchTree.prototype.preOrderTravesal = function(handler){
        preOrderTravesalNode(this.root,handler)
        //遍历的方法
        function preOrderTravesalNode(root,handler){
            if(root != null){
                //处理节点
                handler(root.key)
                //遍历左子树
                preOrderTravesalNode(root.left,handler)
                //遍历右子树
                preOrderTravesalNode(root.right,handler)
            }
        }
    }

    //中序遍历
    BinarySearchTree.prototype.midOrderTravesal = function(handler){
        function midOrderTravesalNode(root,handler){
            if(root !=null){
                //左子树
                midOrderTravesalNode(root.left,handler)
                //处理节点
                handler(root.key)
                //右子树
                midOrderTravesalNode(root.right,handler)
            }
            
        }
        
        midOrderTravesalNode(this.root,handler)
        
    }

    //后序遍历
    BinarySearchTree.prototype.postOrderTravesal = function(handler){
        function postOrderTravesalNode(root,handler){
            if(root !=null){
                //左子树
                postOrderTravesalNode(root.left,handler)
                //右子树
                postOrderTravesalNode(root.right,handler)
                //处理节点
                handler(root.key)
            }
        }
        postOrderTravesalNode(this.root,handler)
    }

    //最大值
    BinarySearchTree.prototype.max = function(){
        let node = this.root
        while(node.right != null){
            node= node.right
        }
        return node.key
    }
    //最小值
    BinarySearchTree.prototype.min = function(){
        let node = this.root
        while(node.left != null){
            node= node.left
        }
        return node.key
    }

    //搜索
    BinarySearchTree.prototype.search = function(key){
        let node = this.root
        //循环方法
       /*  while(node != null){
            if(key<node.key){
                node = node.left
            }else if(key > node.key){
                node = node.right
            }else{
                return true
            }
        }
        return false */
       
        //搜索的递归方法
        function searchNode(root,key){
            if(root != null){
                if(root.key>key){
                    return searchNode(root.left,key)
                }else if(root.key<key){
                    return searchNode(root.right,key)
                }else{
                    return true
                }
            }
            return false
        }
        return searchNode(node,key)
    }

    //删除
    BinarySearchTree.prototype.remove = function(key){
        
        //定义三个flag
        let parent = null
        let isLeftChild = false
        let current = this.root

        //寻找匹配的key元素
        while(current.key != key){
            parent = current
            //要寻找的key在根的左边
            if(current.key > key){
                current = current.left
                isLeftChild = true
            }else if(current.key < key){
                current = current.right
                isLeftChild = false
            }
            //都不匹配           
            if(current == null) return false
        }

        //1.删除的节点为叶节点
        if( current.left == null && current.right == null){
            if(current == this.root){
                this.root = null
            }else{
                if(isLeftChild){
                    parent.left = null
                }else{
                    parent.right = null 
                }
            }
        }

        //2.删除的节点有一个左子树或者右子树
        else if(current.left == null){
            if(current == this.node){
                this.root =current.right
            }else if(isLeftChild){
                parent.left = current.right
            }else{
                parent.right = current.right
            }
        }
        else if(current.right == null){
            if(current == this.node){
                this.root =current.left
            }else if(isLeftChild){
                parent.left = current.left
            }else{
                parent.right = current.left
            }
        }

        //3.删除的节点有两个子树
       else {
           let removeNode = current  //保留要删除节点的指针
           let targetNode = null  //准备提上来的节点
           let targetNodeParent = null//被提上来的父节点

           //找到要被提上来的元素(右子树最小/左子树最大)
                targetNode = current.right
                while(targetNode.left != null){
                    targetNodeParent = targetNode
                    targetNode = targetNodeParent.left
               }
               //跳出来的时候,说明找到被提元素
               //1.把节点提到被删除的位置(直接替换内容)
               removeNode.key = targetNode.key
               removeNode.deleted = true
               //2.把被提节点的右节点放入其父节点的左指针
               targetNodeParent.left = targetNode.right
          
                
       }
       return true
      

       
    }


}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(2)
bst.insert(4)
bst.insert(1)
bst.insert(3)
bst.insert(18)
console.log(bst)
console.log(bst.max())
console.log(bst.min())
console.log(bst.search(10))