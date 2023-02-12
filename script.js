$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });



//toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// owl carousel script
$('.carousel').owlCarousel({
margin:20,
loop: true,
autoplayTimeOut: 2000,
autoplayHoverPause: true,});

})

