var text = document.getElementById("cards");
var btn = document.getElementById("btn");
var app=document.getElementById("app");

btn.addEventListener("click", function () {
    var inpt = document.getElementById("inpt");
    var inptValue = inpt.value;

    var out = document.createElement("div");
    text.appendChild(out);
    out.innerHTML = inptValue;
    out.classList.add("out");
    app.appendChild(out);


})

