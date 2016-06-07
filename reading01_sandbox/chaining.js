$('li[id!="one"]').hide().delay(500).fadeIn(1400); // If I'm reading this right, we're selecting all <li> items whose ids exist but aren't "one" and hiding them, delaying a few seconds, and fading them back in
$('li:first-child').addClass('next'); //Here, we're selecting the first child of each li tag and adding the class "next"
$('li.priority').addClass('highlight'); //And now we're selecting each li with class "priority" and adding the "highlight" class. I'm unsure about this because there don't appear to be any li tags matching this.
