import"./vendor.a69da1c8.js";const f=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))C(A);new MutationObserver(A=>{for(const s of A)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&C(l)}).observe(document,{childList:!0,subtree:!0});function k(A){const s={};return A.integrity&&(s.integrity=A.integrity),A.referrerpolicy&&(s.referrerPolicy=A.referrerpolicy),A.crossorigin==="use-credentials"?s.credentials="include":A.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function C(A){if(A.ep)return;A.ep=!0;const s=k(A);fetch(A.href,s)}};f();var w="data:image/png;base64,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",I="/Answerius/assets/swisscows.8f7d8702.png",p="/Answerius/assets/lukol.f42cb539.png",u="/Answerius/assets/searxng.b5ea73b0.png",v="/Answerius/assets/brave-search.57a1d962.png",D="/Answerius/assets/peekier.27138c3d.png",R="/Answerius/assets/ecosia.6da569e6.png";const i={ddg:{img:w,link:"https://duckduckgo.com/?t=ffab&q=",name:"DuckDuckGo"},swisscows:{img:I,link:"https://swisscows.com/web?query=",name:"Swisscows"},lukol:{img:p,link:"https://www.lukol.com/s.php?q=",name:"Lukol"},searxng:{img:u,link:"https://searx.be/search?q=",name:"SearXNG"},braveSearch:{img:v,link:"https://search.brave.com/search?q=",name:"Brave Search"},peekier:{img:D,link:"https://peekier.com/#!",name:"Peekier"},ecosia:{img:R,link:"https://www.ecosia.org/search?method=index&q=",name:"Ecosia"}};var K="data:image/png;base64,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",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAFGUlEQVRo3sWZe0xWZRzHPy+gCET0UkLcQiNLIKyRDnQhbeJmGZVmrQuNLixjC9dKXRAqhTV1buUmNY02W3M0W1vzurStoaVoYOSiGWxEhMhVQ1GigNMfnBfO5XfgPQd4fX7/Pc/v8n2e5zy/23Fhd9zEQh4ggQTicBOKQi89dNFIA2epoo0pG/dQzBn+QxmTfmMbiybbdCAvUTOOYT39zjrCJsf4DNbRZsu4h66wBfdEzT9HEz28y2JSSGMV73GUPhsgulmDv1PjURxCQeG0YT6YlRxiwGsQVSQ5Mf8YXaqCIRKE9ViKueAlhGu8bM+4iyIGNQresOALoZgeL0F8QoC35v353CD82RjcEVR6CeEwwWbxANH884Y58x1Gk0gCUcwkmtu83NjDHCCb6+Md/h4Be5MGXhblNDp6lgoKR5g2NoB3RLHzqvFcGhyb9lD5WOZXMiQKHQOSODVh48OUb2U+lksWIh+RY8v9eGgtGWRRRLVuto/75dv/1lLROYd7/XBEewKF1I/M/yx9CbmTdMBaajdsMYvD6kohJvfaYqnmBPvHDcJWFGHaaDaNKFwhUj+9wUJBA2kAbHEIIEa4bDdVKJTp998lip/hFpVjhSPzgwSKn3sig/Rx++jEalG8nnBNWHYC4IRoPoM/UFB4f3TqVxH9gxqhzY4AmIPYTHaNhLlWTyBIEYXLdJ6/3dEb0Cdlt7KJyzqO5da76ydu5PGsolXkqOBJZgMh5NAhcORpjMezg14Tx87hRcnN7FEFF3FS3F0NKYaMudvAcRI/APxYSoXFMz4HEK5LPTyUCaRy0OJwvyTIdLsbDccfC8xhM81jXNIQ4ZAtLDSTytcWgUlht7o3/dA68qtks4YqL76Th2CTMN1raVxhLy7B/GKdRLfXKevr8IWtL/t70bWEc96hpyzDVpSvH/GM2pFOneNwtT+AKBvZcj876ONvIIgZhDCdMGZx9wQKnygXnV4nlVMx/vIjlBs5gv3Eb9qHAFxc4jqDuG/QSfzrIpB+ACK5jyVkk+hTAJelR1UhOuepoWYZ10LHebBdqnQRSDIxhHGNGg2eUA6Q6YMr2AXLNHh+4BENhGYfnEA+hBkCx2iofXsCijspp4AlzOVmNVrMZzUXTXzJAGcNk9+puVqMRUzbRylreIZMkoghjW1C2bZWPPByA1fHsBcqkYIkAN+IAF40KV5Kv4GnQARQIDc+kk0m2tReRqr4II8IqksNPIdEABsNXMs8C7UmI2+qK9sFAAPMFRq4nYZkK0sAcFTH0zpaouYJ/b0ItU0p1QyVTDcpLzSd4iwDR4ohzyoZXQoSSrNjKr54/hQgHDClpaE0GXjq1Bfg6Uad1pU9p/SZyHqxLeHJ6cv4Ude8GOQC201xdB6/aLLi43xAvGY1kqd4hVd5gUdJN4e+ILE8f9rAE088btxjNJrCuZNoQpw4xRyxw7nIl6HxsAChy1ABTemIE5tU7b7MEJaLjsenEEpE59vCvb4C4GK3COEqK3wFwZ99Fv2eIl9l0P58ahHlD9qqoyZ0ESUW9XEX+d7/eJjoi+iy/DOYKwQjq7GAn/jYGYQ7OGKZcrWwcdyi1EUGexngOHc5P4dnxQbVaKdoK48bvotgUniC9XxFBwrtvCb2U+xUb7wl9sC09A9NVFNNve4XVg+lk1XwhZBn6PmP/+u2YPKrzXlsoGacsm2QOrYy386DszvCSGcBc5hNNG6CmEYPHVyknjpqqaXXnrr/AUHCIxVzVKDBAAAAAElFTkSuQmCC",Q="data:image/png;base64,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",U="data:image/png;base64,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",O="data:image/png;base64,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",y="/Answerius/assets/censorTracker.75195c0a.png",q="/Answerius/assets/duckduckgoForFirefox.4120eecc.png",x="/Answerius/assets/canvasBlocker.01f1be44.png",S="data:image/png;base64,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",F="data:image/png;base64,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",Y="/Answerius/assets/cookieQuickManager.93be6b83.png",X="/Answerius/assets/noscript.0da13604.png";const o={privacyBadger17:{img:K,link:"https://addons.mozilla.org/ru/firefox/addon/privacy-badger17/",name:"Privacy Badger"},privacyPossum:{img:N,link:"https://addons.mozilla.org/ru/firefox/addon/privacy-possum/",name:"Privacy Possum"},decentraleyes:{img:Q,link:"https://addons.mozilla.org/ru/firefox/addon/decentraleyes/",name:"Decentraleyes"},uBlockOrigin:{img:U,link:"https://addons.mozilla.org/ru/firefox/addon/ublock-origin/",name:"uBlock Origin"},chameleonExt:{img:O,link:"https://addons.mozilla.org/ru/firefox/addon/chameleon-ext/",name:"Chameleon"},censorTracker:{img:y,link:"https://addons.mozilla.org/ru/firefox/addon/censor-tracker/",name:"Censor Tracker"},duckduckgoForFirefox:{img:q,link:"https://addons.mozilla.org/ru/firefox/addon/duckduckgo-for-firefox/",name:"DuckDuckGo Privacy Essentials"},canvasBlocker:{img:x,link:"https://addons.mozilla.org/ru/firefox/addon/canvasblocker/",name:"CanvasBlocker"},httpsEverywhere:{img:S,link:"https://addons.mozilla.org/ru/firefox/addon/https-everywhere/",name:"HTTPS Everywhere"},clearurls:{img:F,link:"https://addons.mozilla.org/ru/firefox/addon/clearurls/",name:"ClearURLs"},cookieQuickManager:{img:Y,link:"https://addons.mozilla.org/ru/firefox/addon/cookie-quick-manager/",name:"Cookie Quick Manager"},noscript:{img:X,link:"https://addons.mozilla.org/ru/firefox/addon/noscript/",name:"NoScript"}},t=document.getElementById("pseudo-body"),n=document.querySelector(".wrapper"),h=document.querySelector(".cards");if(n.classList.contains("page_index"))for(let e in i)h.innerHTML+=`<div class="col s12 m6 l4">
    <div class="card site_card hoverable grey lighten-2 center">
      <div class="card-content">
        <div class="card_icon">
          <img
            src="${i[e].img}"
            class="responsive-img"
          />
        </div>
        <p>${i[e].name}</p>
      </div>
      <div class="card-action">
        <a
          data-base-href="${i[e].link}"
          class="btn waves-effect waves-light my_btn go_button" target="_blank"
          >\u041F\u0435\u0440\u0435\u0439\u0442\u0438 <i class="material-icons">arrow_forward</i></a
        >
      </div>
    </div>
</div>`;if(n.classList.contains("page_extensions"))for(let e in o)h.innerHTML+=`<div class="col s12">
    <div class="card hoverable grey lighten-2">
      <div class="card-content">
        <div class="card_icon">
          <img
            src="${o[e].img}"
            class="responsive-img"
          />
        </div>
        <p class="name">${o[e].name}</p>
        <a
          href="${o[e].link}"
          class="btn waves-effect waves-light my_btn go_button" target="_blank"
          >\u041F\u0435\u0440\u0435\u0439\u0442\u0438 <i class="material-icons">arrow_forward</i></a
        >
      </div>
    </div>
</div>`;const r=document.querySelector("header"),c=document.querySelector("footer"),M=document.querySelectorAll("footer a"),d=document.getElementById("theme_switcher"),g=document.getElementById("search_input"),B=document.getElementById("search_label"),H=document.querySelectorAll(".card"),E=document.querySelectorAll(".site_card .go_button");function m(){t.classList.toggle("dark"),t.classList.toggle("lighten-4"),t.classList.toggle("text-darken-4"),t.classList.toggle("darken-4"),t.classList.toggle("text-lighten-4"),r.classList.toggle("lighten-2"),r.classList.toggle("text-darken-4"),r.classList.toggle("darken-2"),r.classList.toggle("text-lighten-4"),c.classList.toggle("lighten-2"),c.classList.toggle("text-darken-4"),c.classList.toggle("darken-2"),c.classList.toggle("text-lighten-4"),M.forEach(e=>{e.classList.toggle("text-darken-3"),e.classList.toggle("text-lighten-4")}),n.classList.contains("page_index")&&(g.classList.toggle("text-darken-4"),g.classList.toggle("text-lighten-4"),B.classList.toggle("text-darken-4"),B.classList.toggle("text-lighten-4")),H.forEach(e=>{e.classList.toggle("lighten-4"),e.classList.toggle("darken-4")}),t.classList.contains("dark")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}localStorage.getItem("theme")=="dark"?(d.setAttribute("checked",""),m()):d.removeAttribute("checked");if(n.classList.contains("page_index")){let e=function(){/\S+/.test(g.value)?E.forEach(a=>{a.removeAttribute("disabled"),a.href=a.dataset.baseHref+g.value}):E.forEach(a=>{a.setAttribute("disabled",!0)})};e(),g.addEventListener("input",e)}d.addEventListener("click",m);