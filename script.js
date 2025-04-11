// document.getElementById("menu-toggle").addEventListener("click", function () {
//     let menu = document.querySelector(".menu-content");
//     if (menu.style.display === "block") {
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "block";
//     }
// });



document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.add("open");
});

document.getElementById("menu-close").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.remove("open");
});

