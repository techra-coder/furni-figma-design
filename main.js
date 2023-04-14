$(document).ready(function(){
    $('.carousel').slick({
        dots:true,
        adaptiveWidth:true,
        prevArrow: '<button type="button" class="prev"><img src="./assets/section6-prev-arrow.svg" style="height:58px;width:58px" /></button>',
        nextArrow: '<button type="button" class="next"><img src="./assets/section6-next-arrow.svg" style="height:58px;width:58px" /></button>',
        slidesToShow: 1,
        slidesToScroll: 8,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '20px',
        useCSS:true,
        appendArrows: $('.carousel'),
    });
  });

//grab 3 chair card divs

// const highlightChairs = document.getElementsByClassName('section2-card');

// highlightChairs.forEach(chair=>chair.addEventListener('onHover',()=>handleHighlightHover));


//on:hover set classID on target to card-highlight,
// then remove card-highlight from other cards


