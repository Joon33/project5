$(function(){

  var imgItem = $('.gallery li, .cbp-item');

  imgItem.hover(
    function(){
      $(this).find('img').attr("src", $(this).find('img').attr("src").replace(/-off(\.gif|\.jpg|\.png)$/, "-on$1"));
    },
    function(){
      $(this).find('img').attr("src", $(this).find('img').attr("src").replace(/-on(\.gif|\.jpg|\.png)$/, "-off$1"));
    }
  );

});