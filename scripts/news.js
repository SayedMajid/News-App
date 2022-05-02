// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

let a = document.getElementById('headingName')
a.addEventListener('click', function(){
    window.location.href = 'index.html'
})
