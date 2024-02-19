$(function () {
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  
    $(".time-block").each(function () {
      var currentHour = parseInt(dayjs().format("h"));
      var currentPeriod = dayjs().format("A");
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      var blockPeriod = $(this).attr("id").split("-")[2];
      console.log(currentHour, blockHour, blockPeriod);
  
      if (currentPeriod === blockPeriod) {
        if (blockHour < currentHour) {
          $(this).addClass("bg-dark-subtle");
        } else if (blockHour === currentHour) {
          $(this).removeClass("bg-dark-subtle");
          $(this).addClass("bg-light");
        } else {
          $(this).removeClass("bg-dark-subtle");
          $(this).removeClass("bg-light");
          $(this).addClass("bg-primary-subtle");
        }
      } else if (currentPeriod === "AM" && blockPeriod === "PM") {
        $(this).addClass("bg-primary-subtle");
      } else if (currentPeriod === "PM" && blockPeriod === "AM") {
        $(this).addClass("bg-dark-subtle");
      }
    });
  
    $(".saveBtn").on("click", function () {
      var hourId = $(this).parent().attr("id");
      var input = $(this).siblings(".description").val();
  
      localStorage.setItem(hourId, input);
    });
  
    $(".description").each(function () {
      var id = $(this).parent().attr("id");
      var saved = localStorage.getItem(id);
  
      if (saved !== null) {
        $(this).val(saved);
      }
    });
  });