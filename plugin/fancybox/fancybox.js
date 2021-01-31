! function(l, r, g, b) {
    "use strict";
    if (g)
        if (g.fn.fancybox) "console" in l && console.log("fancyBox already initialized");
        else {
            var t, e = {
                    loop: !1,
                    margin: [44, 0],
                    gutter: 50,
                    keyboard: !0,
                    arrows: !0,
                    infobar: !0,
                    toolbar: !0,
                    buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                    idleTime: 3,
                    smallBtn: "auto",
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: "auto"
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 500,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                    btnTpl: {
                        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
                    },
                    parentEl: "body",
                    autoFocus: !1,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 4e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0,
                        parentEl: ".fancybox-container",
                        axis: "y"
                    },
                    wheel: "auto",
                    onInit: g.noop,
                    beforeLoad: g.noop,
                    afterLoad: g.noop,
                    beforeShow: g.noop,
                    afterShow: g.noop,
                    beforeClose: g.noop,
                    afterClose: g.noop,
                    onActivate: g.noop,
                    onDeactivate: g.noop,
                    clickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        idleTime: !1,
                        margin: 0,
                        clickContent: function(t, e) {
                            return "image" === t.type && "toggleControls"
                        },
                        clickSlide: function(t, e) {
                            return "image" === t.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(t, e) {
                            return "image" === t.type && "zoom"
                        },
                        dblclickSlide: function(t, e) {
                            return "image" === t.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom"
                        },
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "Zurück",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Maßstab"
                        }
                    }
                },
                a = g(l),
                c = g(r),
                i = 0,
                d = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function(t) {
                    return l.setTimeout(t, 1e3 / 60)
                },
                f = function() {
                    var t, e = r.createElement("fakeelement"),
                        n = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (t in n)
                        if (e.style[t] !== b) return n[t];
                    return "transitionend"
                }(),
                p = function(t) {
                    return t && t.length && t[0].offsetHeight
                },
                o = function(t, e, n) {
                    var o = this;
                    o.opts = g.extend(!0, {
                        index: n
                    }, g.fancybox.defaults, e || {}), g.fancybox.isMobile && (o.opts = g.extend(!0, {}, o.opts, o.opts.mobile)), e && g.isArray(e.buttons) && (o.opts.buttons = e.buttons), o.id = o.opts.id || ++i, o.group = [], o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = null, o.createGroup(t), o.group.length && (o.$lastFocus = g(r.activeElement).blur(), o.slides = {}, o.init())
                };
            g.extend(o.prototype, {
                init: function() {
                    var t, e, n, o = this,
                        i = o.group[o.currIndex],
                        a = i.opts,
                        s = g.fancybox.scrollbarWidth;
                    o.scrollTop = c.scrollTop(), o.scrollLeft = c.scrollLeft(), g.fancybox.getInstance() || (g("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !l.MSStream ? "image" !== i.type && g("body").css("top", -1 * g("body").scrollTop()).addClass("fancybox-iosfix") : !g.fancybox.isMobile && r.body.scrollHeight > l.innerHeight && (s === b && (t = g('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), s = g.fancybox.scrollbarWidth = t[0].offsetWidth - t[0].clientWidth, t.remove()), g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + s + "px; }</style>"), g("body").addClass("compensate-for-scrollbar"))), n = "", g.each(a.buttons, function(t, e) {
                        n += a.btnTpl[e] || ""
                    }), e = g(o.translate(o, a.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass("fancybox-is-hidden").addClass(a.baseClass).data("FancyBox", o).appendTo(a.parentEl), o.$refs = {
                        container: e
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                        o.$refs[t] = e.find(".fancybox-" + t)
                    }), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                },
                translate: function(t, e) {
                    var o = t.opts.i18n[t.opts.lang];
                    return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                        var n = o[e];
                        return n === b ? t : n
                    })
                },
                createGroup: function(t) {
                    var l = this,
                        e = g.makeArray(t);
                    g.each(e, function(t, e) {
                        var n, o, i, a, s, r = {},
                            c = {};
                        g.isPlainObject(e) ? c = (r = e).opts || e : "object" === g.type(e) && g(e).length ? (c = (n = g(e)).data(), (c = g.extend({}, c, c.options || {})).$orig = n, r.src = c.src || n.attr("href"), r.type || r.src || (r.type = "inline", r.src = e)) : r = {
                            type: "html",
                            src: e + ""
                        }, r.opts = g.extend(!0, {}, l.opts, c), g.isArray(c.buttons) && (r.opts.buttons = c.buttons), o = r.type || r.opts.type, a = r.src || "", !o && a && (a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? o = "pdf" : (i = a.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (o = "video", r.opts.videoFormat || (r.opts.videoFormat = "video/" + ("ogv" === i[1] ? "ogg" : i[1]))) : "#" === a.charAt(0) && (o = "inline")), o ? r.type = o : l.trigger("objectNeedsType", r), r.index = l.group.length, r.opts.$orig && !r.opts.$orig.length && delete r.opts.$orig, !r.opts.$thumb && r.opts.$orig && (r.opts.$thumb = r.opts.$orig.find("img:first")), r.opts.$thumb && !r.opts.$thumb.length && delete r.opts.$thumb, "function" === g.type(r.opts.caption) && (r.opts.caption = r.opts.caption.apply(e, [l, r])), "function" === g.type(l.opts.caption) && (r.opts.caption = l.opts.caption.apply(e, [l, r])), r.opts.caption instanceof g || (r.opts.caption = r.opts.caption === b ? "" : r.opts.caption + ""), "ajax" === o && 1 < (s = a.split(/\s+/, 2)).length && (r.src = s.shift(), r.opts.filter = s.shift()), "auto" == r.opts.smallBtn && (-1 < g.inArray(o, ["html", "inline", "ajax"]) ? (r.opts.toolbar = !1, r.opts.smallBtn = !0) : r.opts.smallBtn = !1), "pdf" === o && (r.type = "iframe", r.opts.iframe.preload = !1), r.opts.modal && (r.opts = g.extend(!0, r.opts, {
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), l.group.push(r)
                    })
                },
                addEvents: function() {
                    var o = this;
                    o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                        t.stopPropagation(), t.preventDefault(), o.close(t)
                    }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                        t.stopPropagation(), t.preventDefault(), o.previous()
                    }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                        t.stopPropagation(), t.preventDefault(), o.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                        o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), a.on("orientationchange.fb resize.fb", function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? d(function() {
                            o.update()
                        }) : (o.$refs.stage.hide(), setTimeout(function() {
                            o.$refs.stage.show(), o.update()
                        }, 600))
                    }), c.on("focusin.fb", function(t) {
                        var e = g.fancybox ? g.fancybox.getInstance() : null;
                        e.isClosing || !e.current || !e.current.opts.trapFocus || g(t.target).hasClass("fancybox-container") || g(t.target).is(r) || e && "fixed" !== g(t.target).css("position") && !e.$refs.container.has(t.target).length && (t.stopPropagation(), e.focus(), a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))
                    }), c.on("keydown.fb", function(t) {
                        var e = o.current,
                            n = t.keyCode || t.which;
                        if (e && e.opts.keyboard && !g(t.target).is("input") && !g(t.target).is("textarea")) return 8 === n || 27 === n ? (t.preventDefault(), void o.close(t)) : 37 === n || 38 === n ? (t.preventDefault(), void o.previous()) : 39 === n || 40 === n ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, n)
                    }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, c.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                        o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
                    }), o.idleInterval = l.setInterval(function() {
                        o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    a.off("orientationchange.fb resize.fb"), c.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), this.idleInterval = null)
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function(t, o, e) {
                    var n, i, a, s, r, c, l, u = this,
                        d = u.group.length;
                    if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
                        if (t = parseInt(t, 10), !(i = u.current ? u.current.opts.loop : u.opts.loop) && (t < 0 || d <= t)) return !1;
                        if (n = u.firstRun = null === u.firstRun, !(d < 2 && !n && u.isDragging)) {
                            if (s = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, a = u.createSlide(t), 1 < d && ((i || 0 < a.index) && u.createSlide(t - 1), (i || a.index < d - 1) && u.createSlide(t + 1)), u.current = a, u.currIndex = a.index, u.currPos = a.pos, u.trigger("beforeShow", n), u.updateControls(), c = g.fancybox.getTranslate(a.$slide), a.isMoved = (0 !== c.left || 0 !== c.top) && !a.$slide.hasClass("fancybox-animated"), a.forcedDuration = b, g.isNumeric(o) ? a.forcedDuration = o : o = a.opts[n ? "animationDuration" : "transitionDuration"], o = parseInt(o, 10), n) return a.opts.animationEffect && o && u.$refs.container.css("transition-duration", o + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), p(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), a.$slide.addClass("fancybox-slide--current"), u.loadSlide(a), void u.preload("image");
                            g.each(u.slides, function(t, e) {
                                g.fancybox.stop(e.$slide)
                            }), a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), a.isMoved ? (r = Math.round(a.$slide.width()), g.each(u.slides, function(t, e) {
                                var n = e.pos - a.pos;
                                g.fancybox.animate(e.$slide, {
                                    top: 0,
                                    left: n * r + n * e.opts.gutter
                                }, o, function() {
                                    e.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === u.currPos && (a.isMoved = !1, u.complete())
                                })
                            })) : u.$refs.stage.children().removeAttr("style"), a.isLoaded ? u.revealContent(a) : u.loadSlide(a), u.preload("image"), s.pos !== a.pos && (l = "fancybox-slide--" + (s.pos > a.pos ? "next" : "previous"), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), s.isComplete = !1, o && (a.isMoved || a.opts.transitionEffect) && (a.isMoved ? s.$slide.addClass(l) : (l = "fancybox-animated " + l + " fancybox-fx-" + a.opts.transitionEffect, g.fancybox.animate(s.$slide, l, o, function() {
                                s.$slide.removeClass(l).removeAttr("style")
                            }))))
                        }
                    }
                },
                createSlide: function(t) {
                    var e, n, o = this;
                    return n = (n = t % o.group.length) < 0 ? o.group.length + n : n, !o.slides[t] && o.group[n] && (e = g('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = g.extend(!0, {}, o.group[n], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), o.updateSlide(o.slides[t])), o.slides[t]
                },
                scaleToActual: function(t, e, n) {
                    var o, i, a, s, r, c = this,
                        l = c.current,
                        u = l.$content,
                        d = parseInt(l.$slide.width(), 10),
                        f = parseInt(l.$slide.height(), 10),
                        p = l.width,
                        h = l.height;
                    "image" != l.type || l.hasError || !u || c.isAnimating || (g.fancybox.stop(u), c.isAnimating = !0, t = t === b ? .5 * d : t, e = e === b ? .5 * f : e, s = p / (o = g.fancybox.getTranslate(u)).width, r = h / o.height, i = .5 * d - .5 * p, a = .5 * f - .5 * h, d < p && (0 < (i = o.left * s - (t * s - t)) && (i = 0), i < d - p && (i = d - p)), f < h && (0 < (a = o.top * r - (e * r - e)) && (a = 0), a < f - h && (a = f - h)), c.updateCursor(p, h), g.fancybox.animate(u, {
                        top: a,
                        left: i,
                        scaleX: s,
                        scaleY: r
                    }, n || 330, function() {
                        c.isAnimating = !1
                    }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function(t) {
                    var e, n = this,
                        o = n.current,
                        i = o.$content;
                    "image" != o.type || o.hasError || !i || n.isAnimating || (g.fancybox.stop(i), n.isAnimating = !0, e = n.getFitPos(o), n.updateCursor(e.width, e.height), g.fancybox.animate(i, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / i.width(),
                        scaleY: e.height / i.height()
                    }, t || 330, function() {
                        n.isAnimating = !1
                    }))
                },
                getFitPos: function(t) {
                    var e, n, o, i, a, s = t.$content,
                        r = t.width,
                        c = t.height,
                        l = t.opts.margin;
                    return !(!s || !s.length || !r && !c) && ("number" === g.type(l) && (l = [l, l]), 2 == l.length && (l = [l[0], l[1], l[0], l[1]]), e = parseInt(this.$refs.stage.width(), 10) - (l[1] + l[3]), n = parseInt(this.$refs.stage.height(), 10) - (l[0] + l[2]), o = Math.min(1, e / r, n / c), i = Math.floor(o * r), a = Math.floor(o * c), {
                        top: Math.floor(.5 * (n - a)) + l[0],
                        left: Math.floor(.5 * (e - i)) + l[3],
                        width: i,
                        height: a
                    })
                },
                update: function() {
                    var n = this;
                    g.each(n.slides, function(t, e) {
                        n.updateSlide(e)
                    })
                },
                updateSlide: function(t, e) {
                    var n = this,
                        o = t && t.$content;
                    o && (t.width || t.height) && (n.isAnimating = !1, g.fancybox.stop(o), g.fancybox.setTranslate(o, n.getFitPos(t)), t.pos === n.currPos && n.updateCursor()), t.$slide.trigger("refresh"), n.trigger("onUpdate", t)
                },
                centerSlide: function(t, e) {
                    var n, o;
                    this.current && (n = Math.round(t.$slide.width()), o = t.pos - this.current.pos, g.fancybox.animate(t.$slide, {
                        top: 0,
                        left: o * n + o * t.opts.gutter,
                        opacity: 1
                    }, e === b ? 0 : e, null, !1))
                },
                updateCursor: function(t, e) {
                    var n = this,
                        o = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                    n.current && !n.isClosing && (n.isZoomable() ? (o.addClass("fancybox-is-zoomable"), (t !== b && e !== b ? t < n.current.width && e < n.current.height : n.isScaledDown()) ? o.addClass("fancybox-can-zoomIn") : n.current.opts.touch ? o.addClass("fancybox-can-drag") : o.addClass("fancybox-can-zoomOut")) : n.current.opts.touch && o.addClass("fancybox-can-drag"))
                },
                isZoomable: function() {
                    var t, e = this.current;
                    if (e && !this.isClosing) return !!("image" === e.type && e.isLoaded && !e.hasError && ("zoom" === e.opts.clickContent || g.isFunction(e.opts.clickContent) && "zoom" === e.opts.clickContent(e)) && (t = this.getFitPos(e), e.width > t.width || e.height > t.height))
                },
                isScaledDown: function() {
                    var t = this.current,
                        e = t.$content,
                        n = !1;
                    return e && (n = (n = g.fancybox.getTranslate(e)).width < t.width || n.height < t.height), n
                },
                canPan: function() {
                    var t = this.current,
                        e = t.$content,
                        n = !1;
                    return e && (n = this.getFitPos(t), n = 1 < Math.abs(e.width() - n.width) || 1 < Math.abs(e.height() - n.height)), n
                },
                loadSlide: function(n) {
                    var t, e, o, i = this;
                    if (!n.isLoading && !n.isLoaded) {
                        switch (n.isLoading = !0, i.trigger("beforeLoad", n), t = n.type, (e = n.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(n.opts.slideClass), t) {
                            case "image":
                                i.setImage(n);
                                break;
                            case "iframe":
                                i.setIframe(n);
                                break;
                            case "html":
                                i.setContent(n, n.src || n.content);
                                break;
                            case "inline":
                                g(n.src).length ? i.setContent(n, g(n.src)) : i.setError(n);
                                break;
                            case "ajax":
                                i.showLoading(n), o = g.ajax(g.extend({}, n.opts.ajax.settings, {
                                    url: n.src,
                                    success: function(t, e) {
                                        "success" === e && i.setContent(n, t)
                                    },
                                    error: function(t, e) {
                                        t && "abort" !== e && i.setError(n)
                                    }
                                })), e.one("onReset", function() {
                                    o.abort()
                                });
                                break;
                            case "video":
                                i.setContent(n, '<video controls><source src="' + n.src + '" type="' + n.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video>");
                                break;
                            default:
                                i.setError(n)
                        }
                        return !0
                    }
                },
                setImage: function(t) {
                    var e, n, o, i, a = this,
                        s = t.opts.srcset || t.opts.image.srcset;
                    if (s) {
                        o = l.devicePixelRatio || 1, i = l.innerWidth * o, (n = s.split(",").map(function(t) {
                            var o = {};
                            return t.trim().split(/\s+/).forEach(function(t, e) {
                                var n = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === e) return o.url = t;
                                n && (o.value = n, o.postfix = t[t.length - 1])
                            }), o
                        })).sort(function(t, e) {
                            return t.value - e.value
                        });
                        for (var r = 0; r < n.length; r++) {
                            var c = n[r];
                            if ("w" === c.postfix && c.value >= i || "x" === c.postfix && c.value >= o) {
                                e = c;
                                break
                            }
                        }!e && n.length && (e = n[n.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value))
                    }
                    t.$content = g('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = g("<img />").one("error", function() {
                        g(this).remove(), t.$ghost = null, a.setBigImage(t)
                    }).one("load", function() {
                        a.afterLoad(t), a.setBigImage(t)
                    }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : a.setBigImage(t)
                },
                setBigImage: function(t) {
                    var e = this,
                        n = g("<img />");
                    t.$image = n.one("error", function() {
                        e.setError(t)
                    }).one("load", function() {
                        clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = t.opts.width || this.naturalWidth, t.height = t.opts.height || this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                            t.timouts = null, t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (n[0].complete || "complete" == n[0].readyState) && n[0].naturalWidth && n[0].naturalHeight ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function() {
                        n[0].complete || t.hasError || e.showLoading(t)
                    }, 100)
                },
                setIframe: function(a) {
                    var s, e = this,
                        r = a.opts.iframe,
                        t = a.$slide;
                    a.$content = g('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(t), s = g(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(a.$content), r.preload ? (e.showLoading(a), s.on("load.fb error.fb", function(t) {
                        this.isReady = 1, a.$slide.trigger("refresh"), e.afterLoad(a)
                    }), t.on("refresh.fb", function() {
                        var t, e, n = a.$content,
                            o = r.css.width,
                            i = r.css.height;
                        if (1 === s[0].isReady) {
                            try {
                                e = s.contents().find("body")
                            } catch (t) {}
                            e && e.length && (o === b && (t = s[0].contentWindow.document.documentElement.scrollWidth, o = Math.ceil(e.outerWidth(!0) + (n.width() - t)), o += n.outerWidth() - n.innerWidth()), i === b && (i = Math.ceil(e.outerHeight(!0)), i += n.outerHeight() - n.innerHeight()), o && n.width(o), i && n.height(i)), n.removeClass("fancybox-is-hidden")
                        }
                    })) : this.afterLoad(a), s.attr("src", a.src), !0 === a.opts.smallBtn && a.$content.prepend(e.translate(a, a.opts.btnTpl.smallBtn)), t.one("onReset", function() {
                        try {
                            g(this).find("iframe").hide().attr("src", "//about:blank")
                        } catch (t) {}
                        g(this).empty(), a.isLoaded = !1
                    })
                },
                setContent: function(t, e) {
                    var n;
                    this.isClosing || (this.hideLoading(t), t.$slide.empty(), (n = e) && n.hasOwnProperty && n instanceof g && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = g("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === g.type(e) && 3 === (e = g("<div>").append(g.trim(e)).contents())[0].nodeType && (e = g("<div>").html(e)), t.opts.filter && (e = g("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                        g(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (g(this).empty(), t.isLoaded = !1)
                    }), t.$content = g(e).appendTo(t.$slide), this.afterLoad(t))
                },
                setError: function(t) {
                    t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
                },
                showLoading: function(t) {
                    (t = t || this.current) && !t.$spinner && (t.$spinner = g(this.opts.spinnerTpl).appendTo(t.$slide))
                },
                hideLoading: function(t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = g(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
                },
                revealContent: function(e) {
                    var t, n, o, i, a, s = this,
                        r = e.$slide,
                        c = !1;
                    return t = e.opts[s.firstRun ? "animationEffect" : "transitionEffect"], o = e.opts[s.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(e.forcedDuration === b ? o : e.forcedDuration, 10), !e.isMoved && e.pos === s.currPos && o || (t = !1), "zoom" !== t || e.pos === s.currPos && o && "image" === e.type && !e.hasError && (c = s.getThumbPos(e)) || (t = "fade"), "zoom" === t ? ((a = s.getFitPos(e)).scaleX = a.width / c.width, a.scaleY = a.height / c.height, delete a.width, delete a.height, "auto" == (i = e.opts.zoomOpacity) && (i = .1 < Math.abs(e.width / e.height - c.width / c.height)), i && (c.opacity = .1, a.opacity = 1), g.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), c), p(e.$content), void g.fancybox.animate(e.$content, a, o, function() {
                        s.complete()
                    })) : (s.updateSlide(e), t ? (g.fancybox.stop(r), n = "fancybox-animated fancybox-slide--" + (e.pos >= s.prevPos ? "next" : "previous") + " fancybox-fx-" + t, r.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), e.$content.removeClass("fancybox-is-hidden"), p(r), void g.fancybox.animate(r, "fancybox-slide--current", o, function(t) {
                        r.removeClass(n).removeAttr("style"), e.pos === s.currPos && s.complete()
                    }, !0)) : (p(r), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === s.currPos && s.complete())))
                },
                getThumbPos: function(t) {
                    var e, n = !1,
                        o = t.opts.$thumb,
                        i = o ? o.offset() : 0;
                    return i && o[0].ownerDocument === r && function(t) {
                        for (var e = t[0], o = e.getBoundingClientRect(), n = []; null !== e.parentElement;) "hidden" !== g(e.parentElement).css("overflow") && "auto" !== g(e.parentElement).css("overflow") || n.push(e.parentElement.getBoundingClientRect()), e = e.parentElement;
                        return n.every(function(t) {
                            var e = Math.min(o.right, t.right) - Math.max(o.left, t.left),
                                n = Math.min(o.bottom, t.bottom) - Math.max(o.top, t.top);
                            return 0 < e && 0 < n
                        }) && 0 < o.bottom && 0 < o.right && o.left < g(l).width() && o.top < g(l).height()
                    }(o) && (e = this.$refs.stage.offset(), n = {
                        top: i.top - e.top + parseFloat(o.css("border-top-width") || 0),
                        left: i.left - e.left + parseFloat(o.css("border-left-width") || 0),
                        width: o.width(),
                        height: o.height(),
                        scaleX: 1,
                        scaleY: 1
                    }), n
                },
                complete: function() {
                    var n = this,
                        t = n.current,
                        o = {};
                    t.isMoved || !t.isLoaded || t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), p(t.$slide), t.$slide.addClass("fancybox-slide--complete"), g.each(n.slides, function(t, e) {
                        e.pos >= n.currPos - 1 && e.pos <= n.currPos + 1 ? o[e.pos] = e : e && (g.fancybox.stop(e.$slide), e.$slide.off().remove())
                    }), n.slides = o, n.updateCursor(), n.trigger("afterShow"), t.$slide.find("video,audio").first().trigger("play"), (g(r.activeElement).is("[disabled]") || t.opts.autoFocus && "image" != t.type && "iframe" !== t.type) && n.focus())
                },
                preload: function(t) {
                    var e = this,
                        n = e.slides[e.currPos + 1],
                        o = e.slides[e.currPos - 1];
                    n && n.type === t && e.loadSlide(n), o && o.type === t && e.loadSlide(o)
                },
                focus: function() {
                    var t, e = this.current;
                    this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (t = t && t.length ? t : this.$refs.container).focus())
                },
                activate: function() {
                    var e = this;
                    g(".fancybox-container").each(function() {
                        var t = g(this).data("FancyBox");
                        t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                    }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                },
                close: function(t, e) {
                    function n() {
                        l.cleanUp(t)
                    }
                    var o, i, a, s, r, c, l = this,
                        u = l.current;
                    return !l.isClosing && (!(l.isClosing = !0) === l.trigger("beforeClose", t) ? (l.isClosing = !1, d(function() {
                        l.update()
                    }), !1) : (l.removeEvents(), u.timouts && clearTimeout(u.timouts), a = u.$content, o = u.opts.animationEffect, i = g.isNumeric(e) ? e : o ? u.opts.animationDuration : 0, u.$slide.off(f).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), u.$slide.siblings().trigger("onReset").remove(), i && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), l.hideLoading(u), l.hideControls(), l.updateCursor(), "zoom" !== o || !0 !== t && a && i && "image" === u.type && !u.hasError && (c = l.getThumbPos(u)) || (o = "fade"), "zoom" === o ? (g.fancybox.stop(a), (r = g.fancybox.getTranslate(a)).width = r.width * r.scaleX, r.height = r.height * r.scaleY, "auto" == (s = u.opts.zoomOpacity) && (s = .1 < Math.abs(u.width / u.height - c.width / c.height)), s && (c.opacity = 0), r.scaleX = r.width / c.width, r.scaleY = r.height / c.height, r.width = c.width, r.height = c.height, g.fancybox.setTranslate(u.$content, r), p(u.$content), g.fancybox.animate(u.$content, c, i, n)) : o && i ? !0 === t ? setTimeout(n, i) : g.fancybox.animate(u.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, n) : n(), !0))
                },
                cleanUp: function(t) {
                    var e, n, o = this,
                        i = g("body");
                    o.current.$slide.trigger("onReset"), o.$refs.container.empty().remove(), o.trigger("afterClose", t), o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.focus(), o.current = null, (e = g.fancybox.getInstance()) ? e.activate() : (a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft), i.removeClass("fancybox-active compensate-for-scrollbar"), i.hasClass("fancybox-iosfix") && (n = parseInt(r.body.style.top, 10), i.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * n)), g("#fancybox-style-noscroll").remove())
                },
                trigger: function(t, e) {
                    var n, o = Array.prototype.slice.call(arguments, 1),
                        i = this,
                        a = e && e.opts ? e : i.current;
                    if (a ? o.unshift(a) : a = i, o.unshift(i), g.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, o)), !1 === n) return n;
                    "afterClose" !== t && i.$refs ? i.$refs.container.trigger(t + ".fb", o) : c.trigger(t + ".fb", o)
                },
                updateControls: function(t) {
                    var e = this,
                        n = e.current,
                        o = n.index,
                        i = n.opts.caption,
                        a = e.$refs.container,
                        s = e.$refs.caption;
                    n.$slide.trigger("refresh"), e.$caption = i && i.length ? s.html(i) : null, e.isHiddenControls || e.isIdle || e.showControls(), a.find("[data-fancybox-count]").html(e.group.length), a.find("[data-fancybox-index]").html(o + 1), a.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && o <= 0), a.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && o >= e.group.length - 1), "image" === n.type ? a.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
                },
                hideControls: function() {
                    this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
                },
                showControls: function() {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        n = t.$refs.container;
                    t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length)).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
                },
                toggleControls: function() {
                    this.isHiddenControls ? this.showControls() : this.hideControls()
                }
            }), g.fancybox = {
                version: "3.2.10",
                defaults: e,
                getInstance: function(t) {
                    var e = g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return e instanceof o && ("string" === g.type(t) ? e[t].apply(e, n) : "function" === g.type(t) && t.apply(e, n), e)
                },
                open: function(t, e, n) {
                    return new o(t, e, n)
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close())
                },
                destroy: function() {
                    this.close(!0), c.off("click.fb-start")
                },
                isMobile: r.createTouch !== b && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: (t = r.createElement("div"), l.getComputedStyle && l.getComputedStyle(t).getPropertyValue("transform") && !(r.documentMode && r.documentMode < 11)),
                getTranslate: function(t) {
                    var e;
                    if (!t || !t.length) return !1;
                    if ((e = (e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? (e = (e = e.split("(")[1]).split(")")[0]).split(",") : []).length) e = (e = 10 < e.length ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat);
                    else {
                        e = [0, 0, 1, 1];
                        var n = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                        n && (e[0] = parseFloat(n[2]), e[1] = parseFloat(n[1]))
                    }
                    return {
                        top: e[0],
                        left: e[1],
                        scaleX: e[2],
                        scaleY: e[3],
                        opacity: parseFloat(t.css("opacity")),
                        width: t.width(),
                        height: t.height()
                    }
                },
                setTranslate: function(t, e) {
                    var n = "",
                        o = {};
                    if (t && e) return e.left === b && e.top === b || (n = (e.left === b ? t.position().left : e.left) + "px, " + (e.top === b ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== b && e.scaleY !== b && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (o.transform = n), e.opacity !== b && (o.opacity = e.opacity), e.width !== b && (o.width = e.width), e.height !== b && (o.height = e.height), t.css(o)
                },
                animate: function(e, n, t, o, i) {
                    g.isFunction(t) && (o = t, t = null), g.isPlainObject(n) || e.removeAttr("style"), e.on(f, function(t) {
                        t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName) || (g.fancybox.stop(e), g.isPlainObject(n) ? (n.scaleX !== b && n.scaleY !== b && (e.css("transition-duration", ""), n.width = Math.round(e.width() * n.scaleX), n.height = Math.round(e.height() * n.scaleY), n.scaleX = 1, n.scaleY = 1, g.fancybox.setTranslate(e, n)), !1 === i && e.removeAttr("style")) : !0 !== i && e.removeClass(n), g.isFunction(o) && o(t))
                    }), g.isNumeric(t) && e.css("transition-duration", t + "ms"), g.isPlainObject(n) ? g.fancybox.setTranslate(e, n) : e.addClass(n), n.scaleX && e.hasClass("fancybox-image-wrap") && e.parent().addClass("fancybox-is-scaling"), e.data("timer", setTimeout(function() {
                        e.trigger("transitionend")
                    }, t + 16))
                },
                stop: function(t) {
                    clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling")
                }
            }, g.fn.fancybox = function(t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? g("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, n) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, n), this
            }, c.on("click.fb-start", "[data-fancybox]", n)
        }
    function n(t) {
        var e = g(t.currentTarget),
            n = t.data ? t.data.options : {},
            o = e.attr("data-fancybox") || "",
            i = 0,
            a = [];
        t.isDefaultPrevented() || (t.preventDefault(), o ? (i = (a = (a = n.selector ? g(n.selector) : t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + o + '"]') : g('[data-fancybox="' + o + '"]')).index(e)) < 0 && (i = 0) : a = [e], g.fancybox.open(a, n, i))
    }
}(window, document, window.jQuery || jQuery),
function(f) {
    "use strict";

    function p(n, t, e) {
        if (n) return e = e || "", "object" === f.type(e) && (e = f.param(e, !0)), f.each(t, function(t, e) {
            n = n.replace("$" + t, e || "")
        }), e.length && (n += (0 < n.indexOf("?") ? "&" : "?") + e), n
    }
    var h = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type: "iframe",
            url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    f(document).on("objectNeedsType.fb", function(t, e, i) {
        var n, a, s, r, c, l, o, u = i.src || "",
            d = !1;
        n = f.extend(!0, {}, h, i.opts.media), f.each(n, function(t, e) {
            if (s = u.match(e.matcher)) {
                if (d = e.type, l = {}, e.paramPlace && s[e.paramPlace]) {
                    "?" == (c = s[e.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                    for (var n = 0; n < c.length; ++n) {
                        var o = c[n].split("=", 2);
                        2 == o.length && (l[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
                    }
                }
                return r = f.extend(!0, {}, e.params, i.opts[t], l), u = "function" === f.type(e.url) ? e.url.call(this, s, r, i) : p(e.url, s, r), a = "function" === f.type(e.thumb) ? e.thumb.call(this, s, r, i) : p(e.thumb, s), "vimeo" === t && (u = u.replace("&%23", "#")), !1
            }
        }), d ? (i.src = u, i.type = d, i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = a), "iframe" === d && (f.extend(!0, i.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        }), i.contentProvider = o, i.opts.slideClass += " fancybox-slide--video")) : u && (i.type = i.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(h, r, g) {
    "use strict";

    function u(t) {
        var e = [];
        for (var n in t = (t = t.originalEvent || t || h.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[n].pageX ? e.push({
            x: t[n].pageX,
            y: t[n].pageY
        }) : t[n].clientX && e.push({
            x: t[n].clientX,
            y: t[n].clientY
        });
        return e
    }

    function b(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }

    function c(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || g.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
        for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++)
            if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
        return !1
    }

    function l(t) {
        for (var e, n, o, i, a, s = !1; e = t.get(0), void 0, n = h.getComputedStyle(e)["overflow-y"], o = h.getComputedStyle(e)["overflow-x"], i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight, a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth, !(s = i || a) && (t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body"););
        return s
    }

    function n(t) {
        var e = this;
        e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", g.proxy(e, "ontouchstart"))
    }
    var m = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || function(t) {
            return h.setTimeout(t, 1e3 / 60)
        },
        y = h.cancelAnimationFrame || h.webkitCancelAnimationFrame || h.mozCancelAnimationFrame || h.oCancelAnimationFrame || function(t) {
            h.clearTimeout(t)
        };
    n.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }, n.prototype.ontouchstart = function(t) {
        var e = this,
            n = g(t.target),
            o = e.instance,
            i = o.current,
            a = i.$content,
            s = "touchstart" == t.type;
        if (s && e.$container.off("mousedown.fb.touch"), (!t.originalEvent || 2 != t.originalEvent.button) && n.length && !c(n) && !c(n.parent()) && (n.is("img") || !(t.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
            if (!i || e.instance.isAnimating || e.instance.isClosing) return t.stopPropagation(), void t.preventDefault();
            e.realPoints = e.startPoints = u(t), e.startPoints && (t.stopPropagation(), e.startEvent = t, e.canTap = !0, e.$target = n, e.$content = a, e.opts = i.opts.touch, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.isScrolling = !1, e.sliderStartPos = e.sliderLastPos || {
                top: 0,
                left: 0
            }, e.contentStartPos = g.fancybox.getTranslate(e.$content), e.contentLastPos = null, e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.canvasWidth = Math.round(i.$slide[0].clientWidth), e.canvasHeight = Math.round(i.$slide[0].clientHeight), g(r).off(".fb.touch").on(s ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", g.proxy(e, "ontouchend")).on(s ? "touchmove.fb.touch" : "mousemove.fb.touch", g.proxy(e, "ontouchmove")), g.fancybox.isMobile && r.addEventListener("scroll", e.onscroll, !0), (e.opts || o.canPan()) && (n.is(e.$stage) || e.$stage.find(n).length) ? (g.fancybox.isMobile && (l(n) || l(n.parent())) || t.preventDefault(), 1 === e.startPoints.length && ("image" === i.type && (e.contentStartPos.width > e.canvasWidth + 1 || e.contentStartPos.height > e.canvasHeight + 1) ? (g.fancybox.stop(e.$content), e.$content.css("transition-duration", ""), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-controls--isGrabbing")), 2 !== e.startPoints.length || o.isAnimating || i.hasError || "image" !== i.type || !i.isLoaded && !i.$ghost || (e.canTap = !1, e.isSwiping = !1, e.isPanning = !1, e.isZooming = !0, g.fancybox.stop(e.$content), e.$content.css("transition-duration", ""), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - g(h).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - g(h).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = b(e.startPoints[0], e.startPoints[1]))) : n.is("img") && t.preventDefault())
        }
    }, n.prototype.onscroll = function(t) {
        self.isScrolling = !0
    }, n.prototype.ontouchmove = function(t) {
        var e = this,
            n = g(t.target);
        e.isScrolling || !n.is(e.$stage) && !e.$stage.find(n).length ? e.canTap = !1 : (e.newPoints = u(t), (e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = b(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = b(e.newPoints[0], e.startPoints[0], "y"), e.distance = b(e.newPoints[0], e.startPoints[0]), 0 < e.distance && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom())))
    }, n.prototype.onSwipe = function(t) {
        var e, o = this,
            n = o.isSwiping,
            i = o.sliderStartPos.left || 0;
        if (!0 !== n) "x" == n && (0 < o.distanceX && (o.instance.group.length < 2 || 0 === o.instance.current.index && !o.instance.current.opts.loop) ? i += Math.pow(o.distanceX, .8) : o.distanceX < 0 && (o.instance.group.length < 2 || o.instance.current.index === o.instance.group.length - 1 && !o.instance.current.opts.loop) ? i -= Math.pow(-o.distanceX, .8) : i += o.distanceX), o.sliderLastPos = {
            top: "x" == n ? 0 : o.sliderStartPos.top + o.distanceY,
            left: i
        }, o.requestId && (y(o.requestId), o.requestId = null), o.requestId = m(function() {
            o.sliderLastPos && (g.each(o.instance.slides, function(t, e) {
                var n = e.pos - o.instance.currPos;
                g.fancybox.setTranslate(e.$slide, {
                    top: o.sliderLastPos.top,
                    left: o.sliderLastPos.left + n * o.canvasWidth + n * e.opts.gutter
                })
            }), o.$container.addClass("fancybox-is-sliding"))
        });
        else if (10 < Math.abs(o.distance)) {
            if (o.canTap = !1, o.instance.group.length < 2 && o.opts.vertical ? o.isSwiping = "y" : o.instance.isDragging || !1 === o.opts.vertical || "auto" === o.opts.vertical && 800 < g(h).width() ? o.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), o.isSwiping = 45 < e && e < 135 ? "y" : "x"), o.canTap = !1, "y" === o.isSwiping && g.fancybox.isMobile && (l(o.$target) || l(o.$target.parent()))) return void(o.isScrolling = !0);
            o.instance.isDragging = o.isSwiping, o.startPoints = o.newPoints, g.each(o.instance.slides, function(t, e) {
                g.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === o.instance.current.pos && (o.sliderStartPos.left = g.fancybox.getTranslate(e.$slide).left)
            }), o.instance.SlideShow && o.instance.SlideShow.isActive && o.instance.SlideShow.stop()
        }
    }, n.prototype.onPan = function() {
        var t = this;
        b(t.newPoints[0], t.realPoints[0]) < (g.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (y(t.requestId), t.requestId = null), t.requestId = m(function() {
            g.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, n.prototype.limitMovement = function() {
        var t, e, n, o, i, a, s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            u = s.distanceY,
            d = s.contentStartPos,
            f = d.left,
            p = d.top,
            h = d.width,
            g = d.height;
        return i = r < h ? f + l : f, a = p + u, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), r < h && (0 < l && t < i && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0)), c < g && (0 < u && e < a && (a = e - 1 + Math.pow(-e + p + u, .8) || 0), u < 0 && a < o && (a = o + 1 - Math.pow(o - p - u, .8) || 0)), {
            top: a,
            left: i,
            scaleX: d.scaleX,
            scaleY: d.scaleY
        }
    }, n.prototype.limitPosition = function(t, e, n, o) {
        var i = this.canvasWidth,
            a = this.canvasHeight;
        return t = i < n ? (t = 0 < t ? 0 : t) < i - n ? i - n : t : Math.max(0, i / 2 - n / 2), {
            top: e = a < o ? (e = 0 < e ? 0 : e) < a - o ? a - o : e : Math.max(0, a / 2 - o / 2),
            left: t
        }
    }, n.prototype.onZoom = function() {
        var t = this,
            e = t.contentStartPos.width,
            n = t.contentStartPos.height,
            o = t.contentStartPos.left,
            i = t.contentStartPos.top,
            a = b(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            s = Math.floor(e * a),
            r = Math.floor(n * a),
            c = (e - s) * t.percentageOfImageAtPinchPointX,
            l = (n - r) * t.percentageOfImageAtPinchPointY,
            u = (t.newPoints[0].x + t.newPoints[1].x) / 2 - g(h).scrollLeft(),
            d = (t.newPoints[0].y + t.newPoints[1].y) / 2 - g(h).scrollTop(),
            f = u - t.centerPointStartX,
            p = {
                top: i + (l + (d - t.centerPointStartY)),
                left: o + (c + f),
                scaleX: t.contentStartPos.scaleX * a,
                scaleY: t.contentStartPos.scaleY * a
            };
        t.canTap = !1, t.newWidth = s, t.newHeight = r, t.contentLastPos = p, t.requestId && (y(t.requestId), t.requestId = null), t.requestId = m(function() {
            g.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, n.prototype.ontouchend = function(t) {
        var e = this,
            n = Math.max((new Date).getTime() - e.startTime, 1),
            o = e.isSwiping,
            i = e.isPanning,
            a = e.isZooming,
            s = e.isScrolling;
        if (e.endPoints = u(t), e.$container.removeClass("fancybox-controls--isGrabbing"), g(r).off(".fb.touch"), r.removeEventListener("scroll", e.onscroll, !0), e.requestId && (y(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.isScrolling = !1, e.instance.isDragging = !1, e.canTap) return e.onTap(t);
        e.speed = 366, e.velocityX = e.distanceX / n * .5, e.velocityY = e.distanceY / n * .5, e.speedX = Math.max(.5 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), i ? e.endPanning() : a ? e.endZooming() : e.endSwiping(o, s)
    }, n.prototype.endSwiping = function(t, e) {
        var n = this,
            o = !1,
            i = n.instance.group.length;
        n.sliderLastPos = null, "y" == t && !e && 50 < Math.abs(n.distanceY) ? (g.fancybox.animate(n.instance.current.$slide, {
            top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
            opacity: 0
        }, 150), o = n.instance.close(!0, 300)) : "x" == t && 50 < n.distanceX && 1 < i ? o = n.instance.previous(n.speedX) : "x" == t && n.distanceX < -50 && 1 < i && (o = n.instance.next(n.speedX)), !1 !== o || "x" != t && "y" != t || (e || i < 2 ? n.instance.centerSlide(n.instance.current, 150) : n.instance.jumpTo(n.instance.current.index)), n.$container.removeClass("fancybox-is-sliding")
    }, n.prototype.endPanning = function() {
        var t, e, n, o = this;
        o.contentLastPos && (e = !1 === o.opts.momentum ? (t = o.contentLastPos.left, o.contentLastPos.top) : (t = o.contentLastPos.left + o.velocityX * o.speed, o.contentLastPos.top + o.velocityY * o.speed), (n = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, n.height = o.contentStartPos.height, g.fancybox.animate(o.$content, n, 330))
    }, n.prototype.endZooming = function() {
        var t, e, n, o, i = this,
            a = i.instance.current,
            s = i.newWidth,
            r = i.newHeight;
        i.contentLastPos && (t = i.contentLastPos.left, o = {
            top: e = i.contentLastPos.top,
            left: t,
            width: s,
            height: r,
            scaleX: 1,
            scaleY: 1
        }, g.fancybox.setTranslate(i.$content, o), s < i.canvasWidth && r < i.canvasHeight ? i.instance.scaleToFit(150) : s > a.width || r > a.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (n = i.limitPosition(t, e, s, r), g.fancybox.setTranslate(i.content, g.fancybox.getTranslate(i.$content)), g.fancybox.animate(i.$content, n, 150)))
    }, n.prototype.onTap = function(n) {
        function t(t) {
            var e = s.opts[t];
            if (g.isFunction(e) && (e = e.apply(a, [s, n])), e) switch (e) {
                case "close":
                    a.close(o.startEvent);
                    break;
                case "toggleControls":
                    a.toggleControls(!0);
                    break;
                case "next":
                    a.next();
                    break;
                case "nextOrClose":
                    1 < a.group.length ? a.next() : a.close(o.startEvent);
                    break;
                case "zoom":
                    "image" == s.type && (s.isLoaded || s.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(c, l) : a.group.length < 2 && a.close(o.startEvent))
            }
        }
        var e, o = this,
            i = g(n.target),
            a = o.instance,
            s = a.current,
            r = n && u(n) || o.startPoints,
            c = r[0] ? r[0].x - o.$stage.offset().left : 0,
            l = r[0] ? r[0].y - o.$stage.offset().top : 0;
        if ((!n.originalEvent || 2 != n.originalEvent.button) && (i.is("img") || !(c > i[0].clientWidth + i.offset().left))) {
            if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
            else if (i.is(".fancybox-slide")) e = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(i).addBack().filter(i).length) return;
                e = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, 50 < Math.abs(c - o.tapX) || 50 < Math.abs(l - o.tapY)) return this;
                t("dblclick" + e)
            } else o.tapX = c, o.tapY = l, s.opts["dblclick" + e] && s.opts["dblclick" + e] !== s.opts["click" + e] ? o.tapped = setTimeout(function() {
                o.tapped = null, t("click" + e)
            }, 500) : t("click" + e);
            return this
        }
    }, g(r).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new n(e))
    })
}(window, document, window.jQuery || jQuery),
function(s, r) {
    "use strict";
    r.extend(!0, r.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });

    function n(t) {
        this.instance = t, this.init()
    }
    r.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function(t) {
            var e = this;
            e.instance && e.instance.current && (!0 === t || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        },
        clear: function() {
            clearTimeout(this.timer), this.timer = null
        },
        start: function() {
            var t = this.instance.current;
            t && (this.isActive = !0, this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.set(!0))
        },
        stop: function() {
            var t = this.instance.current;
            this.clear(), this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start()
        }
    }), r(s).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var a = e && e.SlideShow;
            !a || !n.opts.slideShow || 80 !== i && 32 !== i || r(s.activeElement).is("button,a,input") || (o.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), r(s).on("visibilitychange", function() {
        var t = r.fancybox.getInstance(),
            e = t && t.SlideShow;
        e && e.isActive && (s.hidden ? e.clear() : e.set())
    })
}(document, window.jQuery || jQuery),
function(a, n) {
    "use strict";
    var e = function() {
        var t, e, n, o = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            i = {};
        for (e = 0; e < o.length; e++)
            if ((t = o[e]) && t[1] in a) {
                for (n = 0; n < t.length; n++) i[o[0][n]] = t[n];
                return i
            }
        return !1
    }();
    if (e) {
        var o = {
            request: function(t) {
                (t = t || a.documentElement)[e.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[e.exitFullscreen]()
            },
            toggle: function(t) {
                t = t || a.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(a[e.fullscreenElement])
            },
            enabled: function() {
                return Boolean(a[e.fullscreenEnabled])
            }
        };
        n.extend(!0, n.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), n(a).on({
            "onInit.fb": function(t, e) {
                var n;
                e && e.group[e.currIndex].opts.fullScreen ? ((n = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                    t.stopPropagation(), t.preventDefault(), o.toggle(n[0])
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(n[0]), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function(t, e, n, o, i) {
                e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
            },
            "beforeClose.fb": function(t) {
                t && t.FullScreen && o.exit()
            }
        }), n(a).on(e.fullscreenchange, function() {
            var t = o.isFullscreen(),
                e = n.fancybox.getInstance();
            e && (e.current && "image" === e.current.type && e.isAnimating && (e.current.$content.css("transition", "none"), e.isAnimating = !1, e.update(!0, !0, 0)), e.trigger("onFullscreenChange", t), e.$refs.container.toggleClass("fancybox-is-fullscreen", t))
        })
    } else n && n.fancybox && (n.fancybox.defaults.btnTpl.fullScreen = !1)
}(document, window.jQuery || jQuery),
function(t, r) {
    "use strict";
    r.fancybox.defaults = r.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, r.fancybox.defaults);

    function o(t) {
        this.init(t)
    }
    r.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this;
            (e.instance = t).Thumbs = e;
            var n = t.group[0],
                o = t.group[1];
            e.opts = t.group[t.currIndex].opts.thumbs, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), e.opts && n && o && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == o.type || o.opts.thumb || o.opts.$thumb) ? (e.$button.show().on("click", function() {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var n, o, t = this,
                e = t.instance,
                i = t.opts.parentEl;
            t.$grid = r('<div class="fancybox-thumbs fancybox-thumbs-' + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(i).addBack().filter(i)), n = "<ul>", r.each(e.group, function(t, e) {
                (o = e.opts.thumb || (e.opts.$thumb ? e.opts.$thumb.attr("src") : null)) || "image" !== e.type || (o = e.src), o && o.length && (n += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + o + '" /></li>')
            }), n += "</ul>", t.$list = r(n).appendTo(t.$grid).on("click", "li", function() {
                e.jumpTo(r(this).data("index"))
            }), t.$list.find("img").hide().one("load", function() {
                var t, e, n, o, i = r(this).parent().removeClass("fancybox-thumbs-loading"),
                    a = i.outerWidth(),
                    s = i.outerHeight();
                t = this.naturalWidth || this.width, o = (e = this.naturalHeight || this.height) / s, 1 <= (n = t / a) && 1 <= o && (o < n ? (t /= o, e = s) : (t = a, e /= n)), r(this).css({
                    width: Math.floor(t),
                    height: Math.floor(e),
                    "margin-top": s < e ? Math.floor(.3 * s - .3 * e) : Math.floor(.5 * s - .5 * e),
                    "margin-left": Math.floor(.5 * a - .5 * t)
                }).show()
            }).each(function() {
                this.src = r(this).data("src")
            }), "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right")) + e.group.length * t.$list.children().eq(0).outerWidth(!0) + "px")
        },
        focus: function(t) {
            var e, n, o = this,
                i = o.$list;
            o.instance.current && (n = (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === o.opts.axis && (n.left < i.parent().scrollLeft() || n.left > i.parent().scrollLeft() + (i.parent().width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), r(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && (n = new o(e)).isActive && !0 === n.opts.autoStart && n.show()
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, window.jQuery),
function(t, i) {
    "use strict";
    i.extend(!0, i.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
        }
    }), i(t).on("click", "[data-fancybox-share]", function() {
        var t, e, n, o = i.fancybox.getInstance();
        o && (t = !1 === o.current.opts.hash ? o.current.src : window.location, e = o.current.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.current.type ? encodeURIComponent(o.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, String(t).replace(/[&<>"'`=\/]/g, function(t) {
            return n[t]
        }))).replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : ""), i.fancybox.open({
            src: o.translate(o, e),
            type: "html",
            opts: {
                animationEffect: "fade",
                animationDuration: 250,
                afterLoad: function(t, e) {
                    e.$content.find(".fancybox-share__links a").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }
            }
        }))
    })
}(document, window.jQuery || jQuery),
function(a, s, r) {
    "use strict";
    r.escapeSelector || (r.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    });
    var i = !0,
        c = null,
        l = null;

    function u() {
        var t = s.location.hash.substr(1),
            e = t.split("-"),
            n = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
        return n < 1 && (n = 1), {
            hash: t,
            index: n,
            gallery: e.join("-")
        }
    }

    function e(t) {
        var e;
        "" !== t.gallery && ((e = r("[data-fancybox='" + r.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = r("#" + r.escapeSelector(t.gallery))), e.length && (i = !1, e.trigger("click")))
    }

    function d(t) {
        var e;
        return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : ""))
    }
    r(function() {
        !1 !== r.fancybox.defaults.hash && (r(a).on({
            "onInit.fb": function(t, e) {
                var n, o;
                !1 !== e.group[e.currIndex].opts.hash && (n = u(), (o = d(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(t, e, n) {
                var o;
                n && !1 !== n.opts.hash && (o = d(e)) && "" !== o && (s.location.hash.indexOf(o) < 0 && (e.opts.origHash = s.location.hash), c = o + (1 < e.group.length ? "-" + (n.index + 1) : ""), "replaceState" in s.history ? (l && clearTimeout(l), l = setTimeout(function() {
                    s.history[i ? "pushState" : "replaceState"]({}, a.title, s.location.pathname + s.location.search + "#" + c), l = null, i = !1
                }, 300)) : s.location.hash = c)
            },
            "beforeClose.fb": function(t, e, n) {
                var o, i;
                l && clearTimeout(l), !1 !== n.opts.hash && (o = d(e), i = e && e.opts.origHash ? e.opts.origHash : "", o && "" !== o && ("replaceState" in history ? s.history.replaceState({}, a.title, s.location.pathname + s.location.search + i) : (s.location.hash = i, r(s).scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))), c = null)
            }
        }), r(s).on("hashchange.fb", function() {
            var t = u();
            r.fancybox.getInstance() ? !c || c === t.gallery + "-" + t.index || 1 === t.index && c == t.gallery || (c = null, r.fancybox.close()) : "" !== t.gallery && e(t)
        }), setTimeout(function() {
            e(u())
        }, 50))
    })
}(document, window, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var i = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, o, e) {
            o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var e = o.current,
                    n = (new Date).getTime();
                o.group.length < 1 || !1 === e.opts.wheel || "auto" === e.opts.wheel && "image" !== e.type || (t.preventDefault(), t.stopPropagation(), e.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, n - i < 250 || (i = n, o[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, window.jQuery || jQuery);