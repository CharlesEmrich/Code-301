$(function() {
  $('h3').html(function() {
    return '<em>' + $(this).text + '</em>';
  };
  $('h2').text('Successfully changed!')
});
