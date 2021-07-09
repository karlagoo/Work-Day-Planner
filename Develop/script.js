var time = moment().hours();
var today = moment ();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(time)



//click event
//grab the value of the textarea
//localstorage to save
$(".saveBtn").on("click", function(event){
    var value = $(this).siblings('.timeBlock').attr('id');
    var time = $(this).siblings('.time').text().trim();
    localStorage.setItem(time, value);
})

//localstorage to retrieve it to the screen
//display the text on the desired area

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

