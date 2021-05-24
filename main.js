function LOGIN() {
    username= document.getElementById("user_name").value;
    localStorage.setItem("username", username);
    window.location= "kwitterRoom.html";
}