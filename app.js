broj = document.querySelector("input");
container = document.querySelector(".igrica");
dugme = document.querySelector(".submit");
pogodak = document.querySelector(".h4");
rndm = Math.round(Math.random() * 20);
score = document.querySelector(".brojac");
play = document.querySelector(".ponovo");
skor = document.querySelector(".hs");
console.log(rndm);

function submit() {
  var br = broj.value.trim();
  console.log(br);
  broj.value = "";
  if (br) {
    if (score.innerHTML > 0) {
      if (br > 20) {
        pogodak.innerHTML = "uneti broj je veci od 20";
      } else if (br < 0) {
        pogodak.innerHTML = "uneti broj je manji od 1";
      } else if (br > rndm) {
        pogodak.innerHTML = "manje";
      } else if (br < rndm) {
        pogodak.innerHTML = "vise";
      } else if (br == rndm) {
        pogodak.innerHTML = "pogodili ste broj";
        play.style.display = "inline";
        // score.innerHTML = "0";
        dugme.preventDefault;
        dugme.setAttribute("onclick", "");

        container.style.backgroundColor = "green";
        if (score.innerHTML > skor.innerHTML) {
          skor.innerHTML = score.innerHTML;
          // localStorage.setItem("skor", skor.innerHTML);
        }
      }
    }
  } else {
    pogodak.innerHTML = "niste uneli broj";
    // container.style.backgroundColor = "orange";
  }
}
var count = 0;
dugme.addEventListener("click", function () {
  if (pogodak.innerHTML != "pogodili ste broj") {
    count++;
  }
  score.innerHTML = 20 - count;
  if (score.innerHTML < 0) {
    score.innerHTML = 0;
    container.style.backgroundColor = "red";
    pogodak.innerHTML = "niste uspeli da pogodite broj";
    // dugme.style.display = "none";
    play.style.display = "inline";
  }
});
function playagain() {
  rndm = Math.round(Math.random() * 20);
  console.log(rndm);
  play.style.display = "none";
  score.innerHTML = 20;
  pogodak.innerHTML = "prvo unesite broj";
  container.style.backgroundColor = "black";
  count = 0;
  dugme.setAttribute("onclick", "submit()");
}
broj.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let s = document.getElementsByClassName("submit");
    s[0].click();
  }
});

// jos samo da namestim da brojac ne ide ako je input prazan
