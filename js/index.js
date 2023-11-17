$(document).ready(function() {
    // 湲곗〈 css�먯꽌 �뚮줈�� 諛곕꼫 �꾩튂(top)媛믪쓣 媛��몄� ���ν븳��.
    var floatPosition = parseInt($("#floatMenu").css('top'));
    // 250px �대윴�앹쑝濡� 媛��몄삤誘�濡� �ш린�� �レ옄留� 媛��몄삩��. parseInt( 媛� );
    $(window).scroll(function() {
     // �꾩옱 �ㅽ겕濡� �꾩튂瑜� 媛��몄삩��.
     var scrollTop = $(window).scrollTop();
     var newPosition = scrollTop + floatPosition + "px";
     // �좊땲硫붿씠�� �놁씠 諛붾줈 �곕씪媛� 
     $("#floatMenu").stop().animate({
      "top" : newPosition
     }, 500);
    }).scroll();
   });
   
   
   $(function(){
    $('.data').mouseover(function(e) { // 留덉슦�� �ㅻ쾭�� 醫뚰몴媛믪쓣 諛쏅뒗�� -> e
     $(this).mousemove(function(e) {
      $('#divLayer #title').empty().append($(this).attr("l_name")); // divLayer�덉뿉�덈뒗 title�� 媛믪쓣 data�� wr_name 媛믪쑝濡� 移섑솚�쒕떎.
   
      $('#divLayer #conttent').empty().append($(this).text());
   
      var t=e.pageY-15;
      var l=e.pageX-120;
   
      $('#divLayer').css({"top":t, "left":l,"position":"absolute","opacity":"0,8" }).show();
     });
    });
   
    $('.data').mouseout(function() {
     $('#divLayer').hide();
    });
   });