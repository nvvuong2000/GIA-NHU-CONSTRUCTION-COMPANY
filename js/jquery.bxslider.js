! function(X) {
    var Y = {},
        V = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 1e3,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            wrapperClass: "bx-wrapper",
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            autoSlideForOnePage: !1,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {},
            onSliderResize: function() {}
        };
    X.fn.bxSlider = function(e) {
        if (0 == this.length) return this;
        if (1 < this.length) return this.each(function() {
            X(this).bxSlider(e)
        }), this;
        var d = {},
            c = this;
        Y.el = this;

        function s() {
            d.settings = X.extend({}, V, e), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = c.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = {
                index: d.settings.startSlide
            }, d.carousel = 1 < d.settings.minSlides || 1 < d.settings.maxSlides, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" == d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" != d.settings.mode && function() {
                var t = document.createElement("div"),
                    e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var i in e)
                    if (void 0 !== t.style[e[i]]) return d.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0;
                return !1
            }(), "vertical" == d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), c.data("origStyle", c.attr("style")), c.children(d.settings.slideSelector).each(function() {
                X(this).data("origStyle", X(this).attr("style"))
            }), r()
        }

        function t() {
            for (var t = "", e = u(), i = 0; i < e; i++) {
                var s = "";
                d.settings.buildPager && X.isFunction(d.settings.buildPager) ? (s = d.settings.buildPager(i), d.pagerEl.addClass("bx-custom-pager")) : (s = "", d.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + s + "</a></div>"
            }
            d.pagerEl.html(t)
        }
        var n = X(window).width(),
            o = X(window).height(),
            r = function() {
                c.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = c.parent(), d.loader = X('<div class="bx-loading" />'), d.viewport.prepend(d.loader), c.css({
                    width: "horizontal" == d.settings.mode ? 100 * d.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), d.usingCSS && d.settings.easing ? c.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing");
                v();
                d.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), d.viewport.parent().css({
                    maxWidth: h()
                }), d.settings.pager || d.viewport.parent().css({
                    margin: "0 auto 0px"
                }), d.children.css({
                    float: "horizontal" == d.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), d.children.css("width", p()), "horizontal" == d.settings.mode && 0 < d.settings.slideMargin && d.children.css("marginRight", d.settings.slideMargin), "vertical" == d.settings.mode && 0 < d.settings.slideMargin && d.children.css("marginBottom", d.settings.slideMargin), "fade" == d.settings.mode && (d.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), d.children.eq(d.settings.startSlide).css({
                    zIndex: d.settings.slideZIndex,
                    display: "block"
                })), d.controls.el = X('<div class="bx-controls" />'), d.settings.captions && T(), d.active.last = d.settings.startSlide == u() - 1, d.settings.video && c.fitVids();
                var t = d.children.eq(d.settings.startSlide);
                "all" == d.settings.preloadImages && (t = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.pager && S(), d.settings.controls && b(), d.settings.auto && d.settings.autoControls && w(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), a(t, l)
            },
            a = function(t, e) {
                var i = t.find("img, iframe").length;
                if (0 != i) {
                    var s = 0;
                    t.find("img, iframe").each(function() {
                        X(this).one("load", function() {
                            ++s == i && e()
                        }).each(function() {
                            this.complete && X(this).load()
                        })
                    })
                } else e()
            },
            l = function() {
                if (d.settings.infiniteLoop && "fade" != d.settings.mode && !d.settings.ticker) {
                    var t = "vertical" == d.settings.mode ? d.settings.minSlides : d.settings.maxSlides,
                        e = d.children.slice(0, t).clone().addClass("bx-clone"),
                        i = d.children.slice(-t).clone().addClass("bx-clone");
                    c.append(e).prepend(i)
                }
                d.loader.remove(), x(), "vertical" == d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(g()), c.redrawSlider(), d.settings.onSliderLoad(d.active.index), d.initialized = !0, d.settings.responsive && X(window).bind("resize", O), d.settings.auto && d.settings.autoStart && (1 < u() || d.settings.autoSlideForOnePage) && D(), d.settings.ticker && A(), d.settings.pager && M(d.settings.startSlide), d.settings.controls && q(), d.settings.touchEnabled && !d.settings.ticker && H()
            },
            g = function() {
                var e = 0,
                    t = X();
                if ("vertical" == d.settings.mode || d.settings.adaptiveHeight)
                    if (d.carousel) {
                        var s = 1 == d.settings.moveSlides ? d.active.index : d.active.index * f();
                        for (t = d.children.eq(s), i = 1; i <= d.settings.maxSlides - 1; i++) t = s + i >= d.children.length ? t.add(d.children.eq(i - 1)) : t.add(d.children.eq(s + i))
                    } else t = d.children.eq(d.active.index);
                else t = d.children;
                return "vertical" == d.settings.mode ? (t.each(function(t) {
                    e += X(this).outerHeight()
                }), 0 < d.settings.slideMargin && (e += d.settings.slideMargin * (d.settings.minSlides - 1))) : e = Math.max.apply(Math, t.map(function() {
                    return X(this).outerHeight(!1)
                }).get()), "border-box" == d.viewport.css("box-sizing") ? e += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" == d.viewport.css("box-sizing") && (e += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), e
            },
            h = function() {
                var t = "100%";
                return 0 < d.settings.slideWidth && (t = "horizontal" == d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), t
            },
            p = function() {
                var t = d.settings.slideWidth,
                    e = d.viewport.width();
                return 0 == d.settings.slideWidth || d.settings.slideWidth > e && !d.carousel || "vertical" == d.settings.mode ? t = e : 1 < d.settings.maxSlides && "horizontal" == d.settings.mode && (e > d.maxThreshold || e < d.minThreshold && (t = (e - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides)), t
            },
            v = function() {
                var t = 1;
                if ("horizontal" == d.settings.mode && 0 < d.settings.slideWidth)
                    if (d.viewport.width() < d.minThreshold) t = d.settings.minSlides;
                    else if (d.viewport.width() > d.maxThreshold) t = d.settings.maxSlides;
                else {
                    var e = d.children.first().width() + d.settings.slideMargin;
                    t = Math.floor((d.viewport.width() + d.settings.slideMargin) / e)
                } else "vertical" == d.settings.mode && (t = d.settings.minSlides);
                return t
            },
            u = function() {
                var t = 0;
                if (0 < d.settings.moveSlides)
                    if (d.settings.infiniteLoop) t = Math.ceil(d.children.length / f());
                    else
                        for (var e = 0, i = 0; e < d.children.length;) ++t, e = i + v(), i += d.settings.moveSlides <= v() ? d.settings.moveSlides : v();
                else t = Math.ceil(d.children.length / v());
                return t
            },
            f = function() {
                return 0 < d.settings.moveSlides && d.settings.moveSlides <= v() ? d.settings.moveSlides : v()
            },
            x = function() {
                if (d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop) {
                    if ("horizontal" == d.settings.mode) {
                        var t = d.children.last(),
                            e = t.position();
                        m(-(e.left - (d.viewport.width() - t.outerWidth())), "reset", 0)
                    } else if ("vertical" == d.settings.mode) {
                        var i = d.children.length - d.settings.minSlides;
                        e = d.children.eq(i).position();
                        m(-e.top, "reset", 0)
                    }
                } else {
                    e = d.children.eq(d.active.index * f()).position();
                    d.active.index == u() - 1 && (d.active.last = !0), null != e && ("horizontal" == d.settings.mode ? m(-e.left, "reset", 0) : "vertical" == d.settings.mode && m(-e.top, "reset", 0))
                }
            },
            m = function(t, e, i, s) {
                if (d.usingCSS) {
                    var n = "vertical" == d.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    c.css("-" + d.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (c.css(d.animProp, n), c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), k()
                    })) : "reset" == e ? c.css(d.animProp, n) : "ticker" == e && (c.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), c.css(d.animProp, n), c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), m(s.resetValue, "reset", 0), W()
                    }))
                } else {
                    var o = {};
                    o[d.animProp] = t, "slide" == e ? c.animate(o, i, d.settings.easing, function() {
                        k()
                    }) : "reset" == e ? c.css(d.animProp, t) : "ticker" == e && c.animate(o, speed, "linear", function() {
                        m(s.resetValue, "reset", 0), W()
                    })
                }
            },
            S = function() {
                d.settings.pagerCustom ? d.pagerEl = X(d.settings.pagerCustom) : (d.pagerEl = X('<div class="bx-pager" />'), d.settings.pagerSelector ? X(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), t()), d.pagerEl.on("click", "a", y)
            },
            b = function() {
                d.controls.next = X('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = X('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click", C), d.controls.prev.bind("click", E), d.settings.nextSelector && X(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && X(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = X('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))
            },
            w = function() {
                d.controls.start = X('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = X('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = X('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", P), d.controls.autoEl.on("click", ".bx-stop", z), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? X(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), I(d.settings.autoStart ? "stop" : "start")
            },
            T = function() {
                d.children.each(function(t) {
                    var e = X(this).find("img:first").attr("title");
                    null != e && ("" + e).length && X(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                })
            },
            C = function(t) {
                d.settings.auto && c.stopAuto(), c.goToNextSlide(), t.preventDefault()
            },
            E = function(t) {
                d.settings.auto && c.stopAuto(), c.goToPrevSlide(), t.preventDefault()
            },
            P = function(t) {
                c.startAuto(), t.preventDefault()
            },
            z = function(t) {
                c.stopAuto(), t.preventDefault()
            },
            y = function(t) {
                d.settings.auto && c.stopAuto();
                var e = X(t.currentTarget);
                if (void 0 !== e.attr("data-slide-index")) {
                    var i = parseInt(e.attr("data-slide-index"));
                    i != d.active.index && c.goToSlide(i), t.preventDefault()
                }
            },
            M = function(i) {
                var t = d.children.length;
                if ("short" == d.settings.pagerType) return 1 < d.settings.maxSlides && (t = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(i + 1 + d.settings.pagerShortSeparator + t);
                d.pagerEl.find("a").removeClass("active"), d.pagerEl.each(function(t, e) {
                    X(e).find("a").eq(i).addClass("active")
                })
            },
            k = function() {
                if (d.settings.infiniteLoop) {
                    var t = "";
                    0 == d.active.index ? t = d.children.eq(0).position() : d.active.index == u() - 1 && d.carousel ? t = d.children.eq((u() - 1) * f()).position() : d.active.index == d.children.length - 1 && (t = d.children.eq(d.children.length - 1).position()), t && ("horizontal" == d.settings.mode ? m(-t.left, "reset", 0) : "vertical" == d.settings.mode && m(-t.top, "reset", 0))
                }
                d.working = !1, d.settings.onSlideAfter(d.children.eq(d.active.index), d.oldIndex, d.active.index)
            },
            I = function(t) {
                d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[t]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
            },
            q = function() {
                1 == u() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 == d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index == u() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled")))
            },
            D = function() {
                if (0 < d.settings.autoDelay) setTimeout(c.startAuto, d.settings.autoDelay);
                else c.startAuto();
                d.settings.autoHover && c.hover(function() {
                    d.interval && (c.stopAuto(!0), d.autoPaused = !0)
                }, function() {
                    d.autoPaused && (c.startAuto(!0), d.autoPaused = null)
                })
            },
            A = function() {
                var t = 0;
                if ("next" == d.settings.autoDirection) c.append(d.children.clone().addClass("bx-clone"));
                else {
                    c.prepend(d.children.clone().addClass("bx-clone"));
                    var e = d.children.first().position();
                    t = "horizontal" == d.settings.mode ? -e.left : -e.top
                }
                m(t, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && !d.usingCSS && d.viewport.hover(function() {
                    c.stop()
                }, function() {
                    var e = 0;
                    d.children.each(function(t) {
                        e += "horizontal" == d.settings.mode ? X(this).outerWidth(!0) : X(this).outerHeight(!0)
                    });
                    var t = d.settings.speed / e,
                        i = "horizontal" == d.settings.mode ? "left" : "top",
                        s = t * (e - Math.abs(parseInt(c.css(i))));
                    W(s)
                }), W()
            },
            W = function(t) {
                speed = t || d.settings.speed;
                var e = {
                        left: 0,
                        top: 0
                    },
                    i = {
                        left: 0,
                        top: 0
                    };
                "next" == d.settings.autoDirection ? e = c.find(".bx-clone").first().position() : i = d.children.first().position();
                var s = "horizontal" == d.settings.mode ? -e.left : -e.top,
                    n = "horizontal" == d.settings.mode ? -i.left : -i.top;
                m(s, "ticker", speed, {
                    resetValue: n
                })
            },
            H = function() {
                d.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, d.viewport.bind("touchstart", L)
            },
            L = function(t) {
                if (d.working) t.preventDefault();
                else {
                    d.touch.originalPos = c.position();
                    var e = t.originalEvent;
                    d.touch.start.x = e.changedTouches[0].pageX, d.touch.start.y = e.changedTouches[0].pageY, d.viewport.bind("touchmove", F), d.viewport.bind("touchend", N)
                }
            },
            F = function(t) {
                var e = t.originalEvent,
                    i = Math.abs(e.changedTouches[0].pageX - d.touch.start.x),
                    s = Math.abs(e.changedTouches[0].pageY - d.touch.start.y);
                if (s < 3 * i && d.settings.preventDefaultSwipeX ? t.preventDefault() : i < 3 * s && d.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != d.settings.mode && d.settings.oneToOneTouch) {
                    var n = 0;
                    if ("horizontal" == d.settings.mode) {
                        var o = e.changedTouches[0].pageX - d.touch.start.x;
                        n = d.touch.originalPos.left + o
                    } else {
                        o = e.changedTouches[0].pageY - d.touch.start.y;
                        n = d.touch.originalPos.top + o
                    }
                    m(n, "reset", 0)
                }
            },
            N = function(t) {
                d.viewport.unbind("touchmove", F);
                var e = t.originalEvent,
                    i = 0;
                if (d.touch.end.x = e.changedTouches[0].pageX, d.touch.end.y = e.changedTouches[0].pageY, "fade" == d.settings.mode) {
                    (s = Math.abs(d.touch.start.x - d.touch.end.x)) >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? c.goToNextSlide() : c.goToPrevSlide(), c.stopAuto())
                } else {
                    var s = 0;
                    i = "horizontal" == d.settings.mode ? (s = d.touch.end.x - d.touch.start.x, d.touch.originalPos.left) : (s = d.touch.end.y - d.touch.start.y, d.touch.originalPos.top), !d.settings.infiniteLoop && (0 == d.active.index && 0 < s || d.active.last && s < 0) ? m(i, "reset", 200) : Math.abs(s) >= d.settings.swipeThreshold ? (s < 0 ? c.goToNextSlide() : c.goToPrevSlide(), c.stopAuto()) : m(i, "reset", 200)
                }
                d.viewport.unbind("touchend", N)
            },
            O = function(t) {
                if (d.initialized) {
                    var e = X(window).width(),
                        i = X(window).height();
                    n == e && o == i || (n = e, o = i, c.redrawSlider(), d.settings.onSliderResize.call(c, d.active.index))
                }
            };
        return c.goToSlide = function(t, e) {
            if (!d.working && d.active.index != t)
                if (d.working = !0, d.oldIndex = d.active.index, t < 0 ? d.active.index = u() - 1 : t >= u() ? d.active.index = 0 : d.active.index = t, d.settings.onSlideBefore(d.children.eq(d.active.index), d.oldIndex, d.active.index), "next" == e ? d.settings.onSlideNext(d.children.eq(d.active.index), d.oldIndex, d.active.index) : "prev" == e && d.settings.onSlidePrev(d.children.eq(d.active.index), d.oldIndex, d.active.index), d.active.last = d.active.index >= u() - 1, d.settings.pager && M(d.active.index), d.settings.controls && q(), "fade" == d.settings.mode) d.settings.adaptiveHeight && d.viewport.height() != g() && d.viewport.animate({
                    height: g()
                }, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({
                    zIndex: 0
                }), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function() {
                    X(this).css("zIndex", d.settings.slideZIndex), k()
                });
                else {
                    d.settings.adaptiveHeight && d.viewport.height() != g() && d.viewport.animate({
                        height: g()
                    }, d.settings.adaptiveHeightSpeed);
                    var i = 0,
                        s = {
                            left: 0,
                            top: 0
                        };
                    if (!d.settings.infiniteLoop && d.carousel && d.active.last)
                        if ("horizontal" == d.settings.mode) {
                            s = (o = d.children.eq(d.children.length - 1)).position(), i = d.viewport.width() - o.outerWidth()
                        } else {
                            var n = d.children.length - d.settings.minSlides;
                            s = d.children.eq(n).position()
                        }
                    else if (d.carousel && d.active.last && "prev" == e) {
                        var o, r = 1 == d.settings.moveSlides ? d.settings.maxSlides - f() : (u() - 1) * f() - (d.children.length - d.settings.maxSlides);
                        s = (o = c.children(".bx-clone").eq(r)).position()
                    } else if ("next" == e && 0 == d.active.index) s = c.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1;
                    else if (0 <= t) {
                        var a = t * f();
                        s = d.children.eq(a).position()
                    }
                    if (void 0 !== s) {
                        var l = "horizontal" == d.settings.mode ? -(s.left - i) : -s.top;
                        m(l, "slide", d.settings.speed)
                    }
                }
        }, c.goToNextSlide = function() {
            if (d.settings.infiniteLoop || !d.active.last) {
                var t = parseInt(d.active.index) + 1;
                c.goToSlide(t, "next")
            }
        }, c.goToPrevSlide = function() {
            if (d.settings.infiniteLoop || 0 != d.active.index) {
                var t = parseInt(d.active.index) - 1;
                c.goToSlide(t, "prev")
            }
        }, c.startAuto = function(t) {
            d.interval || (d.interval = setInterval(function() {
                "next" == d.settings.autoDirection ? c.goToNextSlide() : c.goToPrevSlide()
            }, d.settings.pause), d.settings.autoControls && 1 != t && I("stop"))
        }, c.stopAuto = function(t) {
            d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && 1 != t && I("start"))
        }, c.getCurrentSlide = function() {
            return d.active.index
        }, c.getCurrentSlideElement = function() {
            return d.children.eq(d.active.index)
        }, c.getSlideCount = function() {
            return d.children.length
        }, c.redrawSlider = function() {
            d.children.add(c.find(".bx-clone")).width(p()), d.viewport.css("height", g()), d.settings.ticker || x(), d.active.last && (d.active.index = u() - 1), d.active.index >= u() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (t(), M(d.active.index))
        }, c.destroySlider = function() {
            d.initialized && (d.initialized = !1, X(".bx-clone", this).remove(), d.children.each(function() {
                null != X(this).data("origStyle") ? X(this).attr("style", X(this).data("origStyle")) : X(this).removeAttr("style")
            }), null != X(this).data("origStyle") ? this.attr("style", X(this).data("origStyle")) : X(this).removeAttr("style"), X(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && d.pagerEl.remove(), X(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && X(window).unbind("resize", O))
        }, c.reloadSlider = function(t) {
            null != t && (e = t), c.destroySlider(), s()
        }, s(), this
    }
}(jQuery);