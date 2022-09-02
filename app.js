const selected = document.getElementById("inputGroupSelect04");
const A = document.getElementById("A");
const C = document.getElementById("C");

const scenario = document.querySelectorAll(".scenario");

const textInput = document.getElementById("textInput");

const dateInput = document.getElementById("dateInput");
const button = document.getElementById("button");

const fileInput = document.getElementById("fileInput");

const areaInput = document.getElementById("areaInput");

let radio;
function detect() {

  if (radio == "A" && selected.value == "PHP") {
    textInput.style.display = "block";
    dateInput.style.display = "block";
    fileInput.style.display = "none";
    areaInput.style.display = "none";
  } else if (radio=="A" && selected.value =="Wordpress"){
  textInput.style.display = "none";
  dateInput.style.display = "none";
  fileInput.style.display = "block";
  areaInput.style.display = "none";

  } else if (radio=="C" && selected.value =="Laravel"){
    textInput.style.display = "none";
      dateInput.style.display = "none";
      fileInput.style.display = "none";
      areaInput.style.display = "block";
      button.style.display = "block";

  }else {
    textInput.style.display = "none";
    dateInput.style.display = "none";
    fileInput.style.display = "none";
    areaInput.style.display = "none";
    button.style.display = "none";
  }


}
scenario[0].addEventListener("change", () => {
  radio = "A";
  detect();
});

scenario[2].addEventListener("change", () => {
  radio = "C";
  detect();
});
scenario[1].addEventListener("change", () => {
  radio = "B";
  detect();
});

selected.addEventListener("change", () => {
  detect();
});
