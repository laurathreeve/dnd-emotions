var emotionsList =["Angry", "Sad", "Happy", "Lustful", "Intrigued", "Pensive", "Joy", "Fear", "Content", "Excitement", "Disguist", "Mischevious", "Pissed","Vengeful","Anxious", "Bored","Remorse","Longing","Wanderlust","Inspired",];

//document.getElementById("#dice").onClick = roll();//

document.addEventListener("click", roll);


function roll(){
    var item = emotionsList[Math.floor(Math.random() * emotionsList.length)]
    var text = "You are feeling";
    document.getElementById("textcontainer").innerHTML = text + "<p>"+item+"</p>"
    };

//$ (#dice).onclick = roll();//
