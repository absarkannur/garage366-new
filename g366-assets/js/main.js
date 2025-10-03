! function(e) {
    "use strict";
    var t, r = e(window);

    function o() {
        var t, o, a, l, s;
        t = e(".full-screen"), o = r.height(), t.css("min-height", o), a = e("header").height(), l = e(".screen-height"), s = r.height() - a, l.css("height", s), 992 > e(window).width() && e(".navbar-nav .dropdown-menu.sub-menu").css("display", "none")
    }

    function a() {
        "undefined" != typeof skrollr && null !== skrollr && (t = skrollr.init({
            forceHeight: !1,
            smoothScrollingDuration: 1e3,
            mobileCheck: function() {
                return !1
            }
        }))
    }

    function l() {
        t && "function" == typeof t.destroy && (t.destroy(), t = null), e(window).width() >= 1200 && setTimeout(function() {
            a()
        }, 1e3)
    }
    e("#preloader").fadeOut("normall", function() {
        e(this).remove()
    }), r.on("scroll", function() {
        var t, o = r.scrollTop();
        o < e(".navbar-default").outerHeight() + 200 ? e("header").removeClass("scrollHeader").addClass("fixedHeader") : (e("header").removeClass("fixedHeader").addClass("scrollHeader"), e(".fixed-header header").removeClass("scrollHeader").addClass("fixedHeader"))
    }), e(window).scroll(function() {
        var t, r, o, a;
        (t = document.documentElement.scrollTop) > 200 ? e(".scroll-bar").addClass("visible") : e(".scroll-bar").removeClass("visible"), r = document.documentElement.scrollHeight, o = document.documentElement.clientHeight, a = (t = document.documentElement.scrollTop) / (r - o - 200) * 100, e(".scroll-indicate").css("height", Math.min(a, 100) + "%")
    }), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }).init(), e(".parallax,.bg-img").each(function(t) {
        e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).data("background") + ")")
    }), e(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }), e(".wpml-ls-menu-item a, .pll-parent-menu-item a, .lang-item a").each(function() {
        var t = e(this),
            r = t.text();
        t.html(r.replace("&lt", "<").replace("&gt", ">"))
    }), r.resize(function(e) {
        setTimeout(function() {
            o()
        }, 500), e.preventDefault()
    }), o(), e(window).width() >= 1200 && a(), e(window).on("load", function() {
        e(window).width() >= 1200 && l()
    });
    let s;
    e(window).on("resize", function() {
        clearTimeout(s), s = setTimeout(function() {
            l()
        }, 300)
    }), e(document).ready(function() {
        if (e(".owl-carousel").each(function() {
                let t = e(this),
                    r = t.attr("data-owl"),
                    o = {};
                if (r) try {
                    o = JSON.parse(r)
                } catch (a) {
                    return
                }
                try {
                    t.owlCarousel(o)
                } catch (l) {}
            }), 0 !== e(".verticaltab").length && e(".verticaltab").easyResponsiveTabs({
                type: "vertical",
                width: "auto",
                fit: !0,
                closed: "accordion",
                tabidentify: "hor_1",
                activate: function(t) {
                    var r = e(this),
                        o = e("#nested-tabInfo2");
                    e("span", o).text(r.text()), o.show()
                }
            }), e(".countdown").countdown({
                date: "01 Oct 2028 00:01:00",
                format: "on"
            }), e(".current-year").text(new Date().getFullYear()), e(".navbar-nav li.has-sub").removeClass("active"), e("header").hasClass("header-style1") && e("body").addClass("header-style1"), e("header").hasClass("header-style2") && e("body").addClass("header-style2"), e("header").hasClass("header-style3") && e("body").addClass("header-style3"), e(".odometer").waypoint(function(t) {
                if ("down" === t) {
                    let r = e(this.element).attr("data-count");
                    e(this.element).html(r)
                }
            }, {
                offset: "80%"
            }), 0 !== e(".portfolio-container").length && e(window).width() > 991) {
            gsap.registerPlugin(ScrollTrigger);
            let t = gsap.utils.toArray(".portfolio-wrap");
            gsap.to(t, {
                xPercent: -100 * (t.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".portfolio-container",
                    pin: !0,
                    scrub: 1,
                    end: () => "+=" + document.querySelector(".portfolio-container").offsetWidth
                }
            })
        }
        if (e(".cursor-helper").length) {
            var r = document.querySelector(".cursor-helper-outer"),
                o = document.querySelector(".cursor-helper-inner"),
                a = document.querySelectorAll("a"),
                l = document.querySelectorAll("h2"),
                s = document.querySelectorAll("footer"),
                n = document.querySelectorAll(".owl-carousel");
            document.addEventListener("mousemove", function(e) {
                e.clientX, e.clientY, r.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
            }), document.addEventListener("mousemove", function(e) {
                var t = e.clientX,
                    r = e.clientY;
                o.style.left = t + "px", o.style.top = r + "px"
            }), document.addEventListener("mousedown", function() {
                r.classList.add("click"), o.classList.add("cursor-helper-innerhover")
            }), document.addEventListener("mouseup", function() {
                r.classList.remove("click"), o.classList.remove("cursor-helper-innerhover")
            }), a.forEach(e => {
                e.addEventListener("mouseover", () => {
                    r.classList.add("cursor-link")
                }), e.addEventListener("mouseleave", () => {
                    r.classList.remove("cursor-link")
                })
            }), l.forEach(t => {
                t.addEventListener("mouseover", () => {
                    r.classList.add("cursor-title"), e("h2").css({
                        cursor: "none"
                    })
                }), t.addEventListener("mouseleave", () => {
                    r.classList.remove("cursor-title")
                })
            }), s.forEach(e => {
                e.addEventListener("mouseover", () => {
                    r.classList.add("cursor-light")
                }), e.addEventListener("mouseleave", () => {
                    r.classList.remove("cursor-light")
                })
            }), n.forEach(e => {
                e.addEventListener("mouseover", () => {
                    r.classList.add("cursor-slider")
                }), e.addEventListener("mouseleave", () => {
                    r.classList.remove("cursor-slider")
                })
            })
        }
    }), e(document).ready(function() {
        e(".wlt-btn, .wlt-overlay-bg").on("click", function() {
            e(".wlt-overlay-bg").hasClass("active") ? e(".wlt-overlay-bg").animate({
                opacity: "0"
            }, 500, function() {
                e(".wlt-overlay-bg").removeClass("active").hide()
            }) : e(".wlt-overlay-bg").addClass("active").show().animate({
                opacity: "1"
            }, 500, function() {}), e(".wlt-sidebar-main").toggleClass("active")
        }), e(".wlt-sidebar-inner").scrollbar()
    }), r.on("load", function() {
        e(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(), e(".portfolio-link").on("click", e => {
            e.stopPropagation()
        })
    })
}(jQuery);