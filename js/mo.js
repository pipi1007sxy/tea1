window.addEventListener('load',function(){
	
	//获取元素
		    var tool=document.getElementById(".tool");
			
			document.addEventListener("touchstart",function(e){
				start_x= e.targetTouches[0].pageX;//获取手指初始坐标
			
				console.log('我摸了');
				//touches正在触摸屏幕的所有手指（手指离开无
				//targetTouches触摸DOM的手指（手指离开无 经常用
				//changedTouches 手指状态发生了改变的列表，从无到有
				
			})
			//移动手指touchmove：计算手指滑动距离
			document.addEventListener("touchmove",function(e){
				e.preventDefault();
				tool.style.transform=rotateZ(180);
				console.log('我继续摸了');
			})
			document.addEventListener("touchend",function(e){
				console.log('我不摸了');
			})
})
