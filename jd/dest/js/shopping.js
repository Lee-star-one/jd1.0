window.onload=function(){var n=document.querySelector(".scroll_l").querySelector("ul");console.log(n);function o(){n.style.transition="all .2s"}function l(o){n.style.transform="translateX("+o+"px)"}var t=1;setInterval(function(){t++,console.log(t),17==t&&(l(0),o(),t=1),o(),l(20*t*-1)},1e3)};