let btn = document.getElementById("btn1")

let btn2 = document.getElementById("btn2")
btn.addEventListener("click", function () {

    alert("welcome to btn");
});
btn2.addEventListener("click", function () {
    alert("welcome to btn 2");
});
btn.addEventListener("click", function () {
    window.open("about.html", "_blank");
});