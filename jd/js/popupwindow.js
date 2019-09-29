 window.onload=function(){
     // 点击相应div 出现商品属性窗口
     var skudiv=document.getElementsByClassName("sku")
     var popupwindow=document.getElementsByClassName("popupwindow")
     var close=document.getElementsByClassName("close")
     for(var i=0;i<skudiv.length;i++){
         skudiv[i].index=i
         skudiv[i].onclick=function(){
             popupwindow[this.index].style.display="block"
         }
     }
     for(var i=0;i<close.length;i++){
         close[i].index=i
         close[i].onclick=function(){
             popupwindow[this.index].style.display="none"
         }
     }
 }
 
 
