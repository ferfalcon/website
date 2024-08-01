document.addEventListener("DOMContentLoaded", function(event){
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "") {
            thumbnailElement.classList.add("small");
        } else {
            thumbnailElement.classList.remove("small");
        }
    });
});