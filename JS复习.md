### JavaScript

#### 1. 函数提升与变量提升

```
见代码
```

#### 2. js闭包的理解

```
见代码
```

#### 3. 未声明与未定义的理解

```javascript
1.alert(a)
/**********/
2.  var a
	alert(a)

/* 第一段代码会报错，因为未声明。声明变量存在用var关键字（显示声明）和直接赋值语句（隐式声明），如果都不满足，则是未声明的，在js中就会报错。es5中用var关键字声明却未赋值，称为undefiend,将此现象称为未定义。 */
```

#### 4. 理解全局变量

```
在全局执行上下文中声明
```

#### 5.js定时器执行过程

```
见代码
```

#### 6.js防抖与节流

```
见代码
```

#### 7.null和undefined的区别

```
1.typeof 检查类型：null为object，undefined为undefined
2.null + 6 = 6	undefiend + 6 = NaN
3.undefiend == null //true包容等式运算符(两边会先进行隐式类型转化，**一般**是转化为数字后再比较)       undefiend === null //false严格等式运算符，不会进行类型转化，类型不等直接返回false

```

#### 8.数组去重

```
几种思路：
1.ES6方式：new Set(...[arr])，Array.from(new Set(arr))
2.双重for循环，splice删除重复元素
3.arr.map() 加上indexOf方法，判断后方是否存在重复元素，有则删除无则保留
4.利用对象属性+属性值或者数组的index的唯一性，去重
```

#### 9.原生js实现Ajax

```
let xhr = new XMLHttpRequest()  //创建一个xhr对象
xhr.open("GET","请求的地址"，true/false) //建立连接，true表示异步请求，false表示同步
xhr.send()           //参数：GET请求为null，Post为请求体内容
xhr.onReadyStateChange = function(){
	if(xhr.readyState === 4 && xhr.status === 200){
		//成功的逻辑
	}else{
		//失败的逻辑
	}
}
```

#### 10.get和post请求的区别

```
GET在浏览器回退时是无害的，而POST会再次提交请求。

GET产生的URL地址可以被Bookmark，而POST不可以。

GET请求会被浏览器主动cache，而POST不会，除非手动设置。

GET请求只能进行url编码，而POST支持多种编码方式。

GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

GET请求在URL中传送的参数是有长度限制的，而POST么有。

对参数的数据类型，GET只接受ASCII字符，而POST没有限制。 

GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。

GET参数通过URL传递，POST放在Request body中


一点骚的东西：不论是get请求还是post请求其本质都是TCP/IP连接。但是：GET产生一个TCP数据包；POST产生两个TCP数据包。换而言之：对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据），而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。（并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。）
```

#### 11. 常见的http状态码

| 分类 | 分类描述                                           |
| ---- | -------------------------------------------------- |
| 1**  | 信息提示（服务器收到请求但需要请求者继续执行操作） |
| 2**  | 成功（操作被成功接收并处理）                       |
| 3**  | 重定向（需要进一步的操作以完成请求）               |
| 4**  | 客户端错误（请求包含语法错误或无法完成请求）       |
| 5**  | 服务器错误（服务器在处理请求的过程中发生了错误）   |

#### 12. ~操作符的作用

```
~会返回2 的补码，并且~会将数字转换为32位整数,因此我们可以用~来进行取整操作。
~x 大致等同于-（x+1）
```

#### 13. 继承的几种方式

```js
js是基于原型链继承的

1.原型链继承:缺点：创建的子类可以访问到超类的所有实例属性，无法向构造函数传参
	//修改子类的prototype为父类的实例对象
	SubType.prototype = new ParentType()

2.构造函数继承
	function ParentType(){
        this.color = ['red','green','blue']
    }
	function SubType(){
        ParentType.call(this)
    }

3.组合继承
	function ParentType(name){
        this.name =name
        this.color = ['red','green','blue']
    }
	function SubType(name,age){
        ParentType.call(this,name)
        this.age = age
    }
	
4.原型式继承:借用某实例对象，直接生成其构造函数的子类
	function ExtendFunc(obj){
        function F(){}	//要创建的子类构造函数
        F.prototype = obj
        return new F()
    }

5.寄生继承：利用上面的原型式继承，创建一个子类，再为这个子类添加属性方法
	function createAnother(obj){
        var cloneObj = object(obj)
       	cloneObj.sayHi = function(){console.log('hi')}
        return cloneObj
    }
	
6.寄生组合继承:与寄生不同的是寄生组合只复制父类的原型对象
	function inheritProtoType(subType,parentType){
        var clone = object(parentType.prototype)	//创建一个父类原型的对象
        clone.constructor = subType	//弥补子类构造函数的丢失
        subType.prototype = clone	//将子类的原型对象设置为新建的对象
 
    }
	
```

#### 14. js事件模型

```
1.什么是事件？
	事件是用户操作网页时发生的交互动作，如click/move等，事件除了用户触发的动作，还有文档加载，窗口滚动和调整大小的行为。事件被封装成了一个event对象，包含了该事件发生时的所有相关信息
   
2.三种事件模型？
	- DOM0级模型
	-IE事件模型
	-DOM2级
```

#### 15.一行有趣的js代码

```
问题：[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)}) 能解释一下这段代码的意思吗？

1.[].forEach是数组原型上的方法，想其他对象（此题是一个伪数组）也使用这个方法，可以使用call来调用这个函数
2.call(obj,arguments),第一个参数是要使用这个方法的对象（$$()方法是现代浏览器为了调试方便在控制台使用的一个api，相当于document.querySelectorAll()），第二个参数为方法的参数(forEach的参数为一个函数)。
3.function(a){a.style.outline='1px solid #'+(~~(Math.random()*(1<<24))).toString(16)}).
   a为forEach调用时传入的每个数组元素，也就是DOM元素节点。通过js的方法操作css。后面的数学运算是为了获得十六进制的整数
   
```

#### 16. 浏览器缓存机制

```
浏览器的缓存机制指的是通过在一段时间内保留已接受到web资源的一个副本，当在有效时间内再次对这个资源进行访问，直接返回保留的web资源副本。
web资源的缓存策略一般由服务器来指定，分为强缓存策略和协商缓存策略。
强缓存策略：如果缓存资源有效，直接使用资源，不必在向服务器发送请求。通过设置http请求的头expires(绝对时间，效果不好)或者cache-control（相对时间）
协商缓存策略：浏览器会先向服务器发送一条请求，如果状态码为304（未修改），服务器不返回资源，使用缓存的资源。如果为其他则使用服务器返回的资源。
```

#### 17.浏览器同源策略

```
同源策略：一个域下的js脚本在未经允许的情况下，不能够访问另一个域的内容。同源指的是协议、端口号、域名必须全部相同。
主要限制三个方面：
	第一个当前域下的js脚本不能够访问其他域的cookie。localstorage、indexDB，
	第二个当前域下的js脚本不能够操作其他域下的DOM，
	第三个是当前域下ajax无法发送跨域请求。
```

#### 18. DOM常规操作

```html
见代码

面试题：innerHTML，outerHTML，innerText，outerText
	<div><p>inner text</p></div>

innerHtml：<p>inner text</p>不包括该HTMLElement自身
outerHTML: <div><p>inner text</p></div>包括该HTMLElement自身
innerText：inner text ：只包含文字
outerText：inner text ：修改outerText时，会将内层html标签也当做文字，读取仍然只是文本元素inner text
	
```

#### 19. V8引擎的垃圾回收和JS的垃圾回收机制

```
1.V8引擎：
	垃圾回收策略是基于分代回收机制的，基于世代假说的。该假说有两个特点：1)大部分新生对象倾向于早死 2)不死的对象，会活的更久
	v8中将内存分为新生代和老年代，堆空间等于新生代大小加上老年代大小。不同位数的操作系统的内存大小不一样。新生代由两个相同内存大小的simspace构成。
	回收算法采用Scavenge算法，主要实现是cheney算法，新生代内存区分为from和to，from使用，to空闲
	过程：
	1.from分配对象，若semispace被分满，就进行scavenge回收
	2.检查from区存活对象，若对象符合晋升条件，则晋升为老年代。若不符合，则复制到to区
	3.若对象不存活，则释放空间
	4.完成复制后，清空from区，将from和to角色交换。
	晋升条件：
	当对象复制时，会判断一下对象是否经过一次scavenge回收，如果经过。那么直接晋升为老年代，如果没有则复制到to空间
	to空间的内存使用比是否超过限制，当复制到同to空间时，to空间占比超过25%，那么对象会直接晋升为老年代，相当于是大对象了。
	老年代垃圾回收算法：标记清除和标记整理。
	V8的GC采用增量标记，将GC执行的时间分为多段，和js代码交替执行。优化用户体验。
```

#### 20. 哪些操作会造成内存泄露

```
1.意外的全局变量
2.未取消的定时器
3.脱离DOM的引用
4.闭包
```

#### 21. toPrecision、toFixed和Math.round()区别

```
toPrecision():指的是有效数字
toFixed():指的保留小数点后几位
Math.round():将一个小数四舍五入到一个整数
```

#### 22. 前端模块化

```
1.commonjs
	通过require引入，module.exports=(exports.)暴露,是服务器端的解决方案，以同步的方式引入模块，因为文件都放在服务器本地磁盘，加载速度非常快，因此以同步方式加载没问题。浏览器端，因为需要发送网络请求，所以异步加载更加合适。
	
2.AMD
	实现为requirejs，推崇前置依赖，定义模块就需要声明依赖。依赖的执行时机：加载完成后，就开始执行。
3.CMD
	实现为seajs。使用就近依赖，只有使用到时再去require。依赖的执行时机：加载完成后并不执行，再回调里用到，再require执行
4.ES6
	export/export default 暴露
	import	引入
```

#### 23. requestAnimationFrame API的用处

```
传统的css已经能够做出很强大的动画效果，但是仍然有不足之处。例如页面的滚动，一般只能使用js的setInterval来实现效果。但是由于js是单线程的，定时器属于宏任务，执行时机并不可靠。此时使用requestAnimationFrame，就可以实现效果，我们只需要关心帧与帧之间的逻辑和终止条件，而不用关心时间间隔问题，由requestAnimationFrame自动完成。
```

#### 24. 图片懒加载和预加载

```
1.懒加载又称延迟加载，应用于长网页有大量图片(电商网站首屏)的情形，提高首屏加载速度，从而提升用户体验，懒加载对图片是按需加载，只有图片被访问到了才会被加载，减少服务器压力。实现方式：先将未被看到的图片src设置为空串，将这些图片地址放入一个对象上，当滚动到图片可视区域，通过js动态将路径取出放入到src上。
2.预加载：将所有资源预先加载到内存上，提升用户体验。预加载会提升服务器压力。实现方式通过js的image对象设置src的方式。
```

