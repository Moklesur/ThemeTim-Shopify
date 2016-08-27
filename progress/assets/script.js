/********************************************************
 ## Owl Sliders
 ********************************************************/
if ($('.new-arrival').length) {
    $('.new-arrival').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: !0,
        navText: ["<a><i class='fa fa-angle-left fa-3x'></i></a>", "<a><i class='fa fa-angle-right fa-3x'></i></a>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
}
if ($('.our-brand-owl').length) {
    $('.our-brand-owl').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: !0,
        navText: ["<a><i class='fa fa-angle-left fa-3x'></i></a>", "<a><i class='fa fa-angle-right fa-3x'></i></a>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:5
            },
            1000:{
                items:6
            }
        }
    });
}
/********************************************************
 ## Welcome Newsletter
 ********************************************************/
if($.cookie("welcome_newsletter") == null) {
    $('#welcome-newsletter').modal('show');
}
$(document).on("click", "#welcome-newsletter .close", function(p) {
    p.preventDefault();
    $.cookie("welcome_newsletter", "no");
});
/********************************************************
 ## Add To Cart
 ********************************************************/
$(document).on("click", ".product-message", function() {
    $('.myModal').modal('show');
});

