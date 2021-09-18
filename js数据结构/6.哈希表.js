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
    HashTable.prototype.hashFunc = function(key,size=this.limit){
        let hashCode = 0
        const constant = 37
        for(let i = 0;i<key.length;i++){
            hashCode = constant*hashCode + key.charCodeAt(i)  //秦九韶算法将O(n2)降为O(n)
        }
        let index = hashCode % size
        return index
    }

    //修改和插入方法
    HashTable.prototype.put = function(key,value){
        //计算下标
        let index = this.hashFunc(key)
        //判断该下标下的bucket类型
        var bucket = this.storage[index]
        //判断该下标处是否有值(初始化元组)
        if( bucket == null){
            //创建一个桶
            bucket = []
            this.storage[index] = bucket
        }
        //桶已存在
        //遍历桶，查询新添加的元素是否存在
        for(let i =0 ;i<bucket.length;i++){
            let tuple = bucket[i]
            if(tuple[0] == key){
                tuple[1] = value
                return
            }
        }
        //整个桶的元组都没有找到相同key，说明是新增操作
        let tuple = [key,value]
        bucket.push(tuple)
        this.count++

        //检查是否需要扩容
        if(this.count>this.limit*0.75){
            this.resize(this.getPrime(this.limit*2))
        }
    }

    //获取方法
    HashTable.prototype.get = function(key){
         let index = this.hashFunc(key)
         let bucket = this.storage[index]
         if(bucket == null) return null
         for(let i= 0;i<bucket.length;i++){
             let tuple = bucket[i]
             if(tuple[0] == key){
                 return tuple[1]
             }
         }
         //遍历完桶也没有发现，返回null
         return null
    }

    //删除方法(返回要删除的元素)
    HashTable.prototype.remove = function(key){
        let index = this.hashFunc(key)
         let bucket = this.storage[index]
         if(bucket == null) return null
         for(let i= 0;i<bucket.length;i++){
             let tuple = bucket[i]
             if(tuple[0] == key){
                 this.count--
                 let deletedElement = bucket.splice(i,1)
                 //缩容操作
                 if(this.count<this.limit/2){
                    let temp = Math.floor(this.limit/2)
                    this.resize(this.getPrime(temp))
                 }
                 return deletedElement
             }
         }
         //遍历完桶也没有发现，返回null
         return null
    }

    //resize方法
    HashTable.prototype.resize = function(newCapacity){
        //创建个变量存储之前的数值
        let tempStroage = this.storage
        //重置属性
        this.storage = []
        this.count = 0
        this.limit = newCapacity

        //将原先的元素重新放入扩容后的哈希表
        for(let i = 0;i<tempStroage.length;i++){
            let bucket = tempStroage[i]
            if(!bucket){
                continue
            }
            for(let j = 0;j<bucket.length;j++){
                let tuple = bucket[j]
                this.put(tuple[0],tuple[1])
            }
        }
    }

    //判断是否是质数方法
    HashTable.prototype.isPrime = function(num){
        let border = parseInt(Math.sqrt(num))

        for(let i = 2;i<=border;i++){
            if(num % i === 0){
                return false
            }
        }
        return true
    }

    //获取质数的方法
    HashTable.prototype.getPrime = function(num){
        while(!this.isPrime(num)){
            num++
        }
        return num
    }

}

/* //测试
let hash = new HashTable()
//add
hash.put('abc','abc')
hash.put('bbc','bbc')
hash.put('cbc','cbc')
console.log(hash.storage)
//update
hash.put('cbc','我被修改了')
console.log(hash.storage)
//get
debugger
console.log(hash.get('cbc'))
//remove
console.log(hash.remove('cbc'))
console.log(hash.storage) */

let hash = new HashTable()
hash.put('abc1','1')
console.log(hash.limit)
hash.put('abc2','2')
console.log(hash.limit)
hash.put('abc3','3')
console.log(hash.limit)
hash.put('abc4','4')
console.log(hash.limit)
hash.put('abc5','5')
console.log(hash.limit)
hash.put('abc6','6')
console.log(hash.limit)
hash.put('abc7','7')
console.log(hash.limit)
hash.put('abc8','8')
console.log(hash.limit)
hash.put('abc9','9')
console.log(hash.limit)
hash.put('abca','a')
console.log(hash.limit)

console.log(hash.storage)

