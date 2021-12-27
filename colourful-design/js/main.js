
var dark = false;
var sun = "assets/sun-icon.png"
var moon = "assets/moon-icon.png";
function dark_mode(){
    //window.alert("Changing to dark mode...")
    var cont = document.getElementById('container')
    var btn = document.getElementById('dark-mode-toggle')
    if(dark){
    cont.className = "container day"
    btn.src = moon
    }else{
    cont.className = "container dark"
    btn.src=sun
    }
    dark = !dark
    console.log("somthing here")
}

function to_more_details(){
    window.alert("Learning more ")
}

function to_leave_review(){
    window.alert("Reviewing ")
}
