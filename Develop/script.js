var time = moment().hours();
var today = moment ();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(time)

//click event
//grab the value of the textarea
//localstorage to save
$(".saveBtn").on("click", function(event){
    // var value = $(this).siblings('.timeBlock').attr('id');
    var value = $(this).siblings('.timeBlock').val()
    var time = $(this).siblings('.time').text().trim();
    localStorage.setItem(time, value);
})

$(".timeBlock").each(function (index, timeBlock) {
    //console.log(index)
    //console.log(timeBlock)
    var realTime = $(this).attr("id");
    console.log(realTime)

    if (time == realTime) {
        $(this).addClass("present")
    }
    else if (time > realTime) {
        $(this).addClass("past")
    }
    else {
        $(this).addClass("future")
    }

})

//localstorage to retrieve it to the screen
//display the text on the desired area
$("#9").val(localStorage.getItem('9AM'))
$("#10").val(localStorage.getItem('10AM'))
$("#11").val(localStorage.getItem('11AM'))
$("#12").val(localStorage.getItem('12PM'))
$("#13").val(localStorage.getItem('1PM'))
$("#14").val(localStorage.getItem('2PM'))
$("#15").val(localStorage.getItem('3PM'))
$("#16").val(localStorage.getItem('4PM'))
$("#17").val(localStorage.getItem('5PM'))
