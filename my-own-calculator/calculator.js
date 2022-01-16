let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number3 = document.querySelector("#number3");
let number4 = document.querySelector("#number4");
let number5 = document.querySelector("#number5");
let number6 = document.querySelector("#number6");
let number7 = document.querySelector("#number7");
let number8 = document.querySelector("#number8");
let number9 = document.querySelector("#number9");
let rakam1 = document.querySelector(".rakam1");
let islem1 = document.querySelector(".islem1");
let rakam2 = document.querySelector(".rakam2");
let genelsonuc = document.querySelector(".genelsonuc");

let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let multiply = document.querySelector("#multiply");
let equal = document.querySelector("#equal");
let dividing = document.querySelector("#dividing");




number1.addEventListener("click", gösterme);

function gösterme() {
  if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
    rakam1.innerHTML += number1.innerHTML;
  } else {
    rakam2.innerHTML += number1.innerHTML;
  }
}

number2.addEventListener("click", gösterme2);

function gösterme2 () {
    if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
      rakam1.innerHTML += number2.innerHTML;
    } else {
      rakam2.innerHTML += number2.innerHTML;
    }
  }

number3.addEventListener("click", gösterme3);

function gösterme3() {
    if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
      rakam1.innerHTML += number3.innerHTML;
    } else {
      rakam2.innerHTML += number3.innerHTML;
    }
  }

number4.addEventListener("click", gösterme4);

function gösterme4() {
    if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
      rakam1.innerHTML += number4.innerHTML;
    } else {
      rakam2.innerHTML += number4.innerHTML;
    }
  }

number5.addEventListener("click", gösterme5);

function gösterme5() {
    if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
      rakam1.innerHTML += number5.innerHTML;
    } else {
      rakam2.innerHTML += number5.innerHTML;
    }
  }

number6.addEventListener("click", gösterme6);

function gösterme6() {
    if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
      rakam1.innerHTML += number6.innerHTML;
    } else {
      rakam2.innerHTML += number6.innerHTML;
    }
  }

number7.addEventListener("click", gösterme7);

function gösterme7() {
    if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
      rakam1.innerHTML += number7.innerHTML;
    } else {
      rakam2.innerHTML += number7.innerHTML;
    }
  }

number8.addEventListener("click", gösterme8);

function gösterme8() {
    if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
      rakam1.innerHTML += number8.innerHTML;
    } else {
      rakam2.innerHTML += number8.innerHTML;
    }
  }

number9.addEventListener("click", gösterme9);

function gösterme9() {
    if (islem1.innerHTML != "+" && islem1.innerHTML != "-" && islem1.innerHTML != "*" && islem1.innerHTML != "/") {
      rakam1.innerHTML += number9.innerHTML;
    } else {
      rakam2.innerHTML += number9.innerHTML;
    }
  }

addition.addEventListener("click", toplama);

function toplama() {
  islem1.innerHTML = addition.innerHTML;
  
}

subtraction.addEventListener("click", cıkarma);

function cıkarma() {
  islem1.innerHTML = subtraction.innerHTML;
  
}

multiply.addEventListener("click", carpma);

function carpma() {
  islem1.innerHTML = multiply.innerHTML;
  
}

dividing.addEventListener("click", bolme);

function bolme() {
  islem1.innerHTML = dividing.innerHTML;
  
}

equal.addEventListener("click", esittir)

function esittir() {
    if (islem1.innerHTML == "+") {
        genelsonuc.innerHTML += Number(rakam1.innerHTML) + Number(rakam2.innerHTML)
    } else if (islem1.innerHTML == "-") {
        genelsonuc.innerHTML += Number(rakam1.innerHTML) - Number(rakam2.innerHTML)
    } else if (islem1.innerHTML == "/") {
        genelsonuc.innerHTML += Number(rakam1.innerHTML) / Number(rakam2.innerHTML)
    } else if (islem1.innerHTML == "*") {
        genelsonuc.innerHTML += Number(rakam1.innerHTML) * Number(rakam2.innerHTML)
    }
}
