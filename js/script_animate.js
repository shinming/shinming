$(function() {
	
	//隱藏scrollbar
	/*
	$('html').css({				
		'overflow':'hidden',
	});
	*/
	
	//隱藏手機的網址列
	//$(window).width();  New width	
	if($(window).width()<480){
		window.scrollTo(0,1);
	}
	/**/
	$(window).resize(function() {
	  	$(window).width(); // New width
	  	if($(window).width()<480){
			window.scrollTo(0,1);
			//console.log("size2222:"+$(window).width())
		}	  
	});
	
		
	//抓menu的高度
	var menuHeight=$('#menu a').height();
	$('#section1').css('padding-top',menuHeight);	
	
	$(window).resize(function() {
		menuHeight=$('#menu a').height();
		$('#section1').css('padding-top',menuHeight);
	});
	
	//自我介紹為畫面滿版高度
	$('#section5').css('min-height',$(window).height()-menuHeight);
	$(window).resize(function() {	
		$('#section5').css('min-height',$(window).height()-menuHeight);  
	});
	
	//click menu 螢幕滑動到對應內容高度					
	$('#menu .nav li').find('a').click(function(){
		// 取得要前往的 id
		var _id = $(this).attr('href');
		console.log("this_id:"+_id);
				
		//animate先消失避免		
		if($(window).width()>480){
			$("#section1 img").css('opacity',0);
			$("#section3 img").css('opacity',0);
		}
		$(window).resize(function() {
			if($(window).width()>480){
				$("#section1 img").css('opacity',0);
				$("#section3 img").css('opacity',0);
			}	  
		});
		animate();
		/**/
		
		// 移動scrollTop (選單高度:40)
		$('html, body').stop(false,true).animate({
			scrollTop: $(_id).position().top - menuHeight 
		}, 900, 'easeInOutExpo');
		//console.log("menuHeight:"+menuHeight);
		//console.log("menu_position:"+$(_id).position().top );		
		return false;
	});
	
	
	$("#section1 img.iphone").css({opacity: 1});
	$("#section1 img.mac").css({opacity: 1});
	$("#section1 img.ipad").css({opacity: 1});
	
	
	$('#menu .nav li').removeClass("hitcolor");
	$('.menu1').addClass("hitcolor");	
	$('.menu1 .arrow').addClass("arrow_on");
	function animate(){	
		//scrollbar 高度判斷 menu選單變色
		$('#menu .nav li').removeClass("hitcolor");
		//$('.menu1').addClass("hitcolor");	
		//$('.menu1 .arrow').addClass("arrow_on");
		$("#section1 img").css('opacity',0);
		$("#section1 img.iphone").stop(false,true).delay(200).animate({opacity: 1}, 300);
		$("#section1 img.mac").stop(false,true).delay(600).animate({opacity: 1}, 300);
		$("#section1 img.ipad").stop(false,true).delay(1000).animate({opacity: 1}, 300);
		$("#section3 img").stop(true,false).animate({opacity: 0.3}, 300);
		$('.mosaic-block').stop(true,false).animate({opacity: 0.3}, 300);
		$('.photo img').stop(true,false).animate({marginTop:100}, 'fast');
		
		$(window).scroll(function () {
			//console.log("scrollTop:"+$(window).scrollTop());.
			var section1_pos= $('#section1').position().top - 10;
			var section2_pos= $('#section2').position().top - 10; 
			var section3_pos= $('#section3').position().top - 10;
			var section4_pos= $('#section5').position().top - 10;
			
			var scrollTop_now=$(window).scrollTop()+ menuHeight;
			var scrollBottom_now=$(window).height()- section4_pos  
			var now=scrollTop_now-scrollBottom_now 
			var all_heigh=$(document).height()
			
			if (scrollTop_now >= section1_pos && scrollTop_now < section2_pos) {
				//console.log("this box11111111111");
				$('#menu .nav li').removeClass("hitcolor");
				$('.arrow').removeClass("arrow_on");
				$('.menu1').addClass("hitcolor");
				$('.menu1 .arrow').addClass("arrow_on");
				/*animate*/
				//$("#section1 img").css('display','none');//opacity		
				$("#section1 img.iphone").stop(true,false).delay(150).animate({opacity: 1}, 300);
				$("#section1 img.mac").stop(true,false).delay(450).animate({opacity: 1}, 300);
				$("#section1 img.ipad").stop(true,false).delay(750).animate({opacity: 1}, 300);	
				/*animate*/
				$("#section3 img").stop(true,false).animate({opacity: 0.3}, 300);
				$('.mosaic-block').stop(true,false).animate({opacity: 0.3}, 300);
				$('.photo img').stop(true,false).animate({marginTop:100}, 'fast');	
			} 
			else if(scrollTop_now >= section2_pos && scrollTop_now < section3_pos) {
				//console.log("this box222222222");
				$('#menu .nav li').removeClass("hitcolor");
				$('.arrow').removeClass("arrow_on");
				$('.arrow_2').removeClass("arrow_line");
				$('.menu2').addClass("hitcolor");
				$('.menu2 .arrow').addClass("arrow_on");
				$('.menu2 .arrow_2').addClass("arrow_line");
				/*animate*/
				$("#section3 img").stop(true,false).animate({opacity: 0.3}, 300);
				$('.mosaic-block').stop(true,false).animate({opacity: 1}, 300);
				$('.photo img').stop(true,false).animate({marginTop:100}, 'fast');
			}				
			else if(scrollTop_now >= section3_pos && scrollTop_now < section4_pos) {
				//console.log("this box333333333333");
				$('#menu .nav li').removeClass("hitcolor");
				$('.arrow').removeClass("arrow_on")
				$('.arrow_2').removeClass("arrow_line");;
				$('.menu3').addClass("hitcolor");
				$('.menu3 .arrow').addClass("arrow_on");
				$('.menu3 .arrow_2').addClass("arrow_line");
				/*animate*/
				/*
				$("#section3 img.life1").stop(true,false).animate({marginBottom:10}, 'fast');
				$("#section3 img.life2").stop(true,false).animate({marginBottom:10}, 'fast');
				$("#section3 img.life3").stop(true,false).animate({marginBottom:10}, 'fast');
				*/
				$("#section3 img").stop(true,false).animate({opacity: 1}, 300);
				/*animate*/
				$('.mosaic-block').stop(true,false).animate({opacity: 0.3}, 300);
				$('.photo img').stop(true,false).animate({marginTop:100}, 'fast');			
			}
			else {
				//console.log("this box444444");	
				$('#menu .nav li').removeClass("hitcolor");
				$('.arrow').removeClass("arrow_on");
				$('.arrow_2').removeClass("arrow_line");
				$('.menu4').addClass("hitcolor");
				$('.menu4 .arrow').addClass("arrow_on");
				$('.menu4 .arrow_2').addClass("arrow_line");
				/*animate*/
				$("#section3 img").stop(true,false).animate({backgroundColor:'blue'}, 'fast');
				$('.mosaic-block').stop(true,false).animate({opacity: 0.3}, 300);
				$('.photo img').stop(true,false).animate({marginTop:50}, 'fast');								
			}
		});
	}	
	/**/
	
	/*animate*/
	//$("#section1 img").css('background-color','red');
	//$("#section1 img.iphone").delay(1500).fadeIn(300).css('visibility','visible');
	//$("#section1 img.iphone").slideUp(100);
	/*
	$("#section1 img").css('display','none');
	$("#section1 img.iphone").fadeIn(800);
	$("#section1 img.mac").delay(300).fadeIn(800);
	$("#section1 img.ipad").delay(600).fadeIn(800);	
	*/
	
	/*=================================================================*/
	//展開 工作作品(section6)works_sub
	$('#section2 .fade').click(function(){
		var YY=$(this).index();
		//先全關 再把對應作品展開
		$('.works_sub').css('display','none');
		$('#works_sub_'+YY).slideDown(800).css('display','block');
		//console.log("NN"+NN)
		//滑到對應的作品
		$('html, body').animate({
			scrollTop: $('#section6').position().top - menuHeight 
		}, 1200, 'easeInOutExpo');
	})
	
	//btn close
	$('#section6 .link_cross').click(function(){
		$('.works_sub').slideUp(800);		
		//$('.sub').slideDown(23600).css('display','none');
		$('html, body').animate({
			scrollTop: $('#section2').offset().top  - menuHeight 
		}, 1200, 'easeInOutExpo');
		//console.log(".link_cross:"+n)
	
	})
	
	/*=================================================================*/
	//展開 自己作品(section4)
	$('#section3 .interest').click(function(){
		var NN=$(this).index();
		console.log("NN: "+NN);
		//先全關 再把對應作品展開
		$('.sub').css('display','none');
		$('#sub_'+NN).slideDown(800).css('display','block');
		//console.log("NN"+NN)
		//滑到對應的作品
		$('html, body').animate({
			scrollTop: $('#section4').position().top - menuHeight 
		}, 1200, 'easeInOutExpo');		
	})
	
	//btn close
	$('#section4 .link_cross').click(function(){
		$('.sub').slideUp(800);		
		//$('.sub').slideDown(23600).css('display','none');
		$('html, body').animate({
			scrollTop: $('#section3').offset().top  - menuHeight 
		}, 1200, 'easeInOutExpo');
	
	})
	
	/*=================================================================*/
	//滑入 作品選單 
	$('#section3 .interest img').hover(function(){
		$(this).stop(true,false).animate({
			/*opacity: 1,*/			 
			boxShadow : "0 0 0px 18% #0aaaba"
		}, 'easeInOutExpo');
		
	},function(){
		$(this).stop(true,false).animate({
			/*opacity: 0.45,*/
			boxShadow : "0 0 0px 6% #0aaaba"
		}, 'easeInOutExpo');
	})
	
	
	
});

