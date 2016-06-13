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