$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}
	
});

(function($){
  $.fn.dropdown = function(){
    return this.each(function(){
      var $gnb = $(this),
          $menu = $gnb.find(".menu"),
          $depth1 = $gnb.find(".depth1"),
          $depth2 = $gnb.find(".depth2");
      
      $gnb.mouseenter(function(){
        gnbOn();
      }).mouseleave(function(){
        gnbOff();
      });
      
      $gnb.find("a").focusin(function(){
        gnbOn();
      }).focusout(function(){
        gnbOff();
      });
        
      function gnbOn(){
        $gnb.find($depth2).stop().animate({height: "235"});/*�쒕툕硫붾돱 �믪씠 議곗젅*/
      }
      
      function gnbOff(){
        $gnb.find($depth2).stop().animate({height: "0"});
      }

    });
  }
})(jQuery);

if (matchMedia("screen and (min-width: 1024px)").matches) {
  $(function(){
  $(".dropdown").dropdown();
});
} else {
 $(function(){
});
}

/*�꾩껜硫붾돱*/

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#gnb').toggleClass('open');
  });
  
/*$('.dropdown').hover(function() {
   $('#logo').toggleClass('logo_on');
  });

$('.dropdown').hover(function() {
   $('aside.util').toggleClass('util_on');
  });*/

