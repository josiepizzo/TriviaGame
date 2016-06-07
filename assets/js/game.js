$(document).ready(function(){
	var question;			//question to be displayed
	var answer;				//answer to be displayed
	var	restore;			//this clears the click for the next step
	var innerCell		    //cell for the onclick
	var score = 0;         // keeps track of number of score
	var activecell;		//active cell

// Get elements
	var iCell = $('.inner-cell');
  var showquestion = $('.question');
  var showanswer = $('.answer');

// Displays question.
function showquestion(){
    $('#qscreen').show();
    $('#qscreen').html(item);
    $('#qscreen').attr('onclick','showanswer()');
}
// Displays Answer.
function showanswer(){
    $('#qscreen .question').hide();
    $('#qscreen .answer').show();
    $('#qscreen').attr('onclick','restore()');
}
// Restores the cells to display the next step in the game
function restore(){
    $('.activecell .answer').show();
    $('.activecell .question').show();
    $('.activecell .question').css('font-size','14px');
    $('.activecell .answer').css('font-size','14px');
    $('.activecell').removeClass('activecell');
    $('#qscreen').attr('onclick','showanswer()');
    $('#qscreen').hide();
}
//THIS DISPLAYED ALL QUESTIONS NEED TO ADJUST CODE TO DISPLAY ONLY ONE AT A TIME
$('#q1').on("click", function(){
  $('.question').show();
});

$(document).ready(function(){
    $('#qscreen').css('padding-top',0.33*screen.height);    
    $('#qscreen').show();
    setTimeout("$('#x').html('vin')",2000);
    $('#qscreen').append('<div style="position:absolute;bottom:0px;right:-100px"><a href="http://vimeo.com/47875656" style="color:#f1f1f1;" target="_blank">Muscles</a></div><div"><marquee style="position:absolute;bottom:0px"><h1>All Your Base Are Belong To Us</h1></marquee></div>');
});

});
