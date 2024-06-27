console.log(
  `%c
                                                                                                                                                                                   
                                                                                                                                                                                   
MMMMMMMM               MMMMMMMM     OOOOOOOOO     DDDDDDDDDDDDD        UUUUUUUU     UUUUUUUULLLLLLLLLLL             
M:::::::M             M:::::::M   OO:::::::::OO   D::::::::::::DDD     U::::::U     U::::::UL:::::::::L             
M::::::::M           M::::::::M OO:::::::::::::OO D:::::::::::::::DD   U::::::U     U::::::UL:::::::::L             
M:::::::::M         M:::::::::MO:::::::OOO:::::::ODDD:::::DDDDD:::::D  UU:::::U     U:::::UULL:::::::LL             
M::::::::::M       M::::::::::MO::::::O   O::::::O  D:::::D    D:::::D  U:::::U     U:::::U   L:::::L               
M:::::::::::M     M:::::::::::MO:::::O     O:::::O  D:::::D     D:::::D U:::::D     D:::::U   L:::::L               
M:::::::M::::M   M::::M:::::::MO:::::O     O:::::O  D:::::D     D:::::D U:::::D     D:::::U   L:::::L               
M::::::M M::::M M::::M M::::::MO:::::O     O:::::O  D:::::D     D:::::D U:::::D     D:::::U   L:::::L               
M::::::M  M::::M::::M  M::::::MO:::::O     O:::::O  D:::::D     D:::::D U:::::D     D:::::U   L:::::L               
M::::::M   M:::::::M   M::::::MO:::::O     O:::::O  D:::::D     D:::::D U:::::D     D:::::U   L:::::L               
M::::::M    M:::::M    M::::::MO:::::O     O:::::O  D:::::D     D:::::D U:::::D     D:::::U   L:::::L               
M::::::M     MMMMM     M::::::MO::::::O   O::::::O  D:::::D    D:::::D  U::::::U   U::::::U   L:::::L         LLLLLL
M::::::M               M::::::MO:::::::OOO:::::::ODDD:::::DDDDD:::::D   U:::::::UUU:::::::U LL:::::::LLLLLLLLL:::::L
M::::::M               M::::::M OO:::::::::::::OO D:::::::::::::::DD     UU:::::::::::::UU  L::::::::::::::::::::::L
M::::::M               M::::::M   OO:::::::::OO   D::::::::::::DDD         UU:::::::::UU    L::::::::::::::::::::::L
MMMMMMMM               MMMMMMMM     OOOOOOOOO     DDDDDDDDDDDDD              UUUUUUUUU      LLLLLLLLLLLLLLLLLLLLLLLL



222222222222222         999999999      333333333333333   
2:::::::::::::::22     99:::::::::99   3:::::::::::::::33 
2::::::222222:::::2  99:::::::::::::99 3::::::33333::::::3
2222222     2:::::2 9::::::99999::::::93333333     3:::::3
            2:::::2 9:::::9     9:::::9            3:::::3
            2:::::2 9:::::9     9:::::9            3:::::3
         2222::::2   9:::::99999::::::9    33333333:::::3 
    22222::::::22     99::::::::::::::9    3:::::::::::3  
  22::::::::222         99999::::::::9     33333333:::::3 
 2:::::22222                 9::::::9              3:::::3
2:::::2                     9::::::9               3:::::3
2:::::2                    9::::::9                3:::::3
2:::::2       222222      9::::::9     3333333     3:::::3
2::::::2222222:::::2     9::::::9      3::::::33333::::::3
2::::::::::::::::::2    9::::::9       3:::::::::::::::33 
22222222222222222222   99999999         333333333333333   
                                                                                                                                                                                   
                                                                                                                                                                                   
                                                                                                                                                                                   
                                                                                                                                                                                   
                                                                                                                                                                                   
                                                                                                                                                                                   
                                                                                                                                                                                   
`,
  "color: red;"
);

console.log(
  "%cDies ist ein Projekt von Tim Marlétaz zum Modul 293 (Webauftritt erstellen und veröffentlichen)",
  "font-family: Helvetica; font-size: 15px;"
);

console.log(
  "%cMehr Informationen finden Sie hier: https://github.com/timmarletaz/Modul-293",
  "font-family: Helvetica; font-size: 15px; background-color: #203454; border-radius: 5px;"
);

var element = document.getElementById("skills");

const main = document.querySelector("main");
const section1 = document.querySelector("#landing-a");
const section2 = document.querySelector("#skills-a");
const section3 = document.querySelector("#about-a");
const section4 = document.querySelector("#kontakt-a");
var count = 0;
var sklMain = document.querySelector("#sklCont .sklMain");
var cont = document.querySelector("#sklCont");
var text = document.querySelector("#sklText");
var def;
var img = document.querySelector("#sklImage");
var mkeSml = document.querySelector("#makeSmaller");
var imgA = document.getElementById("imgA");
var width = document.body.clientWidth;
var logo = document.querySelector("#logo picture img");
var mobHme = document.getElementById("mobHme");
var mobSkll = document.getElementById("mobSkll");
var mobAbt = document.getElementById("mobAbt");
var mobCnt = document.getElementById("mobCnt");
const mobNav = document.querySelectorAll(".mobNav a");
const mobOpen = document.getElementById("openMob");
var telNum = document.getElementById("TelNum");
var country = document.querySelector("select");
var header = document.querySelector("#sklTitle");
var mobContent = document.getElementById("mobContent");
const mobI = document.getElementById("mobI");
var span = document.querySelector(".mobIcon");

if (country.value == "Wählen Sie ihr Land") {
  telNum.disabled = true;
  telNum.setAttribute("value", "");
}

telNum.addEventListener("keydown", (event) => {
  if (event.key == "Backspace" || event.key == "Delete") {
    if (
      telNum.value.substring(0, 6) != "+41 " ||
      telNum.value.substring(0, 6) != "+49 " ||
      telNum.value.substring(0, 7) != "+432 " ||
      telNum.value.substring(0, 6) != "+33 " ||
      telNum.value.substring(0, 7) != "+39"
    ) {
      checkCountry();
    }
  }
});

const fileInpt = document.querySelector("#file");
const chosenFile = document.querySelector("#fileText");

fileInpt.addEventListener("change", function (event) {
  chosenFile.innerHTML = `<i class="fa-solid fa-xmark"></i>&nbsp${this.files[0].name}`;
  chosenFile.style.cursor = "pointer";
});

chosenFile.addEventListener("click", function () {
  fileInpt.value = "";
  chosenFile.innerHTML = "Keine Dateien ausgewählt";
  chosenFile.style.cursor = "";
});

country.addEventListener("click", function () {
  checkCountry();
});

function checkCountry() {
  if (country.value == "Schweiz") {
    telNum.value = "+41 ";
    telNum.disabled = false;
  } else if (country.value == "Deutschland") {
    telNum.value = "+49 ";
    telNum.disabled = false;
  } else if (country.value == "Österreich") {
    telNum.value = "+43 ";
    telNum.disabled = false;
  } else if (country.value == "Fürstentum Lichtenstein") {
    telNum.value = "+432 ";
    telNum.disabled = false;
  } else if (country.value == "Frankreich") {
    telNum.value = "+33 ";
    telNum.disabled = false;
  } else if (country.value == "Italien") {
    telNum.value = "+39 ";
    telNum.disabled = false;
  } else if (country.value == "Belgien") {
    telNum.value = "+32 ";
    telNum.disabled = false;
  } else if (country.value == "Luxemburg") {
    telNum.value = "+352 ";
    telNum.disabled = false;
  } else if (country.value == "Niderelande") {
    telNum.value = "+31 ";
    telNum.disabled = false;
  }
  if (country.value == "Wählen Sie ihr Land") {
    telNum.disabled = true;
    telNum.value = "";
  }
}

if (width <= 630) {
  logo.style.width = "60px";
  logo.style.aspectRatio = "1/1";
}

logo.addEventListener("click", function () {
  window.location.reload();
});

const scrollEvent = () => {
  if (main.clientHeight === window.innerHeight) {
    const scrollTop = main.scrollTop;
    const windowHeight = window.innerHeight;

    // Section 1
    if (scrollTop < windowHeight) {
      section1.className = "active";
      mobHme.style.color = "#FF5900";
    } else {
      section1.className = "";
      mobHme.style.color = "";
    }

    // Section 2
    if (scrollTop >= windowHeight && scrollTop < windowHeight * 2) {
      section2.className = "active";
      mobSkll.style.color = "#FF5900";
    } else {
      section2.className = "";
      mobSkll.style.color = "";
    }

    // Section 3
    if (scrollTop >= windowHeight * 2 && scrollTop < windowHeight * 3) {
      section3.className = "active";
      mobAbt.style.color = "#FF5900";
    } else {
      section3.className = "";
      mobAbt.style.color = "";
    }

    // Section 4
    if (scrollTop >= windowHeight * 3 && scrollTop < windowHeight * 4) {
      section4.className = "active";
      mobCnt.style.color = "#FF5900";
    } else {
      section4.className = "";
      mobCnt.style.color = "";
    }
  } else {
    if (main.scrollTop < 150) {
      section1.className = "active";
      mobHme.style.color = "#FF5900";
    } else {
      section1.className = "";
      mobHme.style.color = "";
    }

    if (
      main.scrollTop > window.innerHeight / 2 &&
      main.scrollTop < window.innerHeight
    ) {
      section2.className = "active";
      mobSkll.style.color = "#FF5900";
    } else {
      section2.className = "";
      mobSkll.style.color = "";
    }

    if (
      main.scrollTop > window.innerHeight &&
      main.scrollTop <= window.innerHeight * 2.5
    ) {
      section3.className = "active";
      mobAbt.style.color = "#FF5900";
    } else {
      section3.className = "";
      mobAbt.style.color = "";
    }

    if (main.scrollTop > window.innerHeight * 2.5) {
      section4.className = "active";
      mobCnt.style.color = "#FF5900";
    } else {
      section4.className = "";
      mobCnt.style.color = "";
    }
  }
};

main.addEventListener("scroll", function () {
  scrollEvent();
  removeActive();
});

document.addEventListener("DOMContentLoaded", function () {
  scrollEvent();
  setTimeout(() => {
    var script = document.getElementById("fontAwesome");
    script.setAttribute("src", "https://kit.fontawesome.com/f3f08c04e9.js");
  }, 200);
});

var potes = document.querySelectorAll(".full-potential");
const mn = document.querySelector("main");
var is = document.querySelectorAll("#makeBig");
var funCall;
var as = document.querySelectorAll(".nav a");

potes.forEach((pot) => {
  pot.addEventListener("click", function () {
    var currentFullscreen = document.querySelector(".fullscreen");

    if (currentFullscreen) {
      currentFullscreen.classList.remove("fullscreen");
      mn.style.overflow = "";
      mobOpen.style.cursor = "";
      mobOpen.style.pointerEvents = "";
      as.forEach((a) => {
        a.style.cursor = "";
        a.style.pointerEvents = "";
      });
      sklMain.scroll({
        top: 0,
        behavior: "smooth",
      });

      showI();

      if (currentFullscreen === pot) {
        return;
      }
    }

    removeI();
    pot.classList.add("fullscreen");
    mn.style.overflow = "hidden";
    mobOpen.style.pointerEvents = "none";

    as.forEach((a) => {
      a.style.pointerEvents = "none";
    });

    switch (pot.id) {
      case "html":
        def = 0;
        showLang(def);
        break;
      case "css":
        def = 1;
        showLang(def);
        break;
      case "js":
        def = 2;
        showLang(def);
        break;
      case "java":
        def = 3;
        showLang(def);
        break;
      case "python":
        def = 4;
        showLang(def);
        break;
      case "cs":
        def = 5;
        showLang(def);
        break;
    }
  });
});

function removeI() {
  is.forEach((i) => {
    i.style.display = "none";
  });
}

function showI() {
  setTimeout(() => {
    is.forEach((i) => {
      i.style.display = "";
    });
  }, 400);
}

var currentFullscreen;

function removeActive() {
  currentFullscreen = document.querySelector(".fullscreen");

  if (count == 0) {
    return;
  }

  if (currentFullscreen != null && count != 0) {
    currentFullscreen.classList.remove("fullscreen");
    count += 1;
  }
  setTimeout(() => {
    showI();
  }, 750);
}

function showLang(num) {
  cont.style.left = "0";

  var elems = [
    {
      H: 'HTML <i class="fab fa-html5"></i>',
      T:
        'HTML ist die erste "Programmiersprache", die ich gelernt habe. Es war mein Einstieg in die Welt der Webentwicklung und hat meine Begeisterung für das Programmieren geweckt. Mittlerweile ist mein GitHub voll mit Repos, die eine Vielzahl von Projekten und Erfahrungen dokumentieren.' +
        " Von meinem eigenen Assistenten, der auf modernen Webtechnologien basiert, bis hin zu komplexen Webseiten, die über 10.000 Aufrufe in einem Monat erzielen, habe ich eine breite Palette an Projekten realisiert." +
        " Durch diese Projekte habe ich nicht nur meine HTML-Kenntnisse vertieft, sondern auch umfassende Erfahrungen mit CSS und JavaScript gesammelt.",
      I: "img/jessica.gif",
      A: "https://jessicaai.netlify.app",
      Alt: "HTML Web Vocie Assistant",
    },

    {
      H: 'CSS <i class="fab fa-css3"></i>',
      T:
        "Zusätzlich zu HTML habe ich gleichzeitig CSS angefangen zu lernen und auch diverse Bücher dazu gelesen. Dabei habe ich mich intensiv mit den Grundlagen von CSS wie Selektoren, Box-Modell, Layout-Techniken, " +
        " sowie fortgeschrittenen Konzepten wie Flexbox und Grid vertraut gemacht. Ich habe bereits viel Erfahrung mit CSS und verschiedenen Frameworks wie Bootstrap und Tailwind CSS sammeln können. Diese Frameworks haben mir geholfen, schnell und effizient responsive und ansprechende Designs zu erstellen.",
      I: "img/ziegelstein.webp",
      A: "https://www.w3.org/Style/CSS/Overview.en.html",
      Alt: "Erstes CSS-Projekt",
    },

    {
      H: 'Vue/JS <i class="fab fa-css3"></i>',
      T:
        "Ich habe bereits einige Projekte mit Vue.js und normalem JavaScript gemacht. Es ist wahrscheinlich auch die Sprache, die ich am besten beherrsche. Mit Vue.js und Firebase habe ich zum Beispiel ein funktionierendes (Google-)Login-System aufgebaut und in eine Web-App implementiert. Diese Kombination ermöglichte es mir, " +
        "eine robuste und sichere Authentifizierungslösung zu erstellen, die nahtlos in die Benutzererfahrung integriert ist. " +
        'Zudem habe ich mit JavaScript bereits unzählige Webseiten erstellt. Diese Projekte umfassen sowohl einfache statische Seiten als auch komplexere dynamische Anwendungen. Ein bemerkenswertes Beispiel ist die Entwicklung einer "KI", die unter meinen HTML-Kenntnissen zu finden ist.',
      I: "img/VueJS.webp",
      A: "https://quasar.dev/",
      Alt: "Framework Projekt",
    },

    {
      H: 'Java <i class="fab fa-java"></i>',
      T:
        "Die &apos;beste&apos; Programmiersprache durfte ich in der Berufsschule lernen." +
        " Ich habe damit kleine Programme (ohne GUI) geschrieben. Java gefällt mir sehr gut und ich kann mir vorstellen in Zukunft vermehrt damit zu arbeiten.",
      I: "https://coruzant.com/wp-content/uploads/2023/03/pexels-photo-270348-1.jpeg",
      A: "https://java.com",
      Alt: "Java Programm",
    },

    {
      H: 'Python <i class="fab fa-python"></i>',
      T:
        "Ich muss gestehen, dass meine Python-Künste noch nicht die besten sind." +
        ' Ich habe bis jetzt mit Python meine eigene Malware geschrieben, dies unter anderem mit der symmetrischen Verschlüsselung durch <a target="_blank" href="https://cryptography.io/en/latest/fernet/" style="text-decoration: none; color: #0e418d"><i class="fa-solid fa-link"></i>Fernet.</a> ' +
        "Ansonsten habe ich kleine Dinge automatisiert.",
      I: "https://pbs.twimg.com/media/Fm61cDKXoAIokGc.jpg",
      A: "https://python.org",
      Alt: "Python Projekt mit Fener encrypt",
    },

    {
      H: 'Cyber-Security <i class="fa-solid fa-user-secret"></i>',
      T:
        'Das Ganze rund um das Thema "Cyber-Security" interessiert mich sehr, vorallem auch, da uns dies in Zukunft immer mehr beschäftigen wird.' +
        ' Ich habe , was dies angeht, auch schon oft getüftelt und ausprobiert. Ich habe z.B. mit <a target="_blank" href="https://www.metasploit.com/" style="text-decoration: none; color: #bed4f7"><i class="fa-solid fa-link"></i>Metasploit </a>' +
        "bösartige PDF erstellt oder mit anderen Tools das anonyme hacken von Geräten studiert.",
      I: "img/kali.webp",
      A: "https://www.kali.org/",
      Alt: "Kali Linux mit Metasploit",
    },
  ];

  var elem = elems[num];

  if (elem.H == 'Python <i class="fab fa-python"></i>') {
    header.style.color = '#0e418d';
    text.style.color = '#0e418d';
  } else {
    header.style.color = '#bed4f7';
    text.style.color = '#bed4f7';
  }

  header.innerHTML = `${elem.H}`;
  text.innerHTML = elem.T;
  img.src = elem.I;
  imgA.href = `${elem.A}`;
  img.setAttribute("alt", elem.Alt);
  imgA.setAttribute("target", "_blank");
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    removeFullscreen();
  }
});

function removeFullscreen() {
  var active = document.querySelector(".fullscreen");
  cont.style.left = "-4000px";
  setTimeout(() => {
    active.click();
    active.classList.remove("fullscreen");
  }, 400);
  setTimeout(() => {
    showI();
  }, 500);
}

function openDrawer() {
  var x = document.getElementById("mobContent");
  x.style.left = "0";
}

function closeDrawer() {
  var x = document.getElementById("mobContent");
  x.style.left = "-5000px";
}

mobNav.forEach((element) => {
  element.addEventListener("click", function () {
    scrollEvent();
    var x = document.getElementById("mobContent");
    setTimeout(() => {
      x.style.left = "-5000px";
    }, 250);
  });
});

mobI.addEventListener("mouseover", function () {
  span.style.left = "0px";
});

mobI.addEventListener("mouseout", function () {
  span.style.left = "-30px";
});
