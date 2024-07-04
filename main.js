//메인메뉴의 움직이는 바
$('.gnb a').mouseenter(function(){
    let bar = $(this).position().left;
    //position() : 요소의 위치정보(top,left)를 반환한다.
    console.log(bar)

    let widnum = $(this).width();
    //$('.bar').animate({옵션},시간)
    $('.bar').animate({
        'left' : bar + "px",
        'width' : widnum + "px",
        //객체 안에는 세미콜론 적으면 안됨
    },200)
})

//애니메이션(jquery's library)
$('.animate').scrolla({
    mobile: false, // disable animation on mobiles
    once: false, // only once animation play on scroll
    animateCssVersion: 4 // used animate.css version (3 or 4)
  });

//menuOpen(Jquery 방법 --> 위에서부터 차례대로 읽어내려옴)
//$('.menuOpen .open').click(function(){
//    $('.menuWrap')
//})

//(Java script방법)
let menuWrap = $('.menuWrap');
let open = $('.menuOpen .open');//변수--> 메모리할당(에러가 덜남)
let close = $('.menuWrap .close');

open.click(function(){
    menuWrap.addClass('on')
})
close.click(function(){
    menuWrap.removeClass('on')
})

//circle path
//1️⃣path의 총 길이 구하기
let path = document.querySelector('.path1')
let pathHeight = path.getTotalLength()
console.log(pathHeight)

//service 영역 도착시 배경컬러 바꾸기

//스크롤을 움직이면 어떤 일이 일어난다.(Jquery)
//scroll은 window에서 제공하는 것임
$(window).scroll(function(){//scroll을 움직인 값
    //$(this) -->$(window)
    //console.log($(this).scrollTop() + ":scollTop")
    let scrollTop = $(this).scrollTop();

    //offset().top : 전체문서의 top에서 service영역의 top까지의 거리
    //console.log($('.service').offset().top)//offset : 정보
    let offset = $('.service').offset().top

    if(scrollTop > offset){
        $('body').addClass("on")
    }else{
        $('body').removeClass("on")
    }
    
})