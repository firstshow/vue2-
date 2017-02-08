/**
 * ajax create by ZC
 * */

function xAjax (url, method, data, callback) {
    ajax({
        url: url, // 请求地址
        type: method, // 请求方式
        data: data, // 请求参数
        dataType: 'json',
        success: function (response, xml) {
            // 接收到数据后的操作
            callback(response);
        },
        fail: function (status) {
            // 此处放失败后执行的代码
            console.log('ajax执行失败')
            console.log(status)
        }
    })
}

module.exports = xAjax;

function ajax (options) {
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    // var params = formatParams(options.data);
    var xhr
    // 创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest()
    } else { // IE6及其以下版本浏览器
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP')
    }

    // 接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var status = xhr.status
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    }

    // 连接 和 发送 - 第二步
    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + formatParams(options.data), true)
        //xhr.setRequestHeader('token', store.state.userInfo.token)
        xhr.send(JSON.stringify(options.data))
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true)
        // 设置表单提交时的内容类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        // xhr.setRequestHeader('token', store.state.userInfo.token)
        xhr.send(formatParams(options.data))
    }
}
// 格式化参数
function formatParams (data) {
    var arr = []
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
    }
    return arr.join('&')
}

// 判断是否 微信浏览器
function isWeiXin (){
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		return true;
	} else{
		return false;
	}
}

// 获取地址栏参数
function GetRequest() {
	let path = window.location.href,
		url = path.substr(path.indexOf('?'), path.length-1); //获取url中"?"符后的字串
	var theRequest = new Object();
	if (path.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
