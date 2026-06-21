function countText() {
    let text = document.getElementById("text").value;

    let words = text.trim();

    if (words === "") {
        document.getElementById("words").innerText = 0;
    } else {
        document.getElementById("words").innerText = words.split(/\s+/).length;
    }

    document.getElementById("characters").innerText = text.length;
}