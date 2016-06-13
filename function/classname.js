function getClass(classname,obj){
	var obj=obj || document;     //判断是否传入obj，如果有obj，调用obj，没有，用document
	if (obj.getElementsByClassName){   //判断浏览器是否兼容
		return obj.getElementsByClassName(classname);//是的话,输出类名 
	}else{
		var arr=[];//定义一个空数组
		var alls=document.getElementsByTagName('*');
		//用*查询所有标签
		for(var i=0;i<alls.length;i++){
			var b=checkClass(alls[i].className,classname)
			//调用checkclass函数来检测所有的类名是否是我们想要的
			if (b){
				arr.push(alls[i]);
			}//如果是我们想要的，加到空数组里
		}
		return arr;
	}
}

function checkClass(search,match){//定义一个函数来检测类名
	var brr=search.split(" ");
	for (var i = 0; i < brr.length; i++) {
		if (brr[i]==match) {
			return true;
	}else{
		return false;
	     }
   } 
}



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




function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
}else{
	return getComputedStyle(obj,null)[style];
}
}




function $(search,obj){//传入属性 对象
	var obj=obj || document;//判断是否传入对象
	if(typeof(search)=="string"){
	      if(search.charAt(0)=="#"){
		//判断第一个字符是否为#，是不是id名
		    return document.getElementById(search.substr(1));
	      }else if(search.charAt(0)=="."){
		//判断第一个字符是否为.，是不是类名
		    return getClass(search.substr(1),obj);
	    }else{
		    return obj.getElementsByTagName(search);
	        }
        }else if(typeof(search)=="function"){
       	    window.onload=function(){
       	    	search();
       	    }
        }

 }




 function getChilds(obj,type){
     var type=type || "a";
     var all=obj.childNodes;
     var arr=[];
     for(var i=0;i<all.length;i++){
         if(type=="a"){
         	if(all[i].nodeType==1){
         		arr.push(all[i]);
         	}
         }
        else if(type=="b"){
     	if(all[i].nodeType==1 || (all[i].nodeType==3 &&
         all[i].nodeValue.replace(/^\s*|\s*$/g,""))){
            arr.push(all[i]);
        }
     }
 }
     return arr;
}
function getFirst(obj){
    return getChilds(obj)[0];
}
function getLast(obj){
    var nub=getChilds(obj);
    return nub[nub.length-1];
}

function getNext(obj,type){
    var next=obj.nextSibling;
    if(next==null){
        return false;
    }
    if(type=="a"){
         while(next.nodeType==3 || next.nodeType==8){
             next=next.nextSibling;
             if(next==null){
                 return false;
            } 
         }
    }else if(type=="b"){
        while((next.nodeType==3 && !next.nodeValue.replace(/^\s*|\s*$/g,"")) || next.nodeType==8){
             next=next.nextSibling;
             if(next==null){
                 return false;
            }
        }
    }

    return next;
}


function insertBefore(obj,before){
    var parent=before.parentNode;
    parent.insertBefore(obj,before);
}
function insertAfter(obj,after){
    var next=getNext(after,"b");
    var parent=after.parentNode;
    if(next){
        insertBefore(obj,next);
    }else{
        parent.appendChild(obj);
    }
}