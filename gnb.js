$(document).ready(function(){
    $(".m_nav_icon").toggle(function(){
        $("#gnb").slideDown('slow');
    }, function(){
        $("#gnb").slideUp('fast');
    });
});
