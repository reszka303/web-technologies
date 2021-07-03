//pobieramy nagłówek 
function showNewsHeading() {
    let newHeading = document.getElementById("news");
    console.log(newHeading.innerHTML); 
}
showNewsHeading();
//inner HTML pobiera całą zawartość znajdującą się między nagłówkami, nie tylko tekst
//ale także zawrtość danego elementu

function showFirstNews() {
    let newList = document.getElementById("news-list");
    console.log(newList.getElementsByTagName("li")[0].innerHTML);
    // console.log(newList.getElementsByTagName("li").item(1).innerHTML);
}
showFirstNews();

function showSportsNews() {
    let sportNews = document.querySelectorAll("ul#sport-news > li");
    for(let i = 0; i < sportNews.length; i++) {
        const element = sportNews[i];
        console.log(element.innerHTML);
    }
    // sportNews.forEach(element => console.log(element.innerHTML)); 
    // inny możliwy zapis 
}
showSportsNews();

// jeśli damy "#sport-news to wyświetli się taka informacja:
// <li>Lewandowski królem strzelców</li>
// <li>Małysz z rekordem skoczni</li>
// jeśli damy ul#sport-news > li (selektor potomka) to wtedy wyświetli się:
// Lewandowski królem strzelców
// script.js:21 Małysz z rekordem skoczni

/*
getElementById(string)
getElementsByClassName(string)
getElementsByName(string)
getElementsByTagName(string)
querySelector(string)
querySelectorAll(string)
*/