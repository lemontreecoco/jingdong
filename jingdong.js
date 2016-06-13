$(function(){

    var axjzk=$(".axjzk");
    var box=$(".lctz")[0];
    var lis1=$(".lis");
    var cw=document.documentElement.clientWidth;//获得屏幕的宽
    var ch=document.documentElement.clientHeight; //获得屏幕的高
    var bh=box.offsetHeight; //获得旁边框的高
    
    box.style.top=(ch-bh)/2+"px"; //将旁边的框垂直居中
    for(var i=0;i<lis1.length;i++){
        lis1[i].index=i;
        lis1[i].onclick=function(){
          var obj=document.documentElement.scrollTop? document.documentElement:document.body;
          var top=axjzk[this.index].offsetTop; //楼距屏幕的高
          // obj.scrollTop=top; //超出屏幕的距离等于楼距屏幕的距离

          animate(obj,{scrollTop:top},200);
          for(var j=0;j<lis1.length;j++){
            lis1[j].innerHTML=i+1+'F';
            lis1[j].style.background="#fff";//将所有格子显示白色
            lis1[j].style.color="#666";
            
          } 
          lis1[this.index].style.background="#B61D1D";//将当前格子显示粉红色
          var aa=lis1[this.index].getAttribute("aa");
          lis1[this.index].innerHTML=aa;
          lis1[i].style.color="#fff";
          }
    }
   window.onscroll=function(){
      var obj=document.body.scrollTop?document.body:document.documentElement;
      for(var i=0;i<axjzk.length;i++){
        if(obj.scrollTop>=axjzk[i].offsetTop-ch+170){
          for(var j=0;j<lis1.length;j++){
            lis1[j].innerHTML=j+1+'F';
            lis1[j].style.background="#fff"//背景都为白色
            lis1[j].style.color="#666";//字体颜色为灰色
            
          }
          lis1[i].style.background="#B61D1D";//当前颜色为粉色
          var aa=lis1[i].getAttribute("aa");
          lis1[i].innerHTML=aa;//当前字体颜色为白色
          lis1[i].style.color="#fff";//当前字体颜色为白色
        }
      }
      // 双开关
      var flag=true;
      if(obj.scrollTop>=axjzk[0].offsetTop-ch+170){
        if(flag){
          flag=false;
          animate(box,{opacity:1},300,function(){
            flag1=true;
          });
        }
      var flag1=true;
      }else{
        if(flag1){
          flag1=false;
          animate(box,{opacity:0},300,function(){
            flag=true;
          });
        }
        
      }
    }

    //头部导航栏
	var xiala=$(".xiala");
	var text=$(".text");
    var navk=$(".navk");
	for(var i=0;i<xiala.length;i++){
		xiala[i].index=i;
		xiala[i].onmouseover=function(){
			for(var i=0;i<text.length;i++){
                navk[i].style.display="none";
                text[i].style.display="none";
                xiala[i].style.background="#F1F1F1";
			}
            navk[this.index].style.display="block";
            xiala[this.index].style.background="#fff";
            text[this.index].style.display="block";
            
        }
		xiala[i].onmouseout=function(){
            navk[this.index].style.display="none";
			text[this.index].style.display="none";
            xiala[this.index].style.background="#F1F1F1";
        }
    }
    //头部导航栏
    var zhiwatch=$("#zhiwatch");
    zhiwatch.onfocus=function(){
        this.value='';
    }
    zhiwatch.onblur=function(){
        this.value='智能手表';
    }
    // 右边拉框
    var jdyd=$(".jdyd");
    var zuola=$(".zuola");
    for(var i=0;i<jdyd.length;i++){
        jdyd[i].index=i;
        jdyd[i].onmouseover=function(){
            for(var i=0;i<jdyd[i].length;i++){
                jdyd[i].style.background="#7A6E6E";
                zuola[i].style.background="#7A6E6E";
                zuola[i].style.display="none";
            }
            jdyd[this.index].style.background="#B61D1D";
            zuola[this.index].style.display="block";
            zuola[this.index].style.background="#B61D1D";
            }
        jdyd[i].onmouseout=function(){
            jdyd[this.index].style.background="#7A6E6E";
            zuola[this.index].style.background="#7A6E6E";
            zuola[this.index].style.display="none";
        }
    }
    // 右边拉框
    // banner左侧导航
    var leftone=$(".left-one");
    var bltext=$(".bl-text");
    var leftonea=$(".left-one-a");
    var bannerkong=$(".banner-kong");
    for(var i=0;i<leftone.length;i++){
        leftone[i].index=i;
        leftone[i].onmouseover=function(){
            for(var i=0;i<bltext.length;i++){
                bltext[i].style.display="none";
                leftone[i].style.background="#C81623";
                leftonea[i].style.color="#fff";
            }
            leftone[this.index].style.background="#fff";
            leftonea[this.index].style.color="#B61D1D";
            bltext[this.index].style.display="block";
        }
        leftone[i].onmouseout=function(){
            bltext[this.index].style.display="none";
            leftone[this.index].style.background="#C81623";
            leftonea[this.index].style.color="#fff";
        }
    }
    // logo购物车
    var lggwc=$(".logo-gouwuche")[0];
    var lggwcxl=$(".lggwc-xl")[0];
    lggwc.onmouseover=function(){
        lggwcxl.style.display="block";
    };
    lggwc.onmouseout=function(){
        lggwcxl.style.display="none";
    }

    // banner轮播
	var bme=$(".banner-middle")[0];
    var bb1=$(".bb1"); 
    var bdian=$(".bdian");
    var bzuohua=$(".b-zuohua")[0];
    var byouhua=$(".b-youhua")[0];
    var n=0;
    var next=0;
    var t=setInterval(move,2000);
    function move(){
    	next=n+1;
        if(next>=bb1.length-1){
    		next=0;
        }
        for(i=0;i<bb1.length;i++){
    	    bdian[i].style.background="#3E3E3E";
            bb1[i].style.opacity="0";
        }
        bb1[n].style.opacity="1";
        bdian[n].style.background="#B61B1F";
        animate(bb1[n],{opacity:0},300);
        animate(bb1[next],{opacity:1},300);
        n=next;
    }
    function move1(){
    	next=n-1;
    	if(next<0){
    		next=bb1.length-1;
    	}
    	for(i=0;i<bb1.length;i++){
    		bdian[i].style.background="#3E3E3E";
            bb1[i].style.opacity="0";
    	}
    	bb1[n].style.opacity="1";
        bdian[n].style.background="#B61B1F";
        animate(bb1[n],{opacity:0},300);
        animate(bb1[next],{opacity:1},300);
        n=next;
    }
    bme.onmouseover=function(){
    	clearInterval(t);
    	bzuohua.style.display="block";
    	byouhua.style.display="block";
    }
    bme.onmouseout=function(){
    	t=setInterval(move,2000);
    	bzuohua.style.display="none";
    	byouhua.style.display="none";
    }
    bzuohua.onclick=function(){
    	move1();
    }
    byouhua.onclick=function(){
    	move();
    }
    for(var i=0;i<bdian.length;i++){
    	bdian[i].index=i;
    	bdian[i].onmouseover=function(){
    		for(var i=0;i<bdian.length;i++){
    			bdian[i].style.background="#3E3E3E";
                bb1[i].style.opacity="0";
    		}
            bb1[this.index].style.opacity="1";
    		bdian[this.index].style.background="#B61B1F";
    	}
    }
    //banner轮播图

    // 轮播图
    var blbb=$(".blbb")[0];
    var blb=$(".blb");
    var lbzuohua=$(".lb-zuohua")[0];
    var lbyouhua=$(".lb-youhua")[0];
    var aa=0;
    var bb=0;
    var w=parseInt(getStyle(blb[0],"width"));
    var dd=setInterval(cc,2500);
    function cc(){
            bb=aa+1;
            if(bb>=blb.length){
                bb=0;
            }
            blb[bb].style.left=w+"px";
            animate(blb[aa],{left:-w},500);
            animate(blb[bb],{left:0},500);
            aa=bb;
    }
    function ee(){
        bb=aa-1;
        if(bb<0){
            bb=blb.length-1;
        }
        blb[bb].style.left=-w+"px";
        animate(blb[aa],{left:w},500);
        animate(blb[bb],{left:0},500);
        aa=bb;
    }
    blbb.onmouseover=function(){
        clearInterval(dd);
        lbzuohua.style.display="block";
        lbyouhua.style.display="block";
    }
    blbb.onmouseout=function(){
        dd=setInterval(cc,2500);
        lbzuohua.style.display="none";
        lbyouhua.style.display="none";
    }
    lbzuohua.onclick=function(){
        cc();
    }
    lbyouhua.onclick=function(){
        ee();
    }
    //产品轮播图
    //一楼轮播图
    var yllb=$(".onefloor-lunbo")[0];
    var yllbpt=$(".yllbpt");
    var yldian=$(".yllbdian");
    var ylzh=$(".ylzh")[0];
    var ylyh=$(".ylyh")[0];
    var yln=0;
    var ylnext=0;
    var ylwidth=parseInt(getStyle(yllbpt[0],"width"));
    var ylt=setInterval(ylmove,2000);
    function ylmove(){
        ylnext=yln+1;
        if(ylnext>=yllbpt.length){
            ylnext=0;
        }
        for(var i=0;i<yllbpt.length;i++){
            yldian[i].style.background="#3E3E3E";
        }
        yldian[ylnext].style.background="#B61D1D";
        yllbpt[ylnext].style.left=ylwidth+"px";
        animate(yllbpt[yln],{left:-ylwidth},500);
        animate(yllbpt[ylnext],{left:0},500);
        yln=ylnext;
    }
    function ylmove1(){
        ylnext=yln-1;
        if(ylnext<0){
            ylnext=yllbpt.length-1;
        }
        for(var i=0;i<yllbpt.length;i++){
            yldian[i].style.background="#3E3E3E";
        }
        yldian[ylnext].style.background="#B61D1D";
        yllbpt[ylnext].style.left=-ylwidth+"px";
        animate(yllbpt[yln],{left:ylwidth},500);
        animate(yllbpt[ylnext],{left:0},500);
        yln=ylnext;
    }
    yllb.onmouseover=function(){
        clearInterval(ylt);
        ylzh.style.display="block";
        ylyh.style.display="block";
    }
    yllb.onmouseout=function(){
        ylt=setInterval(ylmove,2000);
        ylzh.style.display="none";
        ylyh.style.display="none";
    }
    ylzh.onclick=function(){
        ylmove1();
    }
    ylyh.onclick=function(){
        ylmove();
    }
    for(var i=0;i<yllbpt.length;i++){
        yldian[i].index=i;
        yldian[i].onmouseover=function(){
            if(this.index==yln){
                return;
            }else if(this.index<yln){
                for(i=0;i<yllbpt.length;i++){
                    yldian[i].style.background="#3E3E3E";
                }
                yldian[this.index].style.background="#B61D1D";
                yllbpt[this.index].style.left=-ylwidth+"px";
                animate(yllbpt[yln],{left:ylwidth},500);
                animate(yllbpt[this.index],{left:0},500);
                yln=this.index;
            }else if(this.index>yln){
                for(i=0;i<yllbpt.length;i++){
                    yldian[i].style.background="#3E3E3E";
                }
                yldian[this.index].style.background="#B61D1D";
                yllbpt[this.index].style.left=ylwidth+"px";
                animate(yllbpt[yln],{left:-ylwidth},500);
                animate(yllbpt[this.index],{left:0},500);
                yln=this.index;
            }
        }
    }
    //一楼轮播图
    //一楼产品选项卡
    var fm=$(".fm");
    var yinkl=$(".yinkl");
    for(var i=0;i<fm.length;i++){
        fm[i].index=i;
        fm[i].onmouseover=function(){
            for(var j=0;j<yinkl.length;j++){
                yinkl[j].style.display="none";
                fm[j].style.border="none"    
            }
            yinkl[this.index].style.display="block";
            // fm[this.index].style.borderBottom="5px solid green";
            fm[this.index].style.borderTop="3px solid #C81623";
            fm[this.index].style.borderLeft="1px solid #C81623";
            fm[this.index].style.borderRight="1px solid #C81623";           
        }
    }
    // 一楼选项卡结束
    //二楼轮播图
    var ellb=$(".ellbk")[0];
    var ellbpt=$(".erlou-lunbo");
    var eldian=$(".ellbdian");
    var elzh=$(".ellb-zh")[0];
    var elyh=$(".ellb-yh")[0];
    var eln=0;
    var elnext=0;
    var elwidth=parseInt(getStyle(ellbpt[0],"width"));
    var elt=setInterval(elmove,2000);
    function elmove(){
        elnext=eln+1;
        if(elnext>=ellbpt.length){
            elnext=0;
        }
        for(var i=0;i<ellbpt.length;i++){
            eldian[i].style.background="#3E3E3E";
        }
        eldian[elnext].style.background="#B61D1D";
        ellbpt[elnext].style.left=elwidth+"px";
        animate(ellbpt[eln],{left:-elwidth},500);
        animate(ellbpt[elnext],{left:0},500);
        eln=elnext;
    }
    function elmove1(){
        elnext=eln-1;
        if(elnext<0){
            elnext=ellbpt.length-1;
        }
        for(var i=0;i<ellbpt.length;i++){
            eldian[i].style.background="#3E3E3E";
        }
        eldian[elnext].style.background="#B61D1D";
        ellbpt[elnext].style.left=-elwidth+"px";
        animate(ellbpt[eln],{left:elwidth},500);
        animate(ellbpt[elnext],{left:0},500);
        eln=elnext;
    }
    ellb.onmouseover=function(){
        clearInterval(elt);
        elzh.style.display="block";
        elyh.style.display="block";
    }
    ellb.onmouseout=function(){
        elt=setInterval(elmove,2000);
        elzh.style.display="none";
        elyh.style.display="none";
    }
    elzh.onclick=function(){
        elmove1();
    }
    elyh.onclick=function(){
        elmove();
    }
    for(var i=0;i<ellbpt.length;i++){
        eldian[i].index=i;
        eldian[i].onmouseover=function(){
            if(this.index==eln){
                return;
            }else if(this.index<eln){
                for(i=0;i<ellbpt.length;i++){
                    eldian[i].style.background="#3E3E3E";
                }
                eldian[this.index].style.background="#B61D1D";
                ellbpt[this.index].style.left=-elwidth+"px";
                animate(ellbpt[eln],{left:elwidth},500);
                animate(ellbpt[this.index],{left:0},500);
                eln=this.index;
            }else if(this.index>eln){
                for(i=0;i<ellbpt.length;i++){
                    eldian[i].style.background="#3E3E3E";
                }
                eldian[this.index].style.background="#B61D1D";
                ellbpt[this.index].style.left=elwidth+"px";
                animate(ellbpt[eln],{left:-elwidth},500);
                animate(ellbpt[this.index],{left:0},500);
                eln=this.index;
            }
        }
    }
    //二楼轮播图
    //二楼产品选项卡
    var fm2=$(".fm2");
    var elnkk=$(".elnkk");
    for(var i=0;i<fm2.length;i++){
        fm2[i].index=i;
        fm2[i].onmouseover=function(){
            for(var j=0;j<elnkk.length;j++){
                elnkk[j].style.display="none";
                fm2[j].style.border="none";
            }
            elnkk[this.index].style.display="block";
            fm2[this.index].style.borderTop="3px solid #C81623";
            fm2[this.index].style.borderLeft="1px solid #C81623";
            fm2[this.index].style.borderRight="1px solid #C81623";
        }
    }
    // 二楼选项卡结束
    //三-五楼产品选项卡
    function xuan3(obj1,obj2){
        var fm3=$(".fm3",obj1);
        var slnkd=$(".slnkd",obj2);
        for(var i=0;i<fm3.length;i++){
            fm3[i].index=i;
            fm3[i].onmouseover=function(){
                for(var j=0;j<slnkd.length;j++){
                    slnkd[j].style.display="none";
                    fm3[j].style.border="none";
                }
                slnkd[this.index].style.display="block";
                fm3[this.index].style.borderTop="3px solid #C81623";
                fm3[this.index].style.borderLeft="1px solid #C81623";
                fm3[this.index].style.borderRight="1px solid #C81623";
            }
        }
    } 
    var title=$(".sanlou-nav");
    var neirong=$(".sanlou-box");
    for(var i=0;i<title.length;i++){
        xuan3(title[i],neirong[i]);
  }     
    // 三-五楼选项卡结束
    // 三-五楼轮播
    function swlb(obj){
        var slb=$(".san-lunbo1",obj)[0];
        var sanloupt=$(".sanloupt",obj);
        var sldian=$(".sldian",obj);
        var slzh=$(".slzh",obj)[0];
        var slyh=$(".slyh",obj)[0];
        var sln=0;
        var slne=0;
        var slw=parseInt(getStyle(sanloupt[0],"width"));
        var slt=setInterval(slmove,2222);
        function slmove(){
            slne=sln+1;
            if(slne>=sanloupt.length){
                slne=0;
            }
            for(var i=0;i<sanloupt.length;i++){
                sldian[i].style.background="#3E3E3E";
            }
            sldian[slne].style.background="#B61D1D";
            sanloupt[slne].style.left=slw+"px";
            animate(sanloupt[sln],{left:-slw},499);
            animate(sanloupt[slne],{left:0},499);
            sln=slne;
        }
        function slmove1(){
            slne=sln-1;
            if(slne<0){
                slne=sanloupt.length-1;
            }
            for(var i=0;i<sanloupt.length;i++){
                sldian[i].style.background="#3E3E3E";
            }
            sldian[slne].style.background="#B61D1D";
            sanloupt[slne].style.left=-slw+"px";
            animate(sanloupt[n],{left:slw},499);
            animate(sanloupt[ne],{left:0},499);
            sln=slne;
        }
        slb.onmouseover=function(){
            clearInterval(slt);
            slzh.style.display="block";
            slyh.style.display="block";
        }
        slb.onmouseout=function(){
            slt=setInterval(slmove,2222);
            slzh.style.display="none";
            slyh.style.display="none";
        }
        slzh.onclick=function(){
            slmove1();
        }
        slyh.onclick=function(){
            slmove();
        }
        for(var i=0;i<sldian.length;i++){
            sldian[i].index=i;
            sldian[i].onmouseover=function(){
                if(this.index==sln){
                    return;
                }else if(this.index<sln){
                    for(var i=0;i<sanloupt.length;i++){
                        sldian[i].style.background="#3E3E3E";
                    }
                    sldian[this.index].style.background="#B61D1D";
                    sanloupt[this.index].style.left=-slw+"px";
                    animate(sanloupt[sln],{left:slw},499);
                    animate(sanloupt[this.index],{left:0},499);
                    sln=this.index;
                }else if(this.index>sln){
                    for(var i=0;i<sanloupt.length;i++){
                        sldian[i].style.background="#3E3E3E";
                    }
                    sldian[this.index].style.background="#B61D1D";
                    sanloupt[this.index].style.left=slw+"px";
                    animate(sanloupt[sln],{left:-slw},499);
                    animate(sanloupt[this.index],{left:0},499);
                    sln=this.index;
                }
            }
        }
    }
    var boxs=$(".san-lunbo");
    for(var i=0;i<boxs.length;i++){
         swlb(boxs[i]);
  }    
   var tenbox=$(".tenbox")[0];
   swlb(tenbox);

   var shiyir=$(".shiyi-r"); 
       for(var i=0;i<shiyir.length;i++){
           swlb(shiyir[i]);
       }
   
    // 三-五楼轮播
    //六-十楼产品选项卡
    function xuan6(obj1,obj2){
        var fm6=$(".fm6",obj1);
        var llnkx=$(".llnkx",obj2);
        for(var i=0;i<fm6.length;i++){
            fm6[i].index=i;
            fm6[i].onmouseover=function(){
                for(var j=0;j<llnkx.length;j++){
                    llnkx[j].style.display="none";
                    fm6[j].style.border="none";
                }
                llnkx[this.index].style.display="block";
                fm6[this.index].style.borderTop="3px solid #B61D1D";
                fm6[this.index].style.borderLeft="1px solid #B61D1D";
                fm6[this.index].style.borderRight="1px solid #B61D1D";
            }
        }
    } 
    var right=$(".liulou-nav");
    var content=$(".sixbox");
    for(var i=0;i<right.length;i++){
        xuan6(right[i],content[i]);
  }   
    // 六-十楼选项卡结束
    // 六-九楼轮播
    function ljlb(obj){
        var lllbk=$(".lllbk",obj)[0];
        var sixright=$(".six-right",obj);
        var lldian=$(".lldian",obj);
        var llzh=$(".llzh",obj)[0];
        var llyh=$(".llyh",obj)[0];
        var lln=0;
        var llnext=0;
        var llwidth=parseInt(getStyle(sixright[0],"width"));
        var llt=setInterval(llmove,2300);
        function llmove(){
            llnext=lln+1;
            if(llnext>=sixright.length){
                llnext=0;
            }
            for(var i=0;i<sixright.length;i++){
                lldian[i].style.background="#3E3E3E";
            }
            lldian[llnext].style.background="#B61D1D";
            sixright[llnext].style.left=llwidth+"px";
            animate(sixright[lln],{left:-llwidth},300);
            animate(sixright[llnext],{left:0},300);
            lln=llnext;
        }
        function llmove1(){
            llnext=lln-1;
            if(llnext<0){
                llnext=sixright.length-1;
            }
            for(var i=0;i<sixright.length;i++){
                lldian[i].style.background="#3E3E3E";
            }
            lldian[llnext].style.background="#B61D1D";
            sixright[llnext].style.left=-llwidth+"px";
            animate(sixright[lln],{left:llwidth},300);
            animate(sixright[llnext],{left:0},300);
            lln=llnext;
        }
        lllbk.onmouseover=function(){
            clearInterval(llt);
            llzh.style.display="block";
            llyh.style.display="block";
        }
        lllbk.onmouseout=function(){
            llt=setInterval(llmove,2300);
            llzh.style.display="none";
            llyh.style.display="none";
        }
        llzh.onclick=function(){
            llmove1();
        }
        llyh.onclick=function(){
            llmove();
        }
        for(var i=0;i<sixright.length;i++){
            lldian[i].index=i;
            lldian[i].onmouseover=function(){
                if(this.index==lln){
                    return;
                }else if(this.index<lln){
                    for(i=0;i<sixright.length;i++){
                        lldian[i].style.background="#3E3E3E";
                    }
                    lldian[this.index].style.background="#B61D1D";
                    sixright[this.index].style.left=-llwidth+"px";
                    animate(sixright[lln],{left:llwidth},300);
                    animate(sixright[this.index],{left:0},300);
                    lln=this.index;
                }else if(this.index>lln){
                    for(i=0;i<sixright.length;i++){
                        lldian[i].style.background="#3E3E3E";
                    }
                    lldian[this.index].style.background="#B61D1D";
                    sixright[this.index].style.left=llwidth+"px";
                    animate(sixright[lln],{left:-llwidth},300);
                    animate(sixright[this.index],{left:0},300);
                    lln=this.index;
                }
            }
        }
    }
    var box=$(".llnk");
    for(var i=0;i<box.length;i++){
         ljlb(box[i]);
  }     
    //六-九楼轮播
   














    
})

