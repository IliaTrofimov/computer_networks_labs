let isExpanded = false;

function toggleExpand(){
    if (isExpanded){
        document.getElementById("header").style.display = 'block';
        document.getElementById("item-header").style.display = 'block';
        document.getElementById("footer").style.display = 'block';
        document.getElementById("item").className = "item border-shadow";
        document.getElementById("items").className = "items";

        document.getElementById("toggle").innerText = "Развернуть страницу";
    }
    else{
        document.getElementById("header").style.display = 'none';
        document.getElementById("item-header").style.display = 'none';
        document.getElementById("footer").style.display = 'none';
        document.getElementById("item").classList = null;
        document.getElementById("items").classList = null;

        document.getElementById("toggle").innerText = "Свернуть страницу";
    }

    isExpanded = !isExpanded;
}

function setFont(font){
    document.getElementById("items").style.fontFamily = font;
}