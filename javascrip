$(document).ready(function () {
    //display current day & time.
   var span = document.getElementById('currentDay');

   function time() {
     var d = moment().format('MMMM Do YYYY, h:mm:ss a');
     span.textContent = d 
   }
   setInterval(time, 1000);

    $(".saveBtn").on("click", function () {
     
        console.log(this);
        var text = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
        window.alert('Your task has been saved!');
        console.log('The button has been clicked!');
    })
    //We need to load the data from each storage to display it correctly
    $("#hour7 .task").val(localStorage.getItem("hour7"));
    $("#hour8 .task").val(localStorage.getItem("hour8"));
    $("#hour9 .task").val(localStorage.getItem("hour9"));
    $("#hour10 .task").val(localStorage.getItem("hour10"));
    $("#hour11 .task").val(localStorage.getItem("hour11"));
    $("#hour12 .task").val(localStorage.getItem("hour12"));
    $("#hour13 .task").val(localStorage.getItem("hour13"));
    $("#hour14 .task").val(localStorage.getItem("hour14"));
    $("#hour15 .task").val(localStorage.getItem("hour15"));
    $("#hour16 .task").val(localStorage.getItem("hour16"));
    $("#hour17 .task").val(localStorage.getItem("hour17"));
    $("#hour18 .task").val(localStorage.getItem("hour18"));
    $("#hour19 .task").val(localStorage.getItem("hour19"));


    // Check which hour it is and Colour code it accordingly
    function hourTracker() {
        //Get the current number of hours
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            
            //check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})