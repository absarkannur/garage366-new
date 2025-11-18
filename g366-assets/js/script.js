$(function(){

	// Client Animation

    var controller = new ScrollMagic();

    var wipeAnimation = new TimelineMax()
			.fromTo("section.panel.turqoise", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green", 1, {y:  "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green5", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green6", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green7", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green8", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green9", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green10", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green11", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("section.panel.green12", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone});

    var scene = new ScrollScene({ triggerElement: "#pinContainer", triggerHook: "onLeave", duration: 10000 })
        .setTween(wipeAnimation)
        .setPin("#pinContainer")
        .addIndicators()
        .addTo(controller);

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

});
  

  