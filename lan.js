$(document).ready(function(){
    $(".lang_icon").click(function(){
        $(".lang_list").fadeIn('normal');
        $(".lang_icon i").removeClass("fa-angle-down");
        $(".lang_icon i").addClass("fa-angle-up");

    });
    $(".lang_list").mouseleave(function(){
        $(".lang_list").fadeOut('normal');
        $(".lang_icon i").removeClass("fa-angle-up");
        $(".lang_icon i").addClass("fa-angle-down");
    });
});


//네비 부분 스크립트 (모바일 형 네비 부분)

$(document).ready(function() {
    $(".m_nav_icon").toggle(function() {
      $("#gnb").slideDown('slow');
    }, function() {
      $("#gnb").slideUp('fast');
    });
});