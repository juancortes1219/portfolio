function myFunction(x) {
    var j = document.getElementById("gallery-filter");
    
    if (x.matches) {
        $(function () {
            $(j).load("./photo-extra/larger-filter.html");
        });
    } else {
        $(function () {
            $(j).load("./photo-extra/smaller-filter.html");
        });
    }
}

var x = window.matchMedia("(min-width: 768px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes