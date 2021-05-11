/*-----------------*/

//手動
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var squs = document.getElementsByClassName("squ");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < squs.length; i++) {
        squs[i].className = squs[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    squs[slideIndex - 1].className += " active";
}






new WOW().init();
/*  旋转进度条
 *   @param percent需要转动的百分比
 * */
function processBarRotate(percent) {
    var processBarHalfMove = '.processBarHalfMove';
    var processBarHalfLeft = '.processBarHalfLeft';
    var processBarHalfRight = '.processBarHalfRight';
    //
    //---按角度转动
    function barRotate(angle) {
        $(processBarHalfMove).css('transform', 'rotate(' + angle + 'deg)');
    }
    var angle = 3.6 * percent + 90;
    //小于50度，直接转到目标角度
    if (percent <= 50) {
        barRotate(angle);
    }
    //大于50度，则先转到一半，等事件结束
    else {
        var stopAtHalfAngle = 270;
        barRotate(stopAtHalfAngle);
        $(processBarHalfMove).one("webkitTransitionEnd", function() { //监听动画结束时事件
            barRotate(angle); //完成剩余的角度
            $(processBarHalfLeft).addClass('not-display');
            $(processBarHalfRight).removeClass('not-display');
        });
    }
}
/*  数字上升到百分比
 *   @param num到达的数字
 * */
function percentNumAdd(num) {
    var span = '.processBarInner i span';
    //
    var cnt = 0;
    var timer = setInterval(function() {
        if (cnt <= num) {
            $(span).text(cnt++);
        } else {
            clearInterval(timer);
        }
    }, 8);
}
/*----------------------------------------------------------------------------*/
//jq 事件
$(function() {
    processBarRotate(87);
    percentNumAdd(87);
});

/*-----------------*/
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*-------------------*/
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.hideme').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 500);

            }

        });

    });

});