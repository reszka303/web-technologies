//stworzenie nagłówka h1 za pomocą getElementsByTagName która zwraca interfejs HTML Collection (tablica)
//phrase: How to add text to HTML element on web page using JavaScript DOM
https://stackoverflow.com/questions/64528778/how-to-add-text-to-html-element-on-web-page-using-javascript-dom

function createElementH1() {
    let elementH1 = document.getElementsByTagName("h1");
    let text = "HELLO WORLD - H1";
    elementH1[0].innerHTML = text;
}
createElementH1();

//stworzenie nagłówka h2 za pomocą getElementById(), która zwraca interfejs Element
//phrase: adding text to an existing text element in javascript via DOM
https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom

function createElementH2() {
    let elementH2 = document.getElementById("text");
    let text = document.createTextNode("HELLO WORLD - H3");
    elementH2.appendChild(text);
}
createElementH2(); 

function createHeading() {
    let text = "HELLO WORLD - TASK";
    let task = document.getElementById("task");
    simulateTypeWriter(task, text);
}

function simulateTypeWriter(task, text) {
    for(let i = 0; i < text.length; i++) {
        const letter = text.charAt(i);
        setTimeout(() => task.append(letter), (i + 1) * 200);
    }
}
createHeading();



