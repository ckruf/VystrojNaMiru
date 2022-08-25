// ********** set date ************
// select span
const date = (document.getElementById(
    "date"
  ).innerHTML = new Date().getFullYear());
  
  // ********** nav toggle ************
  // select button and links
  const navBtn = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  // add event listener
  navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
  });

  
const equipmentHeading = document.getElementById("vystroj-nazev");
const equipmentText1 = document.getElementById("vystroj-popis1");
const equipmentText2 = document.getElementById("vystroj-popis2");

const helmaSpan = document.getElementById("helma");
const vyrazeckaSpan = document.getElementById("vyrazecka");
const betonSpan = document.getElementById("beton");
const rukaviceSpan = document.getElementById("rukavice");
const hokejkaSpan = document.getElementById("hokejka");

const helmaTitle = "Helmy"
const helmaText1 = "Naše helmy jsou nejlepší na trhu.";
const helmaText2 = "U nás si můžete přizpůsobit helmu jak jen budete chtít, což vám zajistí největší pohodlí a libovolný design.";

const vyrazeckaTitle = "Vyrážečky"
const vyrazeckaText1 = "S naší vyrážečkou už nepustíte ani jeden gól.";
const vyrazeckaText2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus necessitatibus, perferendis voluptate voluptas quos incidunt veritatis veniam distinctio fugit consequatur?";

const betonTitle = "Betony";
const betonyText1 = "S betony na míru od nás vydržíte celý zápas v rozkleku.";
const betonyText2 = "Nakonfigurujte si síťku mezi nohy a staňte se neprůstřelným.";

const rukaviceTitle = "Rukavice";
const rukaviceText1 = "S naší rukavicí Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda vitae aut consectetur exercitationem maiores architecto.";
const rukaviceText2 = "Přizpůsobte si rukavici Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sed debitis, veniam officia incidunt ut.";

const hokejkaTitle = "Hokejky";
const hokejkaText1 = "S naší hokejkou budete středem pozornosti na jakémkoliv ledě."
const hokejkaText2 = "Budete rozhrávat puk líp než Vasilevskij."

function setEquipment(title, text1, text2) {
  equipmentHeading.innerHTML = title;
  equipmentText1.innerHTML = text1;
  equipmentText2.innerHTML = text2;
}

helmaSpan.addEventListener("click", () => {
  setEquipment(helmaTitle, helmaText1, helmaText2)
});
vyrazeckaSpan.addEventListener("click", () => {
  setEquipment(vyrazeckaTitle, vyrazeckaText1, vyrazeckaText2)
});
betonSpan.addEventListener("click", () => {
  setEquipment(betonTitle, betonyText1, betonyText2)
});
rukaviceSpan.addEventListener("click", () => {
  setEquipment(rukaviceTitle, rukaviceText1, rukaviceText2)
});
hokejkaSpan.addEventListener("click", () => {
  setEquipment(hokejkaTitle, hokejkaText1, hokejkaText2)
});

const mojelogo = document.getElementById("mojelogo");
mojelogo.addEventListener("click", () => {
  location.href="/index.html"
});