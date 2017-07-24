
function loadPost(htmlId, file) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var converter = new showdown.Converter(),
                text      = xmlhttp.responseText,
                html      = converter.makeHtml(text);

            document.getElementById(htmlId).innerHTML = html;
        }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
}