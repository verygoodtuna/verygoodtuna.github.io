const ASIDE = document.querySelectorAll('.link_btn li');

new fullpage('#main', {
    anchors: ['intro', 'project'],
    responsiveWidth: 700,
    css3: false,
    scrollOverflow: false,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    controlArrows: false,
    loopHorizontal: false,
    
    afterLoad: function (origin, destination, direction, trigger) {
    },
});

const SLIDE = document.querySelector('#slide_move');
const SLIDE_ITM = document.querySelectorAll('#slide_move .slide');

SLIDE.addEventListener('wheel', (e) => {

    console.log(e, e.deltaY); // e.deltaY 100, -100

    if (e.deltaY > 0) {
        fullpage_api.moveSlideRight();
    } else {
        fullpage_api.moveSlideLeft();
    }

})

const SCROLL = document.querySelector('.scroll_btn');

SCROLL.addEventListener('click', () => {
    SCROLL.classList.add('.img_box');
})

var TOP = new Swiper(".top_slide", {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    //loopedSlides: 1,
    loopAdditionalSlides : 1,
    slidesPerView: 4,
    spaceBetween: 30,
})

var BOTTOM = new Swiper(".bottom_slide", {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    //loopedSlides: 1,
    loopAdditionalSlides : 1,
    slidesPerView: 4,
    spaceBetween: 30,
})