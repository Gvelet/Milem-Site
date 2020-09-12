$(document).ready(function(){
    $('.slider__about').slick({
        autoplay:true,
        autoplaySpeed:1500,
        responsive:[
            {
                breakpoint: 426,
                settings: {
                   arrows: false,
                   dots: true,
                }
            }
        ]
    });
    $('.slider__portfolio').slick({
        slidesToShow: 3,
        infinite:false,
        responsive:[
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },{
                breakpoint: 570,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.navbar__burger').click(function(event){
       $('.navbar__burger,.navbar__menu').toggleClass('active');
       $('body').toggleClass('lock');
    });
});

