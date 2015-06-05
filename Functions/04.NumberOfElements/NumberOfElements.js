
function divCount() {
    var tag, tags, count = 0;
    // or you can use var allElem=document.all; and loop on it
    tags = "The DIV tags on the page are: "
    for (i = 0; i < document.all.length; i++) {
        tag = document.all(i).tagName;
        if (tag === 'DIV') {
            count++;
        }
        //tags = tags + "," + tag;
    }
    jsConsole.writeLine(tags + count);
    //document.write(tags + count);
}
function createDiv() {
    elem = document.createElement("div");
    elem.id = 'myDiv';
    elem.innerHTML = '&#60;div&#62; NEW DIV &#60;/div&#62;';
    document.body.insertBefore(elem, document.body.childNodes[0]);
}
function removeDiv() {
    var elem = document.getElementById('myDiv');    
    elem.parentNode.removeChild(elem);
    return false;
}
