$(function() {
  $(".contents li").css({height: $(window).height(), paddingTop: $(window).height() / 2 - 90});

  $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     var height = $(".contents li").height();
     if(scroll <= height) {
        $(".bg-inner1").css({background: "#0a8302"});
     }
     if(scroll > height) {
        $(".bg-inner1").css({background: "#d17b02"});
     }
     if(scroll > height * 2) {
        $(".bg-inner1").css({background: "#c29d94"});
     }
  });
});
