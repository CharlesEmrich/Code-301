$(function() {
  var listItem, itemStatus, eventType //here, we declare the existence of some variables we'll use later

  $('ul').on( // a jQ selection, and the initial method. on() means we're starting an event handler
    'click mouseover', //defines what kind of event we're listening for. In this case we're listening both for clicks and mouseovers.
    ':not(#four)', // we've added an additional selector. Specifically, we're excluding
    {status: 'important'}, //this contains additional data for the event function to use
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />'; //Here we're going to start assigning values to those variables from above. This one alters the text content
      itemStatus = 'Status: ' + e.data.status + '<br />'; //here we are referencing that additional data
      eventType = 'Event: ' + e.type; //this store's the event's type in EventType, which will later print it.
      $('#notes').html(listItem + itemStatus + eventType); //In fact, here's where it does the printing.
    }
  );

});
