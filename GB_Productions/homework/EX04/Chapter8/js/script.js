

$(function(){
  console.log("Script is running.");
  $('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  $('#container').remove();                          // Remove old content
  $('#content').load(url + ' #content').hide().fadeIn('slow'); // New content
});
});




$('.tab-list').each(function(){                   // Find lists of tabs
  var $this = $(this),                            // Store this list
      $tab = $this.find('li.active'),             // Get the active list item
      $link = $tab.find('a'),                     // Get link from active tab
      $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function(e) { // When click on a tab
    e.preventDefault();                           // Prevent link behavior
    var $link = $(this),                          // Store the current link
        id = this.hash;                           // Get href of clicked tab 

    if (id && !$link.is('.active')) {             // If not currently active
      $panel.removeClass('active');               // Make panel inactive
      $tab.removeClass('active');                 // Make tab inactive

      $panel = $(id).addClass('active');          // Make new panel active
      $tab = $link.parent().addClass('active');   // Make new tab active 
    }
  });
});




console.log("script is running.");
$(function() {
  console.log("Form function is running.");
  $("#messages").submit(function(e){
    console.log("Submit is being caught.");
    e.preventDefault();
    var newText = $('input:text').val();
    console.log(newText);
    localStorage.setItem('userInput', newText);
    //location.reload();
  });
});


$(function(){
  var text = localStorage.getItem('userInput');
  if (text != null){
  var $newDiv = $("<div><p>" + text + "</p></div>")
  $('div:last').after($newDiv)
}
});


// NOTE: If you run this file locally
// You will not get a server status
// You can set the conditional statement to true on line 5 as shown below
// if(true) {




  $('.accordion').on('click', '.accordion-control', function(e){ // When clicked
  e.preventDefault();                    // Prevent default action of button
  $(this)                                // Get the element the user clicked on
    .next('.accordion-panel')            // Select following panel 
    .not(':animated')                    // If it is not currently animating
    .slideToggle();                      // Use slide toggle to show or hide it
});