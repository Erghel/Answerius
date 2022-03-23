"use strict";

function AnswerScrapper() {
    let answer = prompt("Введите ваш запрос", "");
    let ddg = `<a target="blank_" href="https://duckduckgo.com/?t=ffab&q=${answer}">Ответ</a>` + " - DuckDuckGo " + `<img src="https://cdn.iconscout.com/icon/free/png-64/duckduckgo-2752202-2285019.png">`;
    let sc = `<a target="blank_" href="https://swisscows.com/web?query=${answer}">Ответ</a>` + " - Swisscows " + `<img src="https://cdn.iconscout.com/icon/free/png-64/cow-212-1115892.png">`;
    let lk = `<a target="blank_" href="https://www.lukol.com/s.php?q=${answer}">Ответ</a>` + " - Lukol " + `<img src="https://cdn.iconscout.com/icon/free/png-64/hacker-14-448404.png">`;
    let sx = `<a target="blank_" href="https://searx.be/search?q=${answer}">Ответ</a>` + " - SearXNG " + `<img src="https://cdn.iconscout.com/icon/free/png-64/magnifier-1439746-1214318.png">`;
    let bv = `<a target="blank_" href="https://search.brave.com/search?q=${answer}">Ответ</a>` + " - Brave Search ";

        document.getElementById("ddg").innerHTML = ddg;
    //  document.getElementById("sp").innerHTML = `<a target="blank_" href="https://www.startpage.com/?q=${answer}">Ответ</a>` + " - Startpage" + `img src="https://cdn.iconscout.com/icon/free/png-64/magnifier-1439746-1214318.png">`;
        document.getElementById("sc").innerHTML = sc;
        document.getElementById("lk").innerHTML = lk;
        document.getElementById("sx").innerHTML = sx;
        document.getElementById("bv").innerHTML = bv;
        console.log(`${answer}`);
    }