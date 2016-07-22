/**
 * Created by Administrator on 2016/7/7.
 */
window.onload = function(){
    paginationStyle()
    function paginationStyle(){
        $(".swiper-pagination-bullet").addClass("iconfont icon-icon111")
    }
}
$(function(){
    var swiperArr = document.getElementsByClassName("swiper-slide");
    var colorArr =["#ffc90d","#0099d2","#204e7f","#a3248f","#000004"];
    for(var i=0;i<swiperArr.length;i++){
        swiperArr[i].style.backgroundColor = colorArr[i]
    }
    var mySwiper = new Swiper('.swiper-container', {
        direction : 'vertical',
        shortSwipes : true,
        paginationType : 'bullets',
        paginationElement : 'i',
        pagination : '.swiper-pagination',
        paginationClickable :true,
        keyboardControl : true,
        mousewheelControl : true,
        onSlideChangeEnd:function(){
            console.log()
            animation($(".swiper-pagination-bullet-active").index())
        }
    })
})
//第一段动画
$(function(){
    animation(0)
})
function animation(page){
    switch(page){
        case(0):{
            //第一页,一左一右关门
            $(".me").addClass("animated bounceInLeft").css({
                display:"block"
            });
            $(".myIntro").addClass("animated bounceInRight").css({
                display:"block"
            });
            break;
        }
        case (1):{
            $(".cont").addClass("animated fadeIn").css({
                display:"block"
            })
            break;
        }
        case (2):{
            $("p.bigger").addClass("animated bounceInLeft").css({
                display:"block"
            });
            setTimeout(function(){
                $("p:not(.bigger)").addClass("animated fadeIn").css({
                    display:"block"
                })
            },1000)
        }
    }
}