// Responsividade da página
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

// Sistemas de click nos campos do jogo
let player = 0;

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  box.addEventListener("click", () => {
    const icon = box.querySelector("i");

    if (icon && !icon.classList.contains("fa-close") && !icon.classList.contains("fa-circulo")) {
      if (player === 0) {
        icon.classList.add("fa", "fa-close");
        testaClasses();
        vitoria(0);
        player = 1;        
      } else {
        icon.classList.add("fa", "fa-circulo");
        testaClasses();
        vitoria(1)
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
    combox += el.id;
    });
}

// Botão de reiniciar
document.getElementById("botao1").addEventListener("click", function() {
  const icons = document.querySelectorAll(".box i");
  
  icons.forEach(icon => {
     icon.classList.remove("fa", "fa-close");
     icon.classList.remove("fa", "fa-circulo");
  });
  combox = "";
  comboo = "";
  player = 0;
});

function vitoria(player) {
  const escrita = document.querySelector("p")

  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  const box4 = document.getElementById("box4");
  const box5 = document.getElementById("box5");
  const box6 = document.getElementById("box6");
  const box7 = document.getElementById("box7");
  const box8 = document.getElementById("box8");
  const box9 = document.getElementById("box9");

  const padroes = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],

    [box1, box4, box7],
    [box2, box5, box8],
    [box3, box6, box9],

    [box1, box5, box9],
    [box7, box5, box3]
  ]

  const allBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

  for (let box of padroes) {
    const [a, b, c] = box

    if (player === 0) {
      player = X
    } else if (player === 1) {
      player = O
    }

    if (a.innerText !== "" && a.innerText === b.innerText && a.innerText === c.innerText) {
      escrita.innerText = "O jogador " + player + "venceu!";
    }
  }
}