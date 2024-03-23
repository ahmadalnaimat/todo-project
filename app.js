var Loop=true
var Name = prompt("Enter your Name")

while(Loop){
    var Gender= prompt("Enter your Gender (male,female)")
    if (Gender == "male" || Gender == "female"){
        Loop=false
    }
    else{
        alert("Gender must be male or female")
    }
}
Loop=true;
while(Loop){
var age = prompt("Enter your age")
if(age <= 0){
    alert("the age is 0 or less")
    }
else{
    Loop=false
}
}
var Message = prompt("do you want to skip welcome Message")
if(Message == "skip"){
}
else{
    if(Gender == "male"){
        alert("Welcome mr "+ Name);
    }
    else if(Gender == "female"){
        alert("Welcome ms " +Name);
    };
}

var Question1 = prompt("do you have a bachelor degree (Yes,No)")
var Question2 = prompt("do you enjoy the subject of you bachelor degree (Yes,No)")
var Question3 = prompt("do you want to specialize in you bachelor degree (Yes,No)")
var Arr=[Question1,Question2,Question3]
for(i=0;i<=Arr.length-1;i++){
    if (Arr[i]==="") {
        Arr[i]="invalid";
    }
}
console.log(Arr)