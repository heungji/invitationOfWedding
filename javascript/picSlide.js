$(function(){

  var totalWidth = $('html').width();

  var width = $(".picList li").width();

  var picLeft = $(".picList").css("left").replace(/[^-\d\.]/g, '');

  var liCount = $(".picButton li").mouseover(function(){

    if(totalWidth != $('html').width()){

        width = $(".picList li").width();
        liCount = 0;
        totalWidth = $('html').width();
        
     }

    liCount = $(this).index();
    var totalMove = width*liCount;
    $(".picList").animate({left:picLeft-totalMove},1000);
    $(".picButton").children("li").not(liCount).css("opacity","1");
    $(".picButton").children("li").eq(liCount).css("opacity","0.5");

  });

});
