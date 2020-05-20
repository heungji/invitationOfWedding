$(function(){

  $(".menu li").mousedown(function(){

    var scrollPosition = $($(this).attr("data-target")).offset().top;

   $("body").animate({scrollTop: scrollPosition
   }, 500);

  });

  $("footer p a").mousedown(function(){

    var scrollPosition = $($(this).attr("data-target")).offset().top;

   $("body").animate({scrollTop: scrollPosition
   }, 500);

  });

});
