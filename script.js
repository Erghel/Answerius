"use strict";

function AnswerScrapper() {
    let answer = prompt("Введите ваш запрос", "");
    let ddg = `<a target="blank_" href="https://duckduckgo.com/?t=ffab&q=${answer}">Ответ</a>` + " - DuckDuckGo ";
    let sc = `<a target="blank_" href="https://swisscows.com/web?query=${answer}">Ответ</a>` + " - Swisscows ";
    let lk = `<a target="blank_" href="https://www.lukol.com/s.php?q=${answer}">Ответ</a>` + " - Lukol ";
    let sx = `<a target="blank_" href="https://searx.be/search?q=${answer}">Ответ</a>` + " - SearXNG ";
    let bv = `<a target="blank_" href="https://search.brave.com/search?q=${answer}">Ответ</a>` + " - Brave Search ";
    let pk = `<a target="blank_" href="https://peekier.com/#!${answer}">Ответ</a>` + " - Peekier ";
    let ea = `<a target="blank_" href="https://www.ecosia.org/search?method=index&q=${answer}">Ответ</a>` + " - Ecosia ";
    let gb = `<a target="blank_" href="https://gigablast.com/search?c=main&qlangcountry=en-us&q=${answer}">Ответ</a>` + " - Gigablast ";

        document.getElementById("ddg").innerHTML = ddg;
    //  document.getElementById("sp").innerHTML = `<a target="blank_" href="https://www.startpage.com/?q=${answer}">Ответ</a>` + " - Startpage" + `img src="https://cdn.iconscout.com/icon/free/png-64/magnifier-1439746-1214318.png">`;
        document.getElementById("sc").innerHTML = sc;
        document.getElementById("lk").innerHTML = lk;
        document.getElementById("sx").innerHTML = sx;
        document.getElementById("bv").innerHTML = bv;
        document.getElementById("pk").innerHTML = pk;
        document.getElementById("ea").innerHTML = ea;
        document.getElementById("gb").innerHTML = gb;

        console.log(`${answer}`);

    }