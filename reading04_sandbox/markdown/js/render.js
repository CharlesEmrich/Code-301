$(function() {
  var tBody    = $('#tBody'); // Input area
  var pHrawOut = $('#pHrawOut'); // Shows raw HTML string; NOT used in the blog app
  var pMarkOut = $('#pMarkOut'); // Shows rendered HTML
  var pJson    = $('#pJson');    // Shows JSON string of object that holds "body"
  var mObj = {}; // Empty object, filled in during JSON string update

  function render() {
    var bodVal = tBody.val(); // Raw article markup
    var m = marked(bodVal); // Convert markup to html

    // Render article preview (rendered HTML)
    pMarkOut.html(m);
    pMarkOut.find('pre code').each(function(i, block) { //This searches for a jQ selection of code tags who are nested inside pre tags. These are the tags that highlight.js uses to locate things you want to run it on, a shorthand similar to the way that jQ uses the $.
       hljs.highlightBlock(block); // Syntax-highlight each code block "in place"
    }); // My presumption, based on syntax, is that the preceeding line runs highlight.js' central function. However toggling it in and out of comments didn't seem to do anything?

    pHrawOut.text(m); // Draw raw HTML

    // Update JSON article
    mObj.articleBody = m; //mObj is the object which contains the contents of the live JSON feed.
    var jsonStr = pJson.text(JSON.stringify(mObj)); //This line sets the text content of the pJson div in the DOM to the stringified form of the mObj object. The effect is of a visible JSON object appearing in the pJSON div.
  }

  // Any character change (article editing) updates the live output paragraphs
  tBody.on('input', render); //this event binder controls how often the live renderings update. As currently set, every keypress causes these to refresh. Is that memory intensive?

  render(); // Render once on doc load
});
