(function($) {
    "use strict";
    var initPreloader=function(){
        $(document).ready(function($)
    {
        var Body=$('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
    }
    var initChocolat=function() {
        Chocolat(document.querySelectorAll('.image-link'),{
            imageSize: 'contain',
            loop: true,
        })
    }
    var initSwiper=function() {
        var swiper=new Swiper(".main-swiper", {
            speed: 500,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        var bestselling_swiper =new Swiper(".bestselling-swiper", {
            slidesPreView: 4,
            spaceBetween: 30,
            speed: 500,
            breakpoints: {
                0: {
                    slidesPreView: 1,
                },
                768: {
                    slidesPreView: 3
                },
                991: {
                    slidesPreView: 4,
                },
            }
        });

        var testimonial_swiper =new Swiper(".testimonial-swiper", {
            slidesPreView: 1,
            speed: 500,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        var products_swiper=new Swiper(".products-carousel", {
            slidesPreView: 4,
            spaceBetween: 30,
            speed: 500,
            breakpoints: {
                0: {
                    slidesPreView: 1,
                },
                768: {
                    slidesPreView: 3,
                },
                991: {
                    slidesPreView: 4,
                },
            }
        });

    }
    var initProductQty = function(){
        $('.product-qty').each(function(){
            var $el_product=$(this);
            var quantity=0;

            $el_product.find('.quantity-right-plus').click
            (function(e) {
                e.preventDefault();
                var quantity=parseInt($el_product.find('#quantity').val());
                $el_product.find()('#quantity').val(quantity+1);
            });
            $el_product.find('.quantity-left-minus').click(function(e){
                e.preventDefault();
                var quantity=parseInt($el_product.find('#quantity').val());
                if(quantity>0)
                    {
                        $el_product.find('#quantity').val(quantity-1);
                    }
            });
        });
    }
    var initJarallax = function(){
        jarallax(document.querySelectorAll(".jarallax"));
        jarallax(document.querySelectorAll(".jarallax-keep-img"), {
            keepImg: true,
        });
    }
    $(document).ready(function() {
        initPreloader();
        initSwiper();
        initProductQty();
        initJarallax();
        initChocolat();

        var thumb_slider=new Swiper(".product-thumbnail-slider", {
            spaceBetween: 8,
            slidesPreView: 3,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var large_slider=new Swiper(".product-large-slider", {
            spaceBetween: 10,
            slidesPreView: 1,
            effect: 'fade',
            thumbs: {
                swiper: thumb_slider,
            },
        });
        window.addEventListener("load",(event)=> {
            $('.isotope-container').isotope({
                itemSelector: '.item',
                layoutMode: 'masonry'
            });
            var $grid=$('.entry-container').isotope({
                itemSelector: '.entry-item',
                layoutMode: 'masonry'
            });
            var $container=$('.isotope-container').isotope({
                itemSelector: '.item',
                layoutMode: 'masonry'
            });
            $(document).ready(function(){
                $('.filter-button').click(function(){
                    $('.filter-button').removeClass('active');
                });
            });
            $('.filter-button').click(function(){
                var filterValue=$(this).attr('data-filter');
                if(filterValue=='*'){
                    $container.isotope({filter: '*'});
                }
                else{
                    $container.isotope({ filter: filterValue});
                }
            });
        });
    });
})(jQuery);