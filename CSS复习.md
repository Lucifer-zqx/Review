### CSS

##### 1. BFC

1. 概念：一个独立的渲染区域与外界元素不会相互影响，它规定了其内部的块级元素如何进行布局。

2. 特点：

   - 开启BFC的元素不会被浮动元素所覆盖；

   - 开启BFC的元素子元素和父元素的外边距不会重叠；

   - 开启BFC的元素可以包含浮动的子元素；

3. 如何开启：float不为none；```display：inline-block, table-cell,flex```;```overflow```不为visible；

   

##### 2. 解决高度塌陷问题和外边距重叠

1. 问题描述：当父元素的内容是由子元素内容撑开时，开启子元素浮动，就会出现父元素的高度塌陷问题，因为子元素已经脱离文档流，浏览器会对其进行回流操作；外边距重叠，当父子元素的外边距重叠，给子元素设置外边距margin时，会映射到父元素上

   ```css
   <style>
   	<!-- 演示高度塌陷问题 -->
   	.box1{
   		border:1px red solid;
   	}
   	.box2{
   		width:200px;
   		height:200px;
   		background-color:#bfa;
   		<!--会出现高度塌陷-->
   		float:left;
   		
   	}
   	<!-- 演示外边距重叠问题-->
   	.box1{
   		width:400px;
   		height:400px;
   		background-color:#bfa;
   	}
   	.box2{
   		width:200px;
   		height:200px;
   		background-color:orange;
   		<!-- 出现外边距重叠，直接影响父元素的外边距-->
   		margin:200px 0;
   	}
   </style>
   
   <!-- html结构 -->
   <div class='box1'>
   	<div class='box2'>
   </div>
   ```

2. 解决办法：

   - 一个很重要的```css```属性：clear

     ```
     clear用于清除浮动元素对其的影响：
     原理：通过设置margin-top值来解决
     	left：清除左侧浮动元素对其影响
     	right：清除右侧侧浮动元素对其影响
     	both：清除左右浮动影响大的元素对其影响
     ```

   - 高度塌陷:

     ```css
     <style>
     	<!-- 给父元素的末尾追击一个行级元素 -->
     	box1::after{
     		content:'';
     		<!-- 由于追加是content是行级元素不独占一行 -->
     		display:table;
     		<!-- 清除box2的浮动影响，content仍在box2下方，因为box1必须包含content，所以解决了高度塌陷问题-->
     		clear:both
     	}
     </style>
     ```

   - 外边距重叠：

     ```css
     <style>
     	<!-- 给父元素最前面追加一个行级元素-->
     	box1::before{
     		content:'';
     		display:table;
     	}
     </style>
     ```

     

   - 综合：

     ```css
     <style>
     	.clearfix::before,
     	.clearfix::after{
     		content:'';
     		display:table;
     		clear:both;
     	}
     </style>
     ```

     

##### 3. 行内元素与块级元素的四个区别

1. 行内元素：当屏幕还有空间时默认占满屏幕而不会发生折行

2. 行内元素：无法设置宽高

3. 行内元素：仅水平方向上的margin和padding有作用

4. 块级元素可以包含行内元素和块级元素，而行内元素只能包含行内元素

   

##### 4. box-sizing盒模型

标准情况下即box-sizing：content-box，盒子的实际宽高 = width/height+ padding + border + margin；而在怪异盒模型（丢失DOCTYPE时，IE6,7,8）即box-sizing：border-box，盒子的实际宽高 = width/height + margin，设置的padding和border不再单独参与盒子宽高的计算中，而是width/height = padding + border + 内容部分，超出时盒子会被撑开。

```html
关于盒模型的一些注意点：
	- 水平方向
		1.子元素的盒子宽度，应该等于父元素的内容区的宽度。即：margin-left+border-left+padding-left+width+padding-right+border-right+margin-right.
		2.当margin和width没有设置为auto时：
			浏览器会自动调整margin-right的值，以满足等式
		3.当margin-left，width其中之一设置为auto时：
			浏览器会调整 属性值设置为auto的属性大小，以适应等式。
		4.当margin-left，width同时设置为auto时：
			浏览器将margin-left设置为0,自动调整width的值以满足等式。
		5.当width为固定值，magin为auto时
			浏览器平均分配margin-left和margin-right的值。我们常使用这一点来使元素			  水平居中
	- 垂直方向
		1.垂直方向无特殊等式的要求，可以随便设置。常使用的居中方式为text-aligin来使		  文本居中。
		2.相邻兄弟元素间的***垂直居中***存在外边距重叠的问题。
		  问题描述：
			<style>
    			.box1{
        			margin-bottom = 100px
    			}
    			.box2{
					margin-top = 100px
    			}
			</style>
			<div calss='box1'></div>
			<div calss='box2'></div>
			两者之间的距离为100px,这就称为外边距重叠的问题。两者之间的实际距离为
				同号：绝对值大的一方
				异号：两者之和
			
```

##### 5. css选择器

 - 基础选择器

   1. 通配符选择器：*

   2. 元素选择器：通过标签名选取

   3. class选择器：通过 ```.类名```

   4. id选择器：通过 ```#id```

      

 - 高级选择器一

    1. ```E F``` 后代选择器：匹配到E元素下的所有F元素（子、孙），空格隔开

    2. ```E,F```多元素选择器：同时匹配到E元素和F元素，逗号隔开

    3. ```E>F```子元素选择器：选择E元素的直接子代F，只选择直接子代

    4. ```E+F```相邻兄弟选择器：选择紧接E元素后面的同级元素F，有相同的父级

    5. ```(css3)E1~E2```关联选择器：选择E1后面的兄弟E2

       

- 高级选择器二

  1. ```E[attr]```属性选择器：匹配具有attr属性的E元素

  2. ```E[attr=val]```属性选择器：匹配属性值为val的元素

  3. ```E[attr~=val]```:匹配到属性名为attr，并且值包含val的元素

  4. ```E[attr|=val](css3:E[attr^=val])```:匹配到属性名为attr，并且值以val开头的元素

  5. ```(css3)E[attr$=val]```:匹配到属性名为attr,并且属性值以val结尾的元素

  6. ```(css3)E[attr*=val]```:匹配到属性名为attr，并且属性值包含val的元素

  7. ```E[attr1][attr2=val]```:匹配所有属性名为attr1和attr2，并且attr2的属性值为val

     

- 伪类选择器

  1. ```:link```:匹配所有未被点击的链接

  2. ```:visited```:匹配所有已经被点击的链接

  3. ```:hover```:匹配鼠标悬停在其上的元素

  4. ```:active```:匹配鼠标按下还未释放的元素

  5. ```[variable]:first-of-type```:匹配variable匹配后的结果的第一个元素

  6. ```[variable]:last-of-type```:匹配variable匹配后的结果的最后一个元素

  7. ```[variable]:only-of-type```:匹配variable匹配后的结果的唯一一个元素（只有一个元素，如果不为一个则选不中）

  8. ```:nth-of-type(n) | :nth-child(n)的区别```:

      - :nth-of-type（n）:当前元素的兄弟元素的第n个

        ```html
        p:nth-of-type(4){
        	/*当前元素为p,他的兄弟元素也为p，所以第四个p被选中*/
        	background-color:red
        }
        
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <h1>打乱他们的阵型</h1>
        <p>4</p>
        ```

     - ：:nth-child(n) :当前元素的兄弟节点的第n个当前元素

       ```html
       p:nth-child(4){
       	/*当前元素为p,他的4个兄弟节点也为h1，但是h1不为当前元素p，所以无法选中*/
       	background-color:red
       }
       
       <p>1</p>
       <p>2</p>
       <p>3</p>
       <h1>打乱他们的阵型</h1>
       <p>4</p>
       ```

       

  9. .......

     

##### 6.让元素水平垂直居中的方法

1. flex弹性盒布局：

2. position的方法

3. transform的方法

4. position+transform的方法

   ![image-20210819150554133](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210819150554133.png)

##### 7. 实现有宽高的元素，行内元素的水平垂直居中

1. line-height = height(垂直居中)
2. text-align = center（水平居中）

##### 8. 手动模拟```palceholder```效果

​	思路：先给输入框设置placeholder的样式

​	```<input type='text' value='请输入用户名' style="color:#999" />```

##### 9. 前端优化方案

	1. link代替@import引入样式；
	2. 避免使用滤镜filter；
	3. js和css代码压缩；
	4. 减少iframe标签的使用；
	5. 使用体积更小的jpeg格式图片；
	6. css雪碧图；
	7. 懒加载；
	8. 避免重绘回流操作；
	9. 减少http请求次数；
	10. 缓存策略。

##### 10. 媒体查询@media

​	media属性用于为不同的屏幕媒介类型规定不同的样式，max-width：375px，屏幕大于375px时样式不生效，	min-width：1024px，屏幕大于1024px时样式才生效。

​	```@media screen and (max-width:375px)```

##### 11. 标签a点击虚框问题解决

   - 问题描述：当使用firefox、遨游、ie的几个版本浏览器时，会出现点击a标签，在a标签的外框出现一层虚线框

   - 解决方案:

      

     ```
     a,a:hover,a:active,a:visited,a:link,a:focus{ 
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
      outline:none;
      background: none;
      text-decoration: none;
      border:none;
      -webkit-appearance: none;
     }
     ```

     

##### 12.  脱离文档流的元素的特点

 	1. 块级元素：
 	 - 脱离文档流后，元素不再单独占一行，而是由内容撑开;
 	 - 浮动的元素不会超过上方的块元素，也不会超过他的上一个浮动的兄弟元素
 	2. 行内元素（内联元素）：
 	 - 脱离文档流后，元素成为内联块元素，可以设置宽高。
 	 - 行内元素可以超过他上方的块元素
 	 - 浮动的元素不会遮挡文字，文字总是环绕在浮动元素的周围



##### 13. 关于定位

 	1. 相对定位
 	 - position：relative；
 	 - 特点：1、元素不会脱离文档流 2、参考点：元素本身在文档流的位置，即元素本身 3、可以设置偏移位置改变所在的位置。top、left、top、bottom。4.提高了元素的层级
 	2. 绝对定位
 		- position :absolute
 		- 特点：
 			1、元素会脱离文档流
 	    	2、参考点(相对于其包含块定位)：
 			包含块：
 				1.正常情况下：包含块就是离元素最近的祖先元素
 				2.元素开启定位后：包含块就是离元素最近的开启定位的祖先*块元素*。如果祖先				元素都没有开启定位，那么其包含块就是根元素（html）
 			3、开启绝对定位的元素会提高元素的层级
 	3. 固定定位
 		- position :fixed
 			1、元素会脱离文档流
 			2、参考点为视口的原点
 			3、提高元素层级
 	4. 粘滞定位
 		- position ： sticky
 			1、与相对定位差不多
 			2、效果：到某一位置处固定、不再随滚动条滚动
 			
 	5. 绝对定位的布局：
 		开启绝对定位的元素，其水平和垂直方向上的距离需满足等式：
 		left+margin-left+border-left+padding-left+width/height+padding-right+border-right+margin-right+right = 包含块的宽度
 		- 可以设置auto属性有margin width/height left right
 		- 当没有auto，且等式不满足时，浏览器会自动调整right的值以适应等式
 		- 当其中一个为auto时,调整属性值为auto属性以满足等式
 		- 当left/right为auto，margin也为auto，优先调整left/right的值，其次为width，最后为margin。

##### 14.自适应布局方法

```
见代码
```

##### 15. 圣杯布局

```
见代码
```

