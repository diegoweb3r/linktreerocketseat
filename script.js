function switchMode() {
    let htmlFile = document.querySelector("html");
    if (htmlFile.classList.contains("light")){
        htmlFile.classList.remove("light");
        image.src = "assets/avatar.png"
    } else {
        htmlFile.classList.add("light");
        let image = document.getElementById("image");
        image.src = "assets/avatar-light.png"
    }
}