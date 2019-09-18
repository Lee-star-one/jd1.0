window.onload=function(){
    var main_left=document.querySelector(".main_left")
    var lis=main_left.querySelectorAll("li")
    var ul=main_left.querySelector("ul")
    var divs=document.querySelectorAll(".main_right")
    console.log(divs[0])
    for(var i=0;i<lis.length;i++){
       lis[i].index=i
        lis[i].onclick=function(){
            console.log(this.index)
            for(var j=0;j<lis.length;j++){
               lis[j].className="" ;
               divs[j].style.display="none"
              
            }
            divs[this.index].style.display="block"
            this.className="current"
           
            
           
        }
       
        
    }
    
    

}

