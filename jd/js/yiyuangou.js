var li = document.querySelectorAll('.li')
var div = document.querySelectorAll('.y-fuli-box')
console.log(li)
console.log(div)
  
function Tab(btns,contents){
      this.btns=btns
      this.contents=contents
      this.num=0
      var _this=this
      for(var i=0;i<this.btns.length;i++){
          (function(index){
              _this.btns[index].onclick=function(){
                  // console.log(1)
                   _this.tab(this,index)  //传的是实参
              }
          })(i)
      }
  }
  Tab.prototype.tab = function(_this1,index){  // 传的是形参
      this.btns[this.num].classList.remove('active')
      this.contents[this.num].classList.remove('active')
      _this1.classList.add('active')
      this.contents[index].classList.add('active')
      // console.log(this)
      // console.log(_this1)
      this.num=index
      //  console.log(index)
      //  console.log(this.num)
  }
  new Tab(li,div)
  
  var fa=document.getElementsByClassName("fa")[0]
  fa.onclick=function(){
    history.go(-1)
  }