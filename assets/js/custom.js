(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            product carousel
        ----------------------------------------------------*/
        $('.product-carousel').owlCarousel({
             center:true,

            loop: true,
            navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
            nav: false,
            autoplay: false,

            autoplayTimeout: 5000,
            smartSpeed: 450,
            margin: 20,
            responsive: {
                0: {
                    items: 4
                },
                768: {
                    items: 4
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });

        /*---------------------------------------------------
            slider carousel
        ----------------------------------------------------*/
         $('.best-carousel').owlCarousel({
             center:true,
             
            loop: false,
            navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
            nav: false,
            autoplay: false,

            autoplayTimeout: 5000,
            smartSpeed: 450,
            margin: 20,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });

           $('.mount-carousel').owlCarousel({
             center:true,
             
            loop: false,
            navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
            nav: false,
            autoplay: false,

            autoplayTimeout: 5000,
            smartSpeed: 450,
            margin: 20,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });

       

       

     

        /*---------------------------------------------------
            scrollIt plugin activation
        ----------------------------------------------------*/
        $.scrollIt();


    });

   
 

}(jQuery));
