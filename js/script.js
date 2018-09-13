
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

$(document).ready(function(){
    $('#pic1').click(function(){
        $('#wow2').effect('explode',3000)
        
    });
});

/*$("#wow2").mouseenter(function(){
    $("#wow2").css({width:500});
});
$("#wow2").mouseleave(function(){
    $("#wow2").css({width:700});
});*/







