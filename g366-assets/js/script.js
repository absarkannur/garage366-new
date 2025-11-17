$(function(){

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

});
  

  