var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("img-expand");
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");


//Initialises onclick functions for all expanding images
for (var i =0; i<img.length; i++){
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

//Close the modal if clicked outside the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
}
if(span){span.onclick = function() {
  modal.style.display = "none";
}}

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fade').each( function(){
            var bottom_of_element = $(this).offset().top + 5;/*$(window).height()/6;*/ /*+ $(this).outerHeight()/4;*/
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).css("opacity", 1);
                //$(this).css("margin-top", '0px');
            } else{
                $(this).css("opacity",0);
                //$(this).css("margin-top", '100px');
            }
        }); 
    });
    $('.fade').each( function(){
        var bottom_of_element = $(this).offset().top + 5;/*$(this).outerHeight()/4;*/
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_element ){
            $(this).css("opacity", 1);
                //$(this).css("margin-top", '0px');
        } else{
            $(this).css("opacity",0);
            //$(this).css("margin-top", '100px');
         }
    }); 
});


$(document).ready(function() { 
    $(window).resize(function() { 
        $(".fit-namebadge").each(function(){
            if($(window).width()<=530){
                var scaleAmount = (1-(1-$(window).width()/530));
                $(this).css("transform", "scale("+ scaleAmount +")  translate("+ (scaleAmount*100-100)/2 +"%, 0%)");
                console.log(scaleAmount*110-100);
            } else{
               $(this).css("transform", "scale(1)"); 
            }
            
        }); 
    }); 
            $(".fit-namebadge").each(function(){
            if($(window).width()<=530){
                var scaleAmount = (1-(1-$(window).width()/530));
                $(this).css("transform", "scale("+ scaleAmount +")  translate("+ (scaleAmount*100-100)/2 +"%, 0%)");
                console.log(scaleAmount*110-100);
            } else{
               $(this).css("transform", "scale(1)"); 
            }
            
        }); 
}); 

$(document).ready(function() { 
    $(".nav-item").each(function(){
        if($(window).width()>692){ //If we dont wrap, set font size with an ease
            $(this).css("font-size", parseInt($(this).css("--initialFontSize")) + "px");       
        } else {
            console.log("none");
            $(this).css("transition","font-size 0s, opacity 0.7s ease-in-out, line-height 0.5s, font-size 0.5s, background-color 0.5s, border-color 0.5s");
            $(this).css("font-size", parseInt($(this).css("--initialFontSize")) + "px");
            $(this).css("transition","font-size --initialFontSize, opacity 0.7s ease-in-out, line-height 0.5s, font-size 0.5s, background-color 0.5s, border-color 0.5s");
        }
        
    });
});

$(".nav-item").mouseover(function(){
    if($(window).width()>750){
        $(this).css("line-height", "30px");
        $(this).css("font-size", parseInt($(this).css("--initialFontSize"))+10 + "px");
    } else {
        $(this).css("border-color","rgba(87, 87, 92, 1)");
        $(this).css("background-color", "rgba(26, 26, 28, 1)");
    }
    
    /*
    
    */
});

$(".nav-item").mouseout(function(){
    $(this).css("line-height", "37px");
    $(this).css("font-size", parseInt($(this).css("--initialFontSize")) + "px");
    $(this).css("border-color","rgba(26, 26, 28, 0)");
    $(this).css("background-color", "rgba(87, 87, 92, 0)");
    /*
    
    */  
});


$(".icon-click-background").mouseover(function(){
    $(this).next().css("clip-path", "circle(" + 100 + "% at center)");
    $(this).next().parent().parent().css("transform", "scale(1.2)");
});
$(".icon-click-background").mouseout(function(){
    $(this).next().css("clip-path", "circle(" + 0 + "% at center)");
    $(this).next().parent().parent().css("transform", "scale(1)");
});

//Used to fit image to screen