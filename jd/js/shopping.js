window.onload=function(){
    var scroll=document.querySelector(".scroll_l")
    var moveUl=scroll.querySelector("ul")
    console.log(moveUl)
   
    
    var startTransition = function () {
		moveUl.style.transition = 'all .2s';
	}

	var endTransition = function () {
		moveUl.style.transition = '';
	}

	// 由于 移动的距离 无法确定 所以提取为参数
	var setTransform = function (distance) {
		moveUl.style.transform = 'translateX('+distance+'px)';
	}

    var index=1;
    var width=20;
	// 开启定时器
	var timeId = setInterval(function () {
		// 累加
        index++;
        console.log(index)
        if(index==17){
            setTransform(0); 
            startTransition();
            index=1
        }

		// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
		// moveUl.style.transition = 'all .3s';
		startTransition();

		// 修改 ul的位置
		// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        setTransform(index*width*-1);
        

	},1000);

    
}