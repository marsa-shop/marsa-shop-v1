var $features_padding=100;if($(window).width()<768){$features_padding=50;}
$('.features-slider .owl-carousel').owlCarousel({stagePadding:$features_padding,loop:true,margin:30,nav:false,dots:false,rtl:true,responsive:{0:{items:1},600:{items:2},1000:{items:3},1300:{items:5},1500:{items:6}}});$(window).bind('load',function(){$('.slider-items .owl-carousel').owlCarousel({loop:true,margin:2,nav:false,autoplay:true,autoplayTimeout:5000,animateOut:'fadeOutRight',animateIn:'fadeInLeft',smartSpeed:500,dotsContainer:'#stores-dots',rtl:true,items:1,});});$('.slider-items .owl-carousel').on('changed.owl.carousel',function(event){if(event.item.index){$('.stores-text.displayed').hide();var curr_logo=$('.slider-items .owl-item:nth-child('+(event.item.index+1)+')').find('.item').attr('data-logo');var curr_text=$('.slider-items .owl-item:nth-child('+(event.item.index+1)+')').find('.item').attr('data-text');var curr_name=$('.slider-items .owl-item:nth-child('+(event.item.index+1)+')').find('.item').attr('data-name');var curr_url=$('.slider-items .owl-item:nth-child('+(event.item.index+1)+')').find('.item').attr('data-url');curr_text=curr_text.replace(/(<([^>]+)>)/ig,"");curr_name=curr_name.replace(/(<([^>]+)>)/ig,"");curr_url=curr_url.replace(/(<([^>]+)>)/ig,"");$('.stores-text.displayed').find('.store-img').html('<a href="'+curr_url+'" target="_blank" data-wpel-link="external"><img src="'+curr_logo+'" alt="'+curr_name+'"></a>');$('.stores-text.displayed').find('.store-name').html('<a href="'+curr_url+'" target="_blank">'+curr_name+'</a>');$('.stores-text.displayed').find('.store-details').text(curr_text);$('.stores-text.displayed').fadeIn();}});$('.testimonial-slider .owl-carousel').owlCarousel({loop:true,margin:0,autoplay:true,autoplayTimeout:5000,animateOut:'fadeOut',animateIn:'fadeIn',smartSpeed:500,nav:false,dotsContainer:'#testimonial-dots',rtl:true,items:1});$('.testimonial-dots li').click(function(){$('.testimonial-slider .owl-carousel').trigger('to.owl.carousel',[$(this).index(),300]);});$('.owl-dot').click(function(){$('.slider-items .owl-carousel').trigger('to.owl.carousel',[$(this).index(),300]);$('.slider-items-text .owl-carousel').trigger('to.owl.carousel',[$(this).index(),300]);});$('.features-section .slider-arrow.right').click(function(e){e.preventDefault();$('.features-slider .owl-carousel').trigger('next.owl.carousel');});$('.features-section .slider-arrow.left').click(function(e){e.preventDefault();$('.features-slider .owl-carousel').trigger('prev.owl.carousel',[300]);});$('.stores-section .slider-arrow.right').click(function(e){e.preventDefault();$('.slider-items-text .owl-carousel').trigger('next.owl.carousel');$('.slider-items .owl-carousel').trigger('next.owl.carousel');});$('.stores-section .slider-arrow.left').click(function(e){e.preventDefault();$('.slider-items-text .owl-carousel').trigger('prev.owl.carousel',[300]);$('.slider-items .owl-carousel').trigger('prev.owl.carousel',[300]);});$('.testimonial-section .slider-arrow.right').click(function(e){e.preventDefault();$('.testimonial-slider .owl-carousel').trigger('next.owl.carousel');});$('.testimonial-section .slider-arrow.left').click(function(e){e.preventDefault();$('.testimonial-slider .owl-carousel').trigger('prev.owl.carousel',[300]);});$(".contact-form").validate({rules:{email:{required:true,email:true},username:{required:true},msg:{required:true},},errorPlacement:function(error,element){},highlight:function(element){$(element).addClass('error');},unhighlight:function(element){$(element).removeClass('error');},submitHandler:function(form){form.submit();function showRequest(formData,jqForm,options){var queryString=$.param(formData);return true;}
        return false;}});if($(window).width()>991){(new WOW).init();}
var a=0;$(window).scroll(function(){if($('.numbers-section').length){var oTop=$('.numbers-section').offset().top-window.innerHeight;if(a==0&&$(window).scrollTop()>oTop){$('.number-item-content i').each(function(){var $this=$(this),countTo=$this.attr('data-count');$({countNum:$this.text()}).animate({countNum:countTo},{duration:1000,easing:'swing',step:function(){$this.text(Math.floor(this.countNum));},complete:function(){$this.text(this.countNum);}});});a=1;}}});$(document).on('click','.hamburger',function(){$(this).toggleClass('is-active');$('.mobile-menu').toggleClass('active');$('body, html').toggleClass('mobile-menu-active');$('.mobile-social').toggleClass('animated fadeInDown');$('.mobile-ul-wrap').toggleClass('animated fadeInDown');});$('.scrollable-area').mCustomScrollbar();$('.dropdown-menu').click(function(e){e.stopPropagation();});$('.pricing-item-buttin').on('mouseover',function(){$(this).closest('.pricing-item').find('.pricing-item-price span').addClass('pricing__anim');$(this).closest('.pricing-item').find('.pricing-item-price b').addClass('pricing__anim--2');});$('.pricing-item-buttin').on('mouseout',function(){$(this).closest('.pricing-item').find('.pricing-item-price span').removeClass('pricing__anim');$(this).closest('.pricing-item').find('.pricing-item-price b').removeClass('pricing__anim--2');});$(window).scroll(function(){if($(window).width()>768){if($(this).scrollTop()>313){$(".p-table-main").addClass("fixed");}else{$(".p-table-main").removeClass("fixed");}}});$(document).ready(function(){$('.comment-form-author input').attr('placeholder','الإسم');$('.comment-form-email input').attr('placeholder','البريد الإلكتروني');$('.comment-form-comment textarea').attr('placeholder','التعليق');});