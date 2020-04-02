var HOUR = 9;
var MINUTE = 25;
var PERIOD = "PM"

var str="It's ";

if(MINUTE > 30){
    str += "almost " + (HOUR + 1)
}else{
    str += "just after " + (HOUR)
}

if(PERIOD == "PM"){
    str += " in the evening."
}else{
    str += " in the morning."
}
console.log(str)