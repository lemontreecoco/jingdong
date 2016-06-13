function getInner(obj,value){//对象名 内容
	if(obj.textContent){//是否是现代浏览器
		if(value==undefined){//是否传参
			return obj.textContent;//否的话 输出对象
		}else{
			obj.textContent=value;//传的话 输出value值
		}
	}else{
		if(value==undefined){//ie浏览器 不传参 
			return obj.innerText;//输出对象
		}else{//传参
			obj.innerText=value;//输出value值
		}
	}
}