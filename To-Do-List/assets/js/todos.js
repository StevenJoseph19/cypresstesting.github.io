//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on x to delete todo
//Set up an event when the 'x' is selected on the webpage (which is inside a span) we want the list item to delete. 
//As the span is nested within an li we need to use the parent() method to select the element that the span inherits from (li)
//We then add a fadeout transition and have added another callback function. This is so the transition completes before the 
//li item is removed. If we did not have the callback function, the li will remove straight away once the 'x' is selected.
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});										
	event.stopPropagation();	//Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing the new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");  //The .append() method inserts the specified content as the last child of each element in the jQuery collection
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});