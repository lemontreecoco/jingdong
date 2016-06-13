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