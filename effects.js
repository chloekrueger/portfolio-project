/*$('li').on('mouseover', function(){
  $(this).addClass('highlighted')
})
$('li').on('mouseleave', function(){
  $(this).removeClass('highlighted')
})*/

$('.photo').on('click', function(){
  $('#hidden-blurb').slideDown(); // only works if #hidden-blurb has display:none; in its CSS
});
$('.photo').on('click', function(){
  $('#hidden-blurb').slideUp(); // only works if #hidden-blurb has display:none; in its CSS
});
