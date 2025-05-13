document.addEventListener("DOMContentLoaded", function () {
    function ajustaAltura() {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(function (box) {
        const boxWidth = box.offsetWidth;
        box.style.height = boxWidth + "px";
        });
    }

    ajustaAltura();

    if (window.attachEvent) {
        window.attachEvent("onresize", function () {
            ajustaAltura();
        });
    } else if (window.addEventListener) {
        window.addEventListener("resize", function () {
             ajustaAltura();
    }, true);
    } else {
        console.log("Seu navegador não suporta alguns efeitos de JavaScript");
    }
});

