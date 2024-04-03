$(function(){
  const $depth1 = $('.gnb > ul > li > a');
  $depth1.on('mouseenter',function(e){
    e.preventDefault();
    $(this).parent('li').siblings('li').find('.sub-menu').removeClass('active');
    $(this).siblings('.sub-menu').addClass('active');
  })
  $('.sub-menu').on('mouseleave',function(e){
    $('.sub-menu').removeClass('active');
  })
})