$("h1").css('color', '#5e3951');
$("h1").css('background-color', '#e8b0d4');
$("p").css('font-weight', 'bold');
$("#everything").css("font-size", "120%");
$("#everything").css("border", "2px solid black");
$("#hide-me").hide();
$("#change-me").html("<p>I am a new sentence.</p>");
$("p").prepend("Behold, ");
$("#change-me").append(" I am not bold.");
$("p").css("color", "#33962e");
var callingCard = '<div id="chloe"><b>Chloe was here</b></div>';
$("body").append(callingCard);
var greeting = "<h1>Welcome to Chloe's jQuery SandBox</h1>";
$("body").prepend(greeting);
$('ol li').fadeOut(4000);
$('ol li').fadeIn(2000);
$('#chloe').slideUp(2000);
$('#chloe').slideDown(2000);
$("#everything").css({
    "width": "80%",
    "margin-left": "auto",
    "margin-right": "auto"
});

//$('.alert').slideToggle() // toggle between an element sliding up or down over time depending on whether it's visible or not
//
