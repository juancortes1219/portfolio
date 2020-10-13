function myFunction(x) {
    var j = document.getElementById("jHeading");
    if (x.matches) {
        j.innerHTML = "PHOTOGRAPHY";
    } else {
        j.innerHTML = "PHOTO-GRAPHY";
    }
}

var x = window.matchMedia("(min-width: 576px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes