/* 集合 */

function Collections(){
    this.items = {}

    //add
    Collections.prototype.add = function(value){
    this.items[value] = value
    }

    //remove
    Collections.prototype.remove = function(value){
        
        return delete this.items[value]
    }

    //update
    Collections.prototype.update = function(value,newValue){
        delete this.items[value]
        this.items[newValue] = newValue
    }

    //has
    Collections.prototype.has = function(value){
        return this.items.hasOwnProperty(value)
    }

    //clear
    Collections.prototype.clear = function(){
        this.items = {}
    }

    //size
    Collections.prototype.size = function(){
        return Object.keys(this.items).length
    }

    //获取集合全部元素值
    Collections.prototype.values = function(){
        return Object.keys(this.items)
    }

    //求并集
    Collections.prototype.union = function(otherCollection){

        //创建一个新集合
        let unionSet = new Collections()

        Object.keys(this.items).forEach(key=>{
            unionSet.add(key)
        })

        Object.keys(otherCollection.items).forEach(key=>{
            unionSet.add(key)
        })
        return unionSet
    }

    //求交集
    Collections.prototype.intersection = function(otherCollection){

        //创建一个新集合
        let unionSet = new Collections()

        Object.keys(this.items).forEach(key=>{
            if(otherCollection.items.hasOwnProperty(key)){
                unionSet.add(key)
            }
        })

        
        return unionSet
    }

    //求差集
    Collections.prototype.difference = function(otherCollection){

        //创建一个新集合
        let unionSet = new Collections()

        let intersection = this.intersection(otherCollection)
        Object.keys(this.items).forEach(key=>{
            if(!intersection.items.hasOwnProperty(key)){
                unionSet.add(key)
            }
        })
        return unionSet
    }

    //判断子集
    Collections.prototype.isChildern = function(parentCollection){

        let values = this.values()
        for(let i = 0;i<values.length;i++){
            if(!parentCollection.has(values[i])){
                return false
            }
        }
        return true
    }
}



//测试
let c = new Collections()
c.add(1)
console.log(c.values())
c.add(2)
console.log(c.values())
c.remove(2)
console.log(c.values())
c.update(1,3)
console.log(c.values())

console.log(c.has(3))
console.log(c.has(1))
console.log(c.size())
c.clear()
console.log(c.values())


console.log('-------------------------')
c.add(1)
c.add(2)

let c1 = new Collections()
c1.add(1)
// c1.add(3)
console.log(c.union(c1).values())
console.log('-------------------------')
console.log(c.intersection(c1).values())

console.log(c.difference(c1).values())


console.log(c1.isChildern(c))