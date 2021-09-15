### Vue

#### 1.MVVM、MVC、MVP

```
1.mvvm
	m=>model,v=>view,vm=>viewmodel,当model中数据发生变化，viewmodel中也会变化，当viewmodel中变化了，也会驱动view进行更新。反之view的变化也会驱动viewmodel来更新model。vue2中采用Object.defiendProperty()实现数据的双向绑定，通过数据劫持和发布订阅模式实现。
	
2.mvc
	m=>model,v=>view,c=>controler,v负责页面的显示逻辑，m负责数据模型。m和v采用观察者模式，当m中数据发生改变会通知v中更新页面。用户的操作由controller负责，会先通知model发生改变，然后影响到view层的逻辑。

3.mvp
	mvc模式中，m和v中存在耦合，不利于代码的复用和管理，引入mvp架构，p=>presenter,model提供给presenter操作数据的接口，同时view也提供presenter接口，这样m和v通过presenter就产生了联系。核心代码主要存放在p中。
```

#### 2. Diff算法

```
Vue的核心，虚拟DOM+diff算法后，才可以不确切的说，虚拟DOM比真实DOM效率更快。

新旧虚拟DOM通过Diff算法找到，前后差异的DOM。并将差异的地方，进行修改。对于没变化的DOM进行复用。当数据发生变化，订阅中心发布通知给所有订阅了这个消息的订阅者们。订阅者就会调用patch函数給真实DOM打补丁。

因为一般跨层次的移动是很少的。所以vue采用统计比较，将时间复杂度降为O(n).

比较步骤：
	1.是否为同一节点sameNode函数判断
		-是：继续调用patchNode函数
			1.如果newNode === oldNode 直接return
			2.文本节点，新节点文本内容替换旧节点
			3.新旧节点都拥有子节点调用updateChildren方法
				-首尾指针法比较
				-递归调用patchNode方法
			4.新有，旧无。(创建新节点添加)
			5.旧有，新无。(直接删除节点)
		-否：直接新节点替换旧节点
```

