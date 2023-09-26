$(window).on("load", function () {

    // Slider Component
    if ($(".designpeer-slider-wrapper").length > 0) {
        $(".designpeer-slider-wrapper").each(function () {
            let $this = $(this),
                $thisID = $this.attr("id"),
                $data_space_desktop = ($this.data("space-desktop") !== undefined) ? $this.data("space-desktop") : 0,
                $data_space_tablet = ($this.data("space-tablet") !== undefined) ? $this.data("space-tablet") : 0,
                $data_space_mobile = ($this.data("space-mobile") !== undefined) ? $this.data("space-mobile") : 0,
                $items_desktop = ($this.data("items-desktop") !== undefined) ? $this.data("items-desktop") : 1,
                $items_tablet = ($this.data("items-tablet") !== undefined) ? $this.data("items-tablet") : 1,
                $items_mobile = ($this.data("items-mobile") !== undefined) ? $this.data("items-mobile") : 1,
                $auto_speed = ($this.data("autoplay-speed") !== undefined) ? $this.data("autoplay-speed") : 500000,
                $loop = ($this.data("loop") !== undefined) ? true : false,
                $free = ($this.data("freemode") !== undefined) ? true : false,
                $center = ($this.data("centered") !== undefined) ? true : false;
            let swiper = new Swiper("#" + $thisID, {
                loop: $loop,
                centeredSlides: $center,
                freeMode: $free,
                autoplay: {
                    delay: $auto_speed,
                    disableOnInteraction: true,
                },
                navigation: {
                    nextEl: `#${$thisID} .designpeer-slide-next`,
                    prevEl: `#${$thisID} .designpeer-slide-prev`,
                },
                pagination: {
                    el: `#${$thisID} .designpeer-slide-pagination`,
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: $items_mobile,
                        spaceBetween: $data_space_mobile
                    },
                    757: {
                        slidesPerView: $items_tablet,
                        spaceBetween: $data_space_tablet
                    },
                    1024: {
                        slidesPerView: $items_desktop,
                        spaceBetween: $data_space_desktop
                    }
                }
            });
        })
    }


    // ===================================================== 
    if ($(".play-overlay").length > 0) {
        $(".play-overlay button").on("click", function () {
            let vid = $(this).closest(".play-overlay").siblings("video");
            $(this).closest(".play-overlay").addClass("hidden")
            vid.trigger('play');
            vid.attr('controls', "true");
        })
    }


    // ===================================================== 
    if ($(".popup").length > 0) {
        $(".popup-btn").on("click", function () {
            $(".popup").addClass("active")
        })
        $(".popup-close-btn").on("click", function () {
            $(".popup").removeClass("active")
            let vid = $(".popup video");
            vid.trigger('pause');
        })
    }
});
