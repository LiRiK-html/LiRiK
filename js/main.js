$('.menu__btn').on('click',function(){
    $('.menu__list').toggleClass('menu__list--active');
});

$('.menu__item').on('click',function(){
    $('.menu__list').removeClass('menu__list--active');
});


$('.team__spoller-title').on('click',function(){
    $('.team__spoller-text').toggleClass('team__spoller-text--active').slideToggle(200);
});

$('.team__spoller-title').on('click',function(){
    $('.team__spoller-arrow').toggleClass('team__spoller-arrow--active');
});


$(function(){

    $('.portfolio__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
      });

});



// $('.menu__list').on('click',function(){
//     $('.menu__list').removeClass('menu__list--active');
// })


