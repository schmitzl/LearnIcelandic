$(function(){
    
    $( ".reload" ).click(function() {
     
        $(this).parent().siblings("form").children("sol").hide();
        $(this).parent().siblings("form").children("sub").show();
        $(this).parent().siblings("form").children("input").css('border-bottom', ' 1px solid #a7a7a7');
        $(this).parent().siblings("form").children("input").val("");
    });
});