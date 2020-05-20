$(function counter(){

    $('body').css('overflow','hidden');

		var dday = new Date("June 20,2020,18:30:00").getTime(); //디데이
  	setInterval(function(){
  			var now = new Date(); //현재 날짜 가져오기
  			var distance = dday - now;
  			var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  			var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  			var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        $('.dday').html('결혼식까지 남은 시간은</br>'+d+'일 '+h+'시 '+m+'분 입니다.</p>')
      }, 1000);

    $('.popUp').mouseover(function(){
      $('body').css('overflow','auto');
      $(this).css('display','none');
    });


  });
