// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

let a = document.getElementById('headingName')
a.addEventListener('click', function(){
    window.location.href = 'index.html'
})