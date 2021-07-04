//zmieniamy nazwy nagłówków po 3 sekundach
// function changeHeading() {
//     let news = document.getElementById("news");
//     news.innerHTML = "Wesołe Newsy"
//     let sport = document.getElementById("sport");
//     sport.innerHTML = "Anty Sport";
// }
// setTimeout(changeHeading, 3000);

//zmieniamy kolor nagłówków
function addDynamicClassToH2() {
    let elementH2 = document.getElementsByTagName("h2");
    for(let i = 0; i < elementH2.length; i++) {
        const element = elementH2[i];
        element.classList.add("dynamic");
    }
}
addDynamicClassToH2();

//zmieniamy kolor drugich podpunktów nagłówków newsy i sport
function addDynamicClassToBullets() {
    let secondBullet = document.querySelectorAll("ul > li:nth-child(2)");
    const addDynamicClass = element => element.classList.add("dynamic");
    secondBullet.forEach(addDynamicClass);
}
addDynamicClassToBullets();

//dodajemy kolejny podpunkt do nagłówka sport przy pomocy innerHTML
//to rozwiązanie jest wolniejsze, bo za każdym razem powoduje podmianej całej zawartości elementu
function addSportNews() {
    let newList = document.querySelector("#sport-news");
    newList.innerHTML += "<li>Niemcy ponownie mistrzami świata w piłce nożnej</li>";
}
addSportNews();

//dodajemy kolejny podpunkt do nagłówka sport w sposób obiektowy i bardziej wydajny
//metoda appendChild() powoduje dodanie nowe węzła do już istniejącej zawartości i będzie wydajniejsze
function addSportNewsObject() {
    let newList = document.querySelector("#sport-news");
    let li = document.createElement("li");
    let text = document.createTextNode("Już za cztery lata Polska mistrzem świata");
    li.appendChild(text);
    newList.appendChild(li);
}
addSportNewsObject();

//usuwanie drugiego podpunktu z nagłówka Newsy
function removeSecondNews() {
    let secondNews = document.querySelector("#news-list > li:nth-child(2)");
    secondNews.remove();
}
removeSecondNews();