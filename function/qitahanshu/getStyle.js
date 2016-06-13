function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
}else{
	return getComputedStyle(obj,null)[style];
}
}