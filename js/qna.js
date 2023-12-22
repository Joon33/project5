$(function(){
  var menuItem = $('.qna li a');
  var firstItem = $('.qna li:first-child a');

  firstItem.addClass('act').next().css('display', 'block');

  menuItem.click(function(e){
    $(this).toggleClass('act').next().slideToggle(800);

    e.preventDefault();
  });
});