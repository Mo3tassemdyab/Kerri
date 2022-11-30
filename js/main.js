
let aboutOffset =  $('#about').offset().top;
let navHeight = $('.nav').outerHeight()
$(window).scroll(function(){
    let windowScroll =  $(window).scrollTop();
    if( windowScroll > aboutOffset - navHeight ){
        $('nav').css('backgroundColor' , 'rgba(0,0,0,1)')
        $('.backToTop').fadeIn(1000).css( "display" , "flex")
    }
    else{
        $('nav').css('backgroundColor' , 'transparent')
        $(".backToTop").fadeOut(500)
    }
})
$('a').click( function(e){
let linkHref = $(e.target).attr('href');
    let sectioneOffset = $(linkHref).offset().top;
    $('html , body').animate( { scrollTop: sectioneOffset }, 500)
})
$('.backToTop').click( function(){
    $('html , body').animate( { scrollTop: 0 }, 1000)
})
$(document).ready( function(){

$('.loadingScreen').fadeOut(1000 , function(){
    $('.loadingScreen').remove()
    $('body').css("overflow" , "auto")
})
})
