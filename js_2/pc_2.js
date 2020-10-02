// スマホ //

// 背景色の切り替え //
// 項目１ → ２ //
$(window).scroll(function(){
  var top = $("#top02").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#bg").addClass("act01");
  }else{
    $("#bg").removeClass("act01");
  }
})
// 項目２ → ３ //
$(window).scroll(function(){
  var top = $("#top03").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#bg").addClass("act02");
  }else{
    $("#bg").removeClass("act02");
  }
})
// 項目３ → ４ //
$(window).scroll(function(){
  var top = $("#top04").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#bg").addClass("act03");
  }else{
    $("#bg").removeClass("act03");
  }
})

// テキストのフェードイン //
// 項目２ //
$(window).scroll(function(){
  var top = $("#top02").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#sp_content02_fadeIn").addClass("text_fadeIn");
  }
})
$(window).scroll(function(){
  var top = $("#top02").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#tablet_content02_fadeIn").addClass("text_fadeIn");
  }
})
$(window).scroll(function(){
  var top = $("#top02").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#pc_content02_fadeIn").addClass("pc_text_fadeIn");
  }
})

$(window).scroll(function(){
  var top = $("#top02").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#content02_fadeIn_img").addClass("img_fadeIn");
  }
})

// 項目３ //
$(window).scroll(function(){
  var top = $("#top03").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#sp_content03_fadeIn").addClass("text_fadeIn");
  }
})
$(window).scroll(function(){
  var top = $("#top03").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#tablet_content03_fadeIn").addClass("text_fadeIn");
  }
})
$(window).scroll(function(){
  var top = $("#top03").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#pc_content03_fadeIn").addClass("pc_text_fadeIn");
  }
})

$(window).scroll(function(){
  var top = $("#top03").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#content03_fadeIn_img").addClass("img_fadeIn");
  }
})

// 項目４ //
$(window).scroll(function(){
  var top = $("#top04").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#sp_content04_fadeIn").addClass("text_fadeIn");
  }
})
$(window).scroll(function(){
  var top = $("#top04").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#tablet_content04_fadeIn").addClass("text_fadeIn");
  }
})
$(window).scroll(function(){
  var top = $("#top04").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#pc_content04_fadeIn").addClass("pc_text_fadeIn");
  }
})

$(window).scroll(function(){
  var top = $("#top04").offset().top;
  var position = top - $(window).height() + 600;
  if($(window).scrollTop() > position){
    $("#content04_fadeIn_img").addClass("img_fadeIn");
  }
})
