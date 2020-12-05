$(document).ready(function() {

    //put in current time and day
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a ")); //use .text vs append since you are just writing in text javascript = textContent

    $(".saveBtn").on("click", function(){
        var textInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id"); //links the specific row (id) to that textarea 

        //save to storage
        localStorage.setItem(time, textInput); 
    });

    function hourUpdater() {
        //gets you the current hour so you can then do the time checks for the colors of the cells 
        var currentHour = moment().hour(); 
        // console.log(currentHour);
       
        //loop over time blocks
        $(".time-block").each(function(){
            //get the time for each of the time block use split
            var hourOfTimeBlock = $(this).attr("id").split("-")[1]; //square bracket is getting the index spot --so the first thing after the dash is what 1 is
            hourOfTimeBlock = parseInt(hourOfTimeBlock); //change the string to a number
            // console.log(hourOfTimeBlock);

            //check if we've moved past his time
            if (hourOfTimeBlock === currentHour) {
                $(this).children(".description").removeClass("past future");
                $(this).children(".description").addClass("present");
            }
            else if (hourOfTimeBlock < currentHour) {
                $(this).children(".description").removeClass("present future");
                $(this).children(".description").addClass("past");
            }
            else { //don't need condition since it is the last thing. 
                $(this).children(".description").removeClass("past present");
                $(this).children(".description").addClass("future");
            }
        })
    }

    //updating the colors every 3 seconds--using setInterval and to call on the function hourUpdater
    setInterval(hourUpdater, 3000); 

    //use id where you want it then class to be more specific, need key (see storage), don't need hash tag
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    $("#hour-19 .description").val(localStorage.getItem("hour-19"));
    $("#hour-20 .description").val(localStorage.getItem("hour-20"));
    $("#hour-21 .description").val(localStorage.getItem("hour-21"));
    $("#hour-22 .description").val(localStorage.getItem("hour-22"));
    $("#hour-23 .description").val(localStorage.getItem("hour-23"));
    
});
