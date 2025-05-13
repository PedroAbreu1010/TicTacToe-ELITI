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

let player = 0;
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener("click", () => {
    const icon = box.querySelector('i');

    if (icon && !icon.classList.contains('fa-close') && !icon.classList.contains('fa-circulo')) {
      if (player === 0) {
        icon.classList.add('fa', 'fa-close');
        testaClasses();
        player = 1;
      } else {
        icon.classList.add('fa', 'fa-circulo');
        testaClasses();
        player = 0;
      }
    }
  });
});
    let combox = "";
    let comboo = "";
function testaClasses() {
    
    combox = "";
    const elements = document.querySelectorAll(".fa-close");
    elements.forEach(el => {
    combox += el.id; // ou el.getAttribute("id") — ambos funcionam
    });

    
}

// Botão de reiniciar
document.getElementById("botao").addEventListener("click", function() {
  const icons = document.querySelectorAll(".box i");
  
  icons.forEach(icon => {
     icon.classList.remove("fa", "fa-close");
     icon.classList.remove("fa", "fa-circulo");
  });
  combox = "";
  comboo = "";
  player = 0;
});