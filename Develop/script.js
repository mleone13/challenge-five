{
  /* <div class="row time-block">
<div class="col-2 hour">9am</div>
<textarea class="col-8 description"></textarea>
<button class="saveBtn">Save</button>
</div> */
}

var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
hourArray.forEach(function (hour) {
  var hourDisplay = "";
  if (hour < 12) {
    hourDisplay = hour + " am ";
  } else if (hour === 12) {
    hourDisplay = hour + " pm ";
  } else {
    hourDisplay = hour - 12 + " pm ";
  }
  var colorKey = "past";
  var currentHour = moment().hour();
  console.log(currentHour);
  if (currentHour === hour) {
    colorKey = "present";
  } else if (currentHour < hour) {
    colorKey = "future";
  }
  var rowDiv = $("<div>").addClass("row time-block").attr("id", hour);
  var hourDiv = $("<div>").addClass("col-2 hour").text(hourDisplay);
  var textAreaEl = $("<textarea>")
    .addClass("col-8 description " + colorKey)
    .val(localStorage.getItem(hour));
  var saveBtnEl = $("<button>").addClass("saveBtn").text("save");
  $(".container").append(rowDiv.append(hourDiv, textAreaEl, saveBtnEl));
});
$(".saveBtn").on("click", function () {
  var targetHour = $(this).parent().attr("id");
  var activity = $(this).siblings(".description").val().trim();

  localStorage.setItem(targetHour, activity);
});
