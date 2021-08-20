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
<img src='https://upload-images.jianshu.io/upload_images/16869140-3ff2f6f45f4cf8f7.png?imageMogr2/auto-orient/strip|imageView2/2/w/564/format/webp' />
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

