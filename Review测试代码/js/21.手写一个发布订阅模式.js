(function(){
    let topics = {}
    return {
        subscribe:function(topic,handler){
            //第一次订阅时，将订阅对象集合声明成数组
            if(!topics.hasOwnProperty(topic)){
                topics[topic] = []
            }
            topics[topic].push(handler)
        },
        publish:function(topic,info){
            if(topic in topics){
                //执行所有订阅此消息的方法
                topics[topic].forEach(handler =>{
                    handler(info)
                })
            }
        }
    }
})()