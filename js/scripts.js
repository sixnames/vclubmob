$(function(){function e(e){e.stopPropagation(),e.preventDefault()}function i(i){function s(){u.empty().removeClass("active"),c.removeClass("modal-open").removeAttr("style")}$("#ui-icons").load("images/ui/ui-icons.html"),$(".hide").each(function(){$(this).delay(100).hide(),$(this).delay(200).addClass("visible")});var a=$("input:checkbox"),t=$("input.radio-btn");i.find(a).each(function(){$(this).wrap("<span class='checkbox'></span>"),$(this).change(function(){$(this).is(":checked")?($(this).parent().addClass("checked"),$(this).parent().parent().addClass("checked"),$(this).is(".card-check")&&$(".card-line").slideDown("fast")):($(this).parent().removeClass("checked"),$(this).parent().parent().removeClass("checked"),$(this).is(".card-check")&&$(".card-line").slideUp("fast"))}),$(this).is(":checked")?($(this).parent().addClass("checked"),$(this).parent().parent().addClass("checked"),$(this).is(".card-check")&&$(".card-line").slideDown("fast")):($(this).parent().removeClass("checked"),$(this).parent().parent().removeClass("checked"),$(this).is(".card-check")&&$(".card-line").slideUp("fast"))}),i.find(t).each(function(){var e=$(this).attr("name")+"-radio";$(this).wrap("<span class='radio "+e+"'></span>"),$(this).change(function(){$(this).is(":checked")?($("."+e).removeClass("checked"),$(this).parent().addClass("checked")):$(this).parent().removeClass("checked")}),$(this).is(":checked")?($(this).parent().addClass("checked"),$(this).parent().parent().addClass("checked")):($(this).parent().removeClass("checked"),$(this).parent().parent().removeClass("checked"))}),$(".filter-section .section-list > label.radio-label").click(function(){$(this).addClass("checked").siblings().removeClass("checked")}),$(".filter-section .section-list > label.check-label").click(function(){$(this).is(".active")?$(this).removeClass("active"):$(this).addClass("active")}),$("#login-form").validate({ignore:"",rules:{email:{required:!0,email:!0},password:{required:!0}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){},invalidHandler:function(){},errorElement:"span"}),$("#video-form").validate({ignore:"",rules:{phone:{required:!0}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){$(".video-form").slideUp("fast"),$(".video-confirm").slideDown("fast")},invalidHandler:function(){},errorElement:"span"}),$("#user-form").validate({ignore:"",rules:{email:{required:!0,email:!0},password:{required:!0},phone:{required:!0}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){},invalidHandler:function(){},errorElement:"span"}),$("#registration-form").validate({ignore:"",rules:{email:{required:!0,email:!0},password:{required:!0},passwordB:{required:!0,equalTo:"#password"}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){},invalidHandler:function(){},errorElement:"span"}),$("#recovery-form").validate({ignore:"",rules:{email:{required:!0,email:!0},password:{required:!0},passwordB:{required:!0},passwordC:{required:!0,equalTo:"#passwordB"}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){},invalidHandler:function(){},errorElement:"span"}),$("#question-form").validate({ignore:"",rules:{email:{required:!0,email:!0},name:{required:!0},message:{required:!0}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){},invalidHandler:function(){},errorElement:"span"});var o=$("#range");o.slider({range:!0,min:1e3,max:1e4,values:[1250,7e3],slide:function(e,i){$(".from-input").val(i.values[0]+" р."),$(".to-input").val(i.values[1]+" р.")}}),$(".from-input").val(o.slider("values",0)+" р."),$(".to-input").val(o.slider("values",0)+" р."),$("input[name=phone]").mask("+7 (999) 999-99-99"),$("#cart-form").validate({ignore:"",focusInvalid:!1,onfocusout:function(e){if(this.element(e),!this.checkable(e)&&(e.name in this.submitted||!this.optional(e))){var i=this,s=e;setTimeout(function(){i.element(s)},0)}},rules:{email:{required:!0,email:!0},name:{required:!0},phone:{required:!0}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){},invalidHandler:function(){},errorElement:"span"}),$("[class*='modal-close']").click(function(i){s(),e(i)}),function(e,i){e.click(function(){$(this).is(".active")?($(this).removeClass("active"),$(this).parent().find(i).slideUp("fast"),$(this).find("span.button-text").toggleClass("hidden")):($(this).addClass("active"),$(this).parent().find(i).slideDown("fast"),$(this).find("span.button-text").toggleClass("hidden"))})}($(".section-trigger"),$(".section-list"))}function s(){u.empty().removeClass("active"),c.removeClass("modal-open").removeAttr("style")}function a(e,i){$(e).click(function(){function e(e){e.each(function(){$(this)&&$(this).get(0).slick.setPosition()})}$(this).addClass("current").siblings().removeClass("current").parents().find(i).eq($(this).index()).fadeIn(500).siblings(i).hide(),e($(".magazine-slider-1")),e($(".magazine-slider-2")),e($(".magazine-slider-3")),e($(".description-slider-1")),e($(".description-slider-2"))})}function t(e,i){e.click(function(){$(this).is(".active")?($(this).removeClass("active"),$(this).parent().find(i).slideUp("fast"),$(this).find("span.button-text").toggleClass("hidden")):(e.removeClass("active"),i.slideUp("fast"),$(this).addClass("active"),$(this).parent().find(i).slideDown("fast"),$(this).find("span.button-text").toggleClass("hidden"))})}function o(){$(".popup").removeClass("active"),$(".popups").removeClass("active")}function r(i,a){i.click(function(i){$(this).is(".active")?($(this).removeClass("active"),o()):(l(),o(),s(),$(this).addClass("active"),$(".popups").addClass("active"),a.addClass("active"),$(this).is(".hide-on-click")&&$(this).parent().parent().hide()),e(i)})}function l(){$(".header-trigger").removeClass("active"),$(".header-dropdown").removeClass("active"),$(".subnav-trigger").removeClass("active"),$(".subnav-column").removeClass("active")}function n(i,a){i.click(function(i){$(this).is(".cart-link")||($(this).is(".active")?($(this).removeClass("active"),a.removeClass("active")):(l(),o(),s(),$(this).addClass("active"),a.addClass("active"))),e(i)})}i($(document));$("header"),$("footer");var d=$("html"),c=$("body"),h=($(".desktop-nav-holder"),$(".mobile-nav-holder"),$(".header-nav"),$(".main"),0);!function(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var i=document.createElement("div");i.style.position="absolute",i.style.top="0px",i.style.left="0px",i.style.visibility="hidden",i.style.width="200px",i.style.height="150px",i.style.overflow="hidden",i.appendChild(e),document.body.appendChild(i);var s=e.offsetWidth;i.style.overflow="scroll";var a=e.offsetWidth;s==a&&(a=i.clientWidth),document.body.removeChild(i),h=s-a}();var u=$("#modal-holder");$(document).on("click",".modal-trigger",function(s){var a="modals/"+$(this).attr("data-target")+".html";u.empty(),c.addClass("modal-open").css("padding-right",h),u.load(a,function(){i($(".modal")),$(this).addClass("active")}),l(),o(),e(s)}),$(".hero-slider").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,swipeToSlide:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30}),$(".catalogue-preview-slider").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:6,slidesToScroll:6,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:769,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:641,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:481,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(".products-preview-slider").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:3,slidesToScroll:3,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:641,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".reasons-slider").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:3,slidesToScroll:3,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:641,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".magazine-slider-1").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:3,slidesToScroll:3,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:641,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".magazine-slider-2").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:3,slidesToScroll:3,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:641,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".magazine-slider-3").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:3,slidesToScroll:3,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:641,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".partners-slider").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:6,slidesToScroll:6,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:801,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:641,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:481,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(".description-slider-1").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:641,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".description-slider-2").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:641,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".additional-slider").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:961,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:641,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".product-slider").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!1,centerPadding:"60px",variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,swipeToSlide:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30}),$("#stick").stick_in_parent({offset_top:60,parent:".fixed-parent",recalc_every:!0,bottoming:!0,spacer:!1}),$(".compare-slider-1").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,swipeToSlide:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30}),$(".compare-slider-2").slick({dots:!0,arrows:!1,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,draggable:!0,swipe:!0,swipeToSlide:!0,initialSlide:1,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30}),$(".compare-item .product-item-frame").matchHeight(),$(".benefits-slider").slick({dots:!0,arrows:!1,infinite:!0,speed:600,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!0,centerMode:!1,variableWidth:!1,fade:!1,autoplay:!1,autoplaySpeed:7e3,appendDots:".benefits-dots",draggable:!0,swipe:!0,swipeToSlide:!0,initialSlide:0,pauseOnHover:!0,vertical:!1,focusOnSelect:!1,accessibility:!1,touchThreshold:30,responsive:[{breakpoint:981,settings:{slidesToShow:2}},{breakpoint:641,settings:{slidesToShow:1}}]}),a($(".magazine-tabs > li"),$(".magazine-tabs-list > .tab-content")),a($(".product-tabs > li"),$(".product-tabs-list > .tab-content")),t($(".acc-trigger-1"),$(".acc-content-1")),t($(".acc-trigger-2"),$(".acc-content-2")),$("#dropdown-feedback").validate({errorPlacement:function(){},ignore:"",focusInvalid:!1,onfocusout:function(e){if(this.element(e),!this.checkable(e)&&(e.name in this.submitted||!this.optional(e))){var i=this,s=e;setTimeout(function(){i.element(s)},0)}},rules:{phone:{required:!0}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){},invalidHandler:function(){}}),$("#footer-form").validate({errorPlacement:function(){},ignore:"",rules:{email:{required:!0,email:!0}},highlight:function(e){$(e).parent().addClass("error"),$(e).addClass("error")},unhighlight:function(e){$(e).parent().removeClass("error"),$(e).removeClass("error")},submitHandler:function(){},invalidHandler:function(){}}),$(window).on("load scroll resize",function(){$(".product-item .image img").each(function(){$(this).height()>$(this).width()&&$(this).css({height:"100%",width:"auto"})})}),$(window).on("load resize",function(){$(window).width()+h<=960?$(".action-buttons-holder .action-buttons").appendTo(".fixed-slider"):$(".fixed-slider .action-buttons").appendTo(".action-buttons-holder"),$(window).width(),$(".compare-slider .slick-dots").each(function(){var e=$(".compare-slider .product-item").height()+17;$(this).css("top",e)})}),r($(".compare-action-butn"),$(".compare-popup")),r($(".favorite-action-butn"),$(".registration-popup")),r($(".cart-butn"),$(".cart-popup")),$(".popups .dismiss-butn").click(function(i){o(),e(i)}),$("a.fancy").fancybox({helpers:{overlay:{locked:!1}}}),$(".favorite .remove-action-butn").click(function(){$(this).parentsUntil(".inner").remove(),0==$(".favorite .catalogue-list-item").length&&$(".no-items").removeClass("hide").show()}),n($(".nav-trigger"),$(".nav-dropdown")),n($(".feedback-trigger"),$(".feedback-dropdown")),n($(".user-trigger"),$(".user-dropdown")),$(".dropdown-close").click(function(){l()}),$(".subnav-trigger").click(function(i){var s=$(this).attr("data-target");$(this).is(".active")?($(this).removeClass("active"),$(".subnav-column").removeClass("active")):($(".subnav-column").each(function(){var e=$(this).attr("data-subnav");s==e?($(".subnav-column").removeClass("active"),$(this).addClass("active")):$(this).removeClass("active")}),$(".subnav-trigger").removeClass("active"),$(this).addClass("active")),e(i)}),$(".subnav-back").click(function(){$(".subnav-trigger").removeClass("active"),$(".subnav-column").removeClass("active")}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&d.addClass("ios"),browserDetect={matchGroups:[[{uaString:"win",className:"win"},{uaString:"mac",className:"mac"},{uaString:"android",className:"android"},{uaString:"linux",className:"linux"}],[{uaString:"msie",className:"trident"},{uaString:"applewebkit",className:"webkit"},{uaString:"gecko",className:"gecko"},{uaString:"opera",className:"presto"}],[{uaString:"msie 8.0",className:"ie8"},{uaString:"msie 9.0",className:"ie9"},{uaString:"msie 10.0",className:"ie10"},{uaString:"firefox",className:"firefox"},{uaString:"opera",className:"opera"},{uaString:"chrome",className:"chrome"},{uaString:"safari",className:"safari"},{uaString:"unknown",className:"unknown"}]],init:function(){return this.detect(),this},addClass:function(e){this.pageHolder=document.documentElement,document.documentElement.className+=" "+e},detect:function(){for(var e,i=0;i<this.matchGroups.length;i++){e=this.matchGroups[i];for(var s,a=0;a<e.length;a++)if("string"==typeof(s=e[a]).uaString){if(this.uaMatch(s.uaString)){this.addClass(s.className);break}}else{for(var t=0,o=!0;t<s.uaString.length;t++)if(!this.uaMatch(s.uaString[t])){o=!1;break}if(o){this.addClass(s.className);break}}}},uaMatch:function(e){return this.ua||(this.ua=navigator.userAgent.toLowerCase()),-1!=this.ua.indexOf(e)}}.init();var p=window.devicePixelRatio>1?"retina":"no-retina";d.addClass(p),d.is(".ie8, .ie9")&&u.load("modals/warning-modal.html")}),$(window).load(function(){$("html").each(function(){setTimeout(function(){$("html").addClass("loaded")},2),$(this).is(".ios")||$(this).is(".android")?$(this).addClass("mobile"):$(this).addClass("desktop")})});