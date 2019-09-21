var Event = function(name, imagePath){
    this.name=name
    this.imagePath=imagePath
}

var newEvent = new Event("Christmas 2015","assets/images/planner_pic_2.jpg")

function theEvent(){
    console.log(newEvent)
    window.alert(newEvent.name + ' ' +typeof newEvent)
}

//Event Handlers
var button = document.getElementById('submitForm1')
var submitHandler = function formSubmitHandler(){
    console.log("in formSumitHandler()")
}
button.addEventListener('click',submitHandler)
button.removeEventListener('click', submitHandler)

function getTodaysDate(){
    var today = new Date();
    if (today.getDate()<10){
        day = "0" +today.getDate();
    }
    else{
        day= today.getDate();
    }

    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + day

    var maxYear = today.getFullYear() + 10

    var maxdate = maxYear + '-' + (today.getMonth()+1) + '-' + day
    return [date,maxdate]
}
