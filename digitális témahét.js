var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "free-sun-icon-3337-thumb.png";
    }else{
        icon.src = "ios-moon-8.png";
    }
};