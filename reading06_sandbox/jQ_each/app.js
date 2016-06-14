$(function() {
  $('li').each(function() {
    console.log($(this).text());
    $(this).css('color','blue');
  });
});
