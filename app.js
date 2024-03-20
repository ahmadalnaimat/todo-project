var loop=true
var name = prompt("Enter your name")

while(loop){
    var gender= prompt("Enter your gender (male,female)")
    if (gender == "male" || gender == "female"){
        loop=false
    }
    else{
        alert("gender must be male or female")
    }
}
loop=true;
while(loop){
var age = prompt("Enter your age")
if(age <= 0){
    alert("the age is 0 or less")
    }
else{
    loop=false
}
}
var message = prompt("do you want to skip welcome message")
if(message == "skip"){
}
else{
    if(gender == "male"){
        alert("Welcome mr "+ name);
    }
    else if(gender == "female"){
        alert("Welcome ms " +name);
    };
}
