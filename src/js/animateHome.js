$(document).ready(function() { 
    $(".start-hidden").each(function(){
        if($(this).css("--fadein-delay")){
            //$(this).css("--fadein-delay")
            $(this).delay($(this).css("--fadein-delay")).queue(function (next){
                $(this).css("opacity", "1");
            })
      
        }
    });
});