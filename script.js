function switchMode() {
    let htmlFile = document.querySelector("html");
    if (htmlFile.classList.contains("light")){
        htmlFile.classList.remove("light");
    } else {
        htmlFile.classList.add("light");
    }
}