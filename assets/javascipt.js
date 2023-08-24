var saveButton = $("button");
var dayToday = moment().format("dddd, MMMM Do");
var storedHourInput = JSON.parse(localStorage.getItem("taskPerHour"));
var containerTimeBlocks = $("#container");
var hourRows = $(".hour");

//lists the current day and date in the Jumbotron.
$("#currentDay").text(dayToday);

var currentHour = moment().format("HH");

//this checks the current hour and apples the relevent CSS class to that time block.
for (var i = 0; i < hourRows.length; i++) {
	var hourRow = $(hourRows[i]);
	var hourRowData = hourRow.data("hour");
	if (currentHour > hourRowData) {
		hourRow.next().addClass("past");
	} else if (currentHour < hourRowData) {
		hourRow.next().addClass("future");
	} else {
		hourRow.next().addClass("present");
	}
}

if (storedHourInput === null) {
	storedHourInput = Array(9).fill("");
}

//this loops through each input of the html elements and places in the locally stored values.
for (var i = 0; i < storedHourInput.length; i++) {
	containerTimeBlocks
		.children()
		.children("input")
		.eq(i)
		.val(storedHourInput[i]);
}

//when this button is clicked it saves to local storage by selecting the previous sibling.
saveButton.on("click", function (event) {
	var currentTarget = $(event.currentTarget);
	var calendarHourInput = currentTarget.prev();
	var buttonIndex = currentTarget.data("buttonindex");
	storedHourInput[buttonIndex] = calendarHourInput.val();
	//saves to local storage ->
	localStorage.setItem("taskPerHour", JSON.stringify(storedHourInput));
});