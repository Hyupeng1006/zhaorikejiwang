
//浮动导航====================================
$(function(){	
	$(window).scroll(function(){
		if($(window).scrollTop()>80){
			$("#header_f2").fadeIn("slow");
		}else{
			$("#header_f2").fadeOut("slow");
		}
	})
})


//回到头部====================================
function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#return').show();
	}else{
		$('#return').hide();
	}
}
$(document).ready(function(e) {
	b();
	$('#return').click(function(){
		$(document).scrollTop(0);	
	})
});

$(window).scroll(function(e){
	b();		
})