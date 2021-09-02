const EventUtils = {
    //DOM0,DOM2,IE事件模型绑定事件

    //绑定事件监听
    addEvent:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false)
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler)
        }else{
            element['on'+type] = handler
        }
    },

    //移除事件监听
    removeEvent:function(element,type,handler){
        if(element.addEventListener){
            element.removeEventListener(type,handler,false)
        }else if(element.attachEvent){
            element.detachEvent('on'+type,handler)
        }else{
            element['on'+type] = null
        }
    },

    //获取事件发生元素
    getTarget:function(event){
        return event.target || event.srcElement
    },

    //获取event的引用
    getEvent:function(event){
        return event || window.event
    },

    //阻止事件冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation()
        }else{
            event.cancelBubble=true  //IE取消事件冒泡的方式
        }
    },

    //取消事件的默认行为
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault()
        }else{
            event.returnValue = false;  //返回值为false取消默认行为
        }
    }
}
export default EventUtils