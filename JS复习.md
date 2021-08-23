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

