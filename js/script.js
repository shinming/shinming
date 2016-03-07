$(function() {
	
	//隱藏scrollbar
	/*
	$('html').css({				
		'overflow':'hidden',
	});
	*/
	
	//隱藏手機的網址列
	//$(window).width();  New width	
	/*
	if($(window).width()<480){
		window.scrollTo(0,1);
	}
	$(window).resize(function() {
	  	$(window).width(); // New width
	  	if($(window).width()<480){
			window.scrollTo(0,1);
		}	  
	});
	*/
	/*var rotation = function (){
	   $("#section3 .interest ").rotate({
	      angle:0, 
	      animateTo:360, 
	      callback: rotation
	   });
	}
	rotation();*/
		
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
		//$("#section1 img").css('opacity',0);
		//$('#top_wrapper').removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		
		// 移動scrollTop (選單高度:40)
		$('html, body').animate({
			scrollTop: $(_id).position().top - menuHeight 
		}, 'slow');	
		return false;
	});
	
	
	
	
	//scrollbar 高度判斷 menu選單變色
	$('#menu .nav li').removeClass("hitcolor");
	$('.menu1').addClass("hitcolor");	
	$('.menu1 .arrow').addClass("arrow_on");
	$("#section1 img").removeClass("animated fadeOutDown").addClass("animated fadeInDown");
	
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
			/*animate menu的下箭頭符號*/	
			$('#menu .nav li').removeClass("hitcolor");
			$('.arrow').removeClass("arrow_on");
			$('.menu1').addClass("hitcolor");
			$('.menu1 .arrow').addClass("arrow_on");
			/*animate*/	
//			$('#top_wrapper').removeClass("animated fadeOutUp").addClass("animated fadeInDown");
			$("#section1 img").removeClass("animated bounceOutUp").addClass("animated bounceInDown");
			$('.mosaic-block').removeClass("animated flipInX").addClass("animated flipOutX");
			$("#section3 img").removeClass("animated bounceIn").addClass("animated bounceOut");		
			$('.photo img').removeClass("animated bounceInUp").addClass("animated bounceOutDown")
		} 
		else if(scrollTop_now >= section2_pos && scrollTop_now < section3_pos) {
			//console.log("this box222222222");
			/*animate menu的下箭頭符號*/
			$('#menu .nav li').removeClass("hitcolor");
			$('.arrow').removeClass("arrow_on");
			//$('.arrow_2').removeClass("arrow_line");
			$('.menu2').addClass("hitcolor");
			$('.menu2 .arrow').addClass("arrow_on");
			//$('.menu2 .arrow_2').addClass("arrow_line");
			/*animate*/
//			$('#top_wrapper').removeClass("animated fadeOutUp").addClass("animated fadeInDown");
			$("#section1 img").removeClass("animated bounceInDown").addClass("animated bounceOutUp");
			$('.mosaic-block').removeClass("animated flipOutX").addClass("animated flipInX");
			$("#section3 img").removeClass("animated bounceIn").addClass("animated bounceOut");	
			$('.photo img').removeClass("animated bounceInUp").addClass("animated bounceOutDown")
		}				
		else if(scrollTop_now >= section3_pos && scrollTop_now < section4_pos) {
			//console.log("this box333333333333");
			/*animate menu的下箭頭符號*/
			$('#menu .nav li').removeClass("hitcolor");
			$('.arrow').removeClass("arrow_on")
			//$('.arrow_2').removeClass("arrow_line");;
			$('.menu3').addClass("hitcolor");
			$('.menu3 .arrow').addClass("arrow_on");
			//$('.menu3 .arrow_2').addClass("arrow_line");
			/*animate*/
//			$('#top_wrapper').removeClass("animated fadeOutUp").addClass("animated fadeInDown");
			$("#section1 img").removeClass("animated bounceInDown").addClass("animated bounceOutUp");
			$('.mosaic-block').removeClass("animated flipInX").addClass("animated flipOutX");
			$("#section3 img").removeClass("animated bounceOut").addClass("animated bounceIn");	
			$('.photo img').removeClass("animated bounceInUp").addClass("animated bounceOutDown");	
		}
		else {
			//console.log("this box444444");
			/*animate menu的下箭頭符號*/	
			$('#menu .nav li').removeClass("hitcolor");
			$('.arrow').removeClass("arrow_on");
			//$('.arrow_2').removeClass("arrow_line");
			$('.menu4').addClass("hitcolor");
			$('.menu4 .arrow').addClass("arrow_on");
			//$('.menu4 .arrow_2').addClass("arrow_line");
			/*animate*/	
//			$('#top_wrapper').removeClass("animated fadeOutUp").addClass("animated fadeInDown");
			$("#section1 img").removeClass("animated bounceInDown").addClass("animated bounceOutUp");
			$('.mosaic-block').removeClass("animated flipInX").addClass("animated flipOutX");
			$("#section3 img").removeClass("animated bounceIn").addClass("animated bounceOut");	
			$('.photo img').removeClass("animated bounceOutDown").addClass("animated bounceInUp");						
		}
	});

	
	/*=================================================================*/
	//展開 工作作品(section6)works_sub
	$('#section2 .fade').click(function(){
//		$('#top_wrapper').removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		var YY=$(this).index();
		//先全關 再把對應作品展開
		$('.works_sub').css('display','none');
		$('#works_sub_'+YY).slideDown('slow').css('display','block');
		//滑到對應的作品
		$('html, body').animate({
			scrollTop: $('#section6').position().top - menuHeight 
		}, 'slow');
	})
	
	//btn close
	$('#section6 .link_cross').click(function(){
//		$('#top_wrapper').removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		$('.works_sub').slideUp('slow');		
		//$('.sub').slideDown(23600).css('display','none');
		$('html, body').animate({
			scrollTop: $('#section2').offset().top  - menuHeight 
		}, 'slow');
		//console.log(".link_cross:"+n)
	
	})
	
	/*=================================================================*/
	//展開 自己作品(section4)
	$('#section3 .interest').click(function(){
//		$('#top_wrapper').removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		var NN=$(this).index();
		console.log("NN: "+NN);
		//先全關 再把對應作品展開
		$('.sub').css('display','none');
		$('#sub_'+NN).slideDown('slow').css('display','block');
		//滑到對應的作品
		$('html, body').animate({
			scrollTop: $('#section4').position().top - menuHeight 
		}, 'slow');		
	})
	
	//btn close
	$('#section4 .link_cross').click(function(){
//		$('#top_wrapper').removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		$('.sub').slideUp('slow');		
		//$('.sub').slideDown(23600).css('display','none');
		$('html, body').animate({
			scrollTop: $('#section3').offset().top  - menuHeight 
		}, 'slow');
	
	})
	
	/*=================================================================*/

	//滑入 工作選單 	
	$('#section2 .mosaic-backdrop').hover(function(){
		$(this).stop(true,false).animate({		 
			boxShadow : "3px 3px 1px #d36b28;"
		}, 'easeInOutExpo');
		
	},function(){
		$(this).stop(true,false).animate({
			boxShadow : "8px 8px 3px #d36b28;"
		}, 'easeInOutExpo');
	})
	/**/



	//滑入 作品選單 	
	$('#section3 .interest img').hover(function(){
		$(this).stop(true,false).animate({		 
			boxShadow : "0 0 0px 15% #0aaaba"
		}, 'easeInOutExpo');
		
	},function(){
		$(this).stop(true,false).animate({
			boxShadow : "0 0 0px 6% #0aaaba"
		}, 'easeInOutExpo');
	})
	/**/
	
	
});

