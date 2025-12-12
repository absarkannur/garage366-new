$(function(){

	// // Client Animation

    var controller = new ScrollMagic();

    // var wipeAnimation = new TimelineMax()
	// 		.fromTo("section.panel.turqoise", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green", 1, {y:  "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green5", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green6", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green7", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green8", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green9", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green10", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green11", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
	// 		.fromTo("section.panel.green12", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone});

    // var scene = new ScrollScene({ triggerElement: "#pinContainer", triggerHook: "onLeave", duration: 10000 })
    //     .setTween(wipeAnimation)
    //     .setPin("#pinContainer")
    //     .addIndicators()
    //     .addTo(controller);

	// About Animation

	var wipeAnimationAbout = new TimelineMax()
		// .fromTo("section.ab_panel.one .ff_image", 1,{x:  "130%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.ab_panel.two", 1, {y:  "-100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo("section.ab_panel.two .ff_image", 1,{x:  "130%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.ab_panel.three", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo("section.ab_panel.three .ff_image", 1,{x:  "130%"}, {x: "0%", ease: Linear.easeNone});

	function stepOneComplete(){
		setTimeout(function(){
			console.log('Loaded scene 1');
			$('#pinAbSlide2 #pin').show();
		},1500);
	}
	
	function stepTwoComplete(){
		setTimeout(function(){
			console.log('Loaded scene 2');
			$('#pinAbSlide3 #pin').show();
		},1500);
	}


	var scene2 = new ScrollScene({ triggerElement: "#pinContainer_about", triggerHook: "onLeave", duration: 2000 })
		.setTween(wipeAnimationAbout)
		.setPin("#pinContainer_about")
		.addIndicators()
		.addTo(controller);



	// Demo #1 ---------------------------------------------
	
	var wipeAnimationHome = new TimelineMax()
	.fromTo("#home_video", 1,{scale:  1 }, {scale: 4.5, zIndex: 999, ease: Linear.easeNone});
	
	var scene_home = new ScrollScene({ triggerElement: "#pin_home", triggerHook: "onLeave", duration: 600 })
	.setTween(wipeAnimationHome)
	.setPin("#pin_home")
	.addIndicators()
	.addTo(controller);

	// -----------------------------------------------------

	var lFollowX = 0,
			lFollowY = 0,
			x = 0,
			y = 0,
			friction = 1 / 30;

	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		//  translate = 'translateX(' + x + 'px, ' + y + 'px)';
		translate = 'translateX(' + x + 'px) translateY(' + y +'px)';

		$('.animate-this').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
		});

		window.requestAnimationFrame(moveBackground);
	}

	$(window).on('mousemove click', function(e) {
		
		var isHovered = $('.animate-this:hover').length > 0;
		
		//if(!$(e.target).hasClass('animate-this')) {
		if(!isHovered) {
			var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
					lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

			lFollowX = (70 * lMouseX) / 100;
			lFollowY = (60 * lMouseY) / 100;
		}
	});

	moveBackground();
	

	// Scroll Top View
	$(document).scroll(function(){

		var scroll = $(this).scrollTop();

		if( scroll > 1500 ){
			$('.scroll-to-top').show();
		} else {
			$('.scroll-to-top').hide();
		}


	});
	

});
  
