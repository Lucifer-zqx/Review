/**
 * 哈希表
 */

function HashTable(){
    //哈希表
    this.storage = []
    //表的长度
    this.count = 0
    //表的最大长度
    this.limit = 7

    //哈希函数
    HashTable.prototype.hashFunc = function(key,size){
        let hashCode = 0
        const constant = 37
        for(let i = 0;i<key.length;i++){
            hashCode = constant*hashCode + key.charCodeAt(i)  //秦九韶算法将O(n2)降为O(n)
        }
        let index = hashCode % size
        return index
    }

    //更新和添加方法
    HashTable.prototype.put = function(key,value){
        //计算下标
        let index = this.hashFunc(key,this.limit)
        
        //判断该下标处是否有值(初始化元组)
        if(this.storage[index] == null){
            var tuple = []
        }

        
    }
}
