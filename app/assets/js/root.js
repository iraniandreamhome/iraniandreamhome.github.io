const loading_div = document.getElementById("loading"),
bg_loading_div = document.getElementById("bg-loading"),
text_loading = document.getElementById("loading-text");

function loaded() {
    loading_div.className = "";
    bg_loading_div.className = "";
    text_loading.className = "";
    loading_div.style.display = "none";
    bg_loading_div.style.display = "none";
    text_loading.style.display = "none";
}

function more_social() {

}