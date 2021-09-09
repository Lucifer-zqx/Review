/*
原理:
    jsonp实际上就是前端将需要执行的回调函数发送给后端，
    后端收到这个回调函数，将其执行所需要的参数放入回调函数的参数中并返回给前端
    前端拿到这个html脚本解释并执行，在全局作用域中增加这个回调函数，就可以执行了
*/

function myJsonp(url,params,callback){
    //判断url中是否含query参数
    let queryString = url.indexOf('?') === -1 ?'?':'&'

    //处理params参数
    for(let key of params){
        if(params.hasOwnProperty(key)){
            queryString = key+'='+ params[key] + '&'
        }
    }

    //处理回调函数名
    let callbackName = 'myJsonp'+Date.now()

    //路径参数中加上callback
    queryString += 'callback='+callbackName 


    //构建请求
    let scriptNode = document.createElement('script')
    scriptNode.src = url+queryString

    window[callbackName] = function(){
        callback(...arguments)
        document.getElementsByTagName("head")[0].removeChild(scriptNode);
    }
    document.getElementsByTagName("head")[0].appendChild(scriptNode);
}