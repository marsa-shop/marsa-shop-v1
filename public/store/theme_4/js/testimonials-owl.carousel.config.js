!function(a){"use strict";a(document).on("ready",function(){function i(a){var b=a.item.count-1,d=Math.round(a.item.index-a.item.count/2-.5);d<0&&(d=b),d>b&&(d=0),c.find(".owl-item").removeClass("current").eq(d).addClass("current");var e=c.find(".owl-item.active").length-1,f=c.find(".owl-item.active").first().index(),g=c.find(".owl-item.active").last().index();d>g&&c.data("owl.carousel").to(d,100,!0),d<f&&c.data("owl.carousel").to(d-e,100,!0)}function j(a){if(h){var c=a.item.index;b.data("owl.carousel").to(c,100,!0)}}function k(a){var c=a.item.index,g=b.find(".item").eq(c).find(".testimonials-one__single").data("thumb-img"),h=b.find(".item").eq(c+1).find(".testimonials-one__single").data("thumb-img"),i=b.find(".item").eq(c-1).find(".testimonials-one__single").data("thumb-img");e.css("background-image","url("+i+")"),f.css("background-image","url("+h+")"),d.css("background-image","url("+g+")")}if(a(".testimonials-one").length){var b=a("#sync1"),c=a("#sync2"),d=a(".testimonials-one__button__current-btn"),e=a(".testimonials-one__button__prev-btn"),f=a(".testimonials-one__button__next-btn"),g=1,h=!0;b.owlCarousel({items:1,smartSpeed:700,autoplayHoverPause:!0,nav:!1,autoplay:!0,dots:!1,loop:!0,autoplayTimeout:5e3,responsiveRefreshRate:5e3,onInitialize:k,onTranslate:k,navText:['<i class="catch fa fa-angle-right"></i>','<i class="catch fa fa-angle-left"></i>']}).on("changed.owl.carousel",i),c.on("initialized.owl.carousel",function(){c.find(".owl-item").eq(0).addClass("current")}).owlCarousel({items:g,dots:!1,nav:!1,animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:700,slideBy:g,responsiveRefreshRate:5e3}).on("changed.owl.carousel",j),c.on("click",".owl-item",function(c){c.preventDefault();var d=a(this).index();b.data("owl.carousel").to(d,300,!0)}),f.on("click",function(a){b.trigger("next.owl.carousel"),a.preventDefault()}),e.on("click",function(a){b.trigger("prev.owl.carousel"),a.preventDefault()})}})}(jQuery);/* Developed Saed Z. Sinwar */