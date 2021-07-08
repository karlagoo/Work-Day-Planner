var time = moment().hours();
var today = moment ();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(time)

//click event
//grab the value of the textarea
//localstorage to save
$(".saveBtn").on("click", function(event){
    localStorage.setItem();
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
