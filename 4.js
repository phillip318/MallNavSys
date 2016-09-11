// JavaScript Document
function myReady(fn){
	//判断浏览器  如果是现代浏览器   直接用DOMContentLoaded
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded",fn,false);
	}else{
		//IE浏览器
		IEContentLoaded(fn);	
	}
	
	//针对ie浏览器   写一个类似现代浏览器一样的DOMContentLoaded
	function IEContentLoaded(){
		var d = document;
		
		(function(){
				try{
			         d.documentElement.doScroll('left');	
				}catch(e){
					setTimeout(arguments.callee,10);
					return;
				};
				fn();
		})();
		
		//
		d.onreadyStatechange = function(){
			if(d.readyState == 'complete'){
				d.onreadystatechange ==null;
				fn();	
			}	
		}
	}
	
	
}