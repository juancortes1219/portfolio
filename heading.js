function myFunction(x) {
    var j = document.getElementById("jHeading");
    if ((x.matches) || (j.className === "display-4 text-break")) {
        j.className = "display-3 text-break";
    } else {
        j.className = "display-4 text-break";
    }
}

var x = window.matchMedia("(min-width: 768px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes