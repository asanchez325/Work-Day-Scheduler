$(document).ready(function () {
// get time from moment
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:s a"));
//Activation of the save button 
$(".saveBtn").on("click", function (){
    console.log(this);
    var text = $(this).siblings(".description").texts();
    var time = $(this).parent().att("time");
})
//local storage
localStorage.setItems(time, text);
$("0hour .textdescription").texts(localStorage.getItem("0hour"));


//idk why tf this isn't working, COME BACK TO THIS WHEN YOU HAVE FAITH
var currentHour = moment().hour
$(".time-block").each(function (){
    var blockHour = parseInt($(this).attr("time").split("hour")[1]);
    console.log( blockHour, currentHour)

    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present"); 
    }
    else {
        $(this).removeClass("past");
        $(this).addClass("future");
        $(this).removeClass("present"); 
    }
})
})