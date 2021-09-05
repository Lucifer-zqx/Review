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

